import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

enum MainCategory {
  VENDING_MACHINE = 'VENDING_MACHINE',
  KIOSK = 'KIOSK',
  ARCADE = 'ARCADE',
  LOGISTICS = 'LOGISTICS',
  MISC = 'MISC'
}

enum SpaceType {
  INDOOR = 'INDOOR',
  OUTDOOR = 'OUTDOOR',
  MIXED = 'MIXED'
}

export async function POST(request: Request) {
  try {
    console.log('Starting POST request to create listing');
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      console.log('No session found');
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }

    console.log('User authenticated:', session.user);
    const data = await request.json();
    console.log('Received data:', data);
    const { images, subCategory, specificType, ...listingData } = data;
    
    // Traitement du type spécifique en fonction de la catégorie principale
    let vendingTypeData = {};
    if (data.mainCategory === MainCategory.VENDING_MACHINE && specificType) {
      switch (subCategory) {
        case 'FOOD':
          vendingTypeData = { foodVendingType: specificType };
          break;
        case 'FARM':
          vendingTypeData = { farmVendingType: specificType };
          break;
        case 'GOODS':
          vendingTypeData = { goodsVendingType: specificType };
          break;
        case 'PET':
          vendingTypeData = { petVendingType: specificType };
          break;
      }
    } else if (data.mainCategory === MainCategory.KIOSK && specificType) {
      switch (subCategory) {
        case 'FOOD':
          vendingTypeData = { foodKioskType: specificType };
          break;
        case 'OTHER':
          vendingTypeData = { otherKioskType: specificType };
          break;
        case 'WELLNESS':
          vendingTypeData = { wellnessKioskType: specificType };
          break;
      }
    } else if (specificType) {
      switch (data.mainCategory) {
        case MainCategory.ARCADE:
          vendingTypeData = { arcadeType: specificType };
          break;
        case MainCategory.LOGISTICS:
          vendingTypeData = { logisticsType: specificType };
          break;
        case MainCategory.MISC:
          vendingTypeData = { miscType: specificType };
          break;
      }
    }

    console.log('ListingData with types:', { ...listingData, ...vendingTypeData });
    
    console.log('Preparing listing data:', {
      ...listingData,
      ...vendingTypeData,
      ownerId: session.user.id,
      images: images
    });

    try {
      const createData = {
        ...listingData,
        ...vendingTypeData,
        ownerId: session.user.id,
        images: {
          create: images.map((image: string) => ({
            url: image
          })),
        },
      };
      console.log('Data to be sent to Prisma:', JSON.stringify(createData, null, 2));

      const listing = await prisma.listing.create({
        data: createData,
        include: {
          images: true,
        },
      });

      console.log('Listing created successfully:', listing);
      return NextResponse.json(listing);
    } catch (prismaError) {
      console.error('Prisma error details:', {
        name: prismaError.name,
        message: prismaError.message,
        code: (prismaError as any).code,
        meta: (prismaError as any).meta
      });
      return NextResponse.json(
        { error: `Erreur lors de la création de l'annonce: ${prismaError.message}` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in POST route:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erreur lors de la création de l\'annonce' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Paramètres de recherche de base
    const query = searchParams.get('query');
    const location = searchParams.get('location');
    
    // Filtres principaux
    const mainCategory = searchParams.get('mainCategory');
    const spaceType = searchParams.get('spaceType');
    
    // Filtres de surface et prix
    const minSurface = searchParams.get('minSurface');
    const maxSurface = searchParams.get('maxSurface');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    
    // Filtres d'équipements
    const hasConcreteSlab = searchParams.get('hasConcreteSlab');
    const hasElectricity = searchParams.get('hasElectricity');
    const hasWater = searchParams.get('hasWater');
    const hasInternet = searchParams.get('hasInternet');
    
    // Filtre d'accès
    const access = searchParams.get('access');

    let whereClause: any = {
      status: 'ACTIVE',
    };

    // Recherche textuelle
    if (query) {
      whereClause.OR = [
        { title: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } }
      ];
    }

    // Recherche par localisation
    if (location) {
      whereClause.OR = [
        { city: { contains: location, mode: 'insensitive' } },
        { postalCode: { contains: location, mode: 'insensitive' } }
      ];
    }

    // Filtres principaux
    if (mainCategory) whereClause.mainCategory = mainCategory;
    if (spaceType) whereClause.spaceType = spaceType;

    // Filtres de surface
    if (minSurface || maxSurface) {
      whereClause.surface = {};
      if (minSurface) whereClause.surface.gte = parseFloat(minSurface);
      if (maxSurface) whereClause.surface.lte = parseFloat(maxSurface);
    }

    // Filtres de prix
    if (minPrice || maxPrice) {
      whereClause.price = {};
      if (minPrice) whereClause.price.gte = parseFloat(minPrice);
      if (maxPrice) whereClause.price.lte = parseFloat(maxPrice);
    }

    // Filtres d'équipements
    if (hasConcreteSlab === 'true') whereClause.hasConcreteSlab = true;
    if (hasElectricity === 'true') whereClause.hasElectricity = true;
    if (hasWater === 'true') whereClause.hasWater = true;
    if (hasInternet === 'true') whereClause.internetType = { not: null };

    // Filtre d'accès
    if (access) {
      if (access === '24_7') {
        whereClause.is24_7 = true;
      } else if (access === 'scheduled') {
        whereClause.is24_7 = false;
      }
    }

    const listings = await prisma.listing.findMany({
      where: whereClause,
      include: {
        owner: {
          select: {
            name: true,
            email: true,
          },
        },
        images: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(listings);
  } catch (error) {
    console.error('Error fetching listings:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des annonces' },
      { status: 500 }
    );
  }
}
