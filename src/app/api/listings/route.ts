import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }

    const data = await request.json();
    console.log('Received data:', data);
    const { images, subCategory, specificType, ...listingData } = data;
    
    // Traitement du type spécifique en fonction de la catégorie principale
    let vendingTypeData = {};
    if (data.mainCategory === 'VENDING_MACHINE' && specificType) {
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
    } else if (data.mainCategory === 'KIOSK' && specificType) {
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
        case 'ARCADE':
          vendingTypeData = { arcadeType: specificType };
          break;
        case 'LOGISTICS':
          vendingTypeData = { logisticsType: specificType };
          break;
        case 'MISC':
          vendingTypeData = { miscType: specificType };
          break;
      }
    }

    console.log('ListingData with types:', { ...listingData, ...vendingTypeData });
    
    const listing = await prisma.listing.create({
      data: {
        ...listingData,
        ...vendingTypeData,
        ownerId: session.user.id,
        images: {
          create: images.map((image: { url: string; publicId: string }) => ({
            url: image.url,
            publicId: image.publicId,
          })),
        },
      },
      include: {
        images: true,
      },
    });

    return NextResponse.json(listing);
  } catch (error) {
    console.error('Error creating listing:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'annonce' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const mainCategory = searchParams.get('mainCategory');
    const subCategory = searchParams.get('subCategory');
    const specificType = searchParams.get('specificType');
    const minSurface = searchParams.get('minSurface');
    const maxSurface = searchParams.get('maxSurface');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const city = searchParams.get('city');
    const postalCode = searchParams.get('postalCode');
    const spaceType = searchParams.get('spaceType');
    const is24_7 = searchParams.get('is24_7');
    const openBefore = searchParams.get('openBefore');
    const openAfter = searchParams.get('openAfter');

    let whereClause: any = {
      status: 'ACTIVE',
    };

    if (mainCategory) whereClause.mainCategory = mainCategory;

    // Add specific type based on main category and subcategory
    if (specificType) {
      if (mainCategory === 'VENDING_MACHINE') {
        switch (subCategory) {
          case 'FOOD':
            whereClause.foodVendingType = specificType;
            break;
          case 'FARM':
            whereClause.farmVendingType = specificType;
            break;
          case 'GOODS':
            whereClause.goodsVendingType = specificType;
            break;
          case 'PET':
            whereClause.petVendingType = specificType;
            break;
        }
      } else if (mainCategory === 'ARCADE') {
        whereClause.arcadeType = specificType;
      } else if (mainCategory === 'LOGISTICS') {
        whereClause.logisticsType = specificType;
      } else if (mainCategory === 'MISC') {
        whereClause.miscType = specificType;
      } else if (mainCategory === 'KIOSK') {
        switch (subCategory) {
          case 'FOOD':
            whereClause.foodKioskType = specificType;
            break;
          case 'OTHER':
            whereClause.otherKioskType = specificType;
            break;
          case 'WELLNESS':
            whereClause.wellnessKioskType = specificType;
            break;
        }
      }
    }
    if (city) whereClause.city = { contains: city, mode: 'insensitive' };
    if (postalCode) whereClause.postalCode = postalCode;
    if (spaceType) whereClause.spaceType = spaceType;
    if (is24_7 === 'true') whereClause.is24_7 = true;
    
    // Filtrage par horaires d'ouverture
    if (openBefore || openAfter) {
      whereClause.OR = [
        { is24_7: true },
        {
          AND: [
            openBefore ? { openingTime: { lte: openBefore } } : {},
            openAfter ? { closingTime: { gte: openAfter } } : {}
          ]
        }
      ];
    }
    if (minSurface) whereClause.surface = { gte: parseFloat(minSurface) };
    if (maxSurface) whereClause.surface = { ...whereClause.surface, lte: parseFloat(maxSurface) };
    if (minPrice) whereClause.price = { gte: parseFloat(minPrice) };
    if (maxPrice) whereClause.price = { ...whereClause.price, lte: parseFloat(maxPrice) };

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
