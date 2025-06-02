'use client';

type SchemaPlace = {
  '@context': 'https://schema.org';
  '@type': 'Place';
  '@id': string;
  name: string;
  description: string;
  image: string[];
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    postalCode: string;
    addressLocality: string;
    addressCountry: string;
  };
  additionalProperty: Array<{
    '@type': 'PropertyValue';
    name: string;
    value: string;
  }>;
  openingHoursSpecification?: {
    '@type': 'OpeningHoursSpecification';
    opens: string;
    closes: string;
    dayOfWeek: string[];
  };
  dateModified: string;
};

interface ListingSchemaProps {
  id: string;
  title: string;
  description: string;
  price: number;
  surface: number;
  address: string;
  postalCode: string;
  city: string;
  images: string[];
  mainCategory: string;
  hasElectricity?: boolean;
  hasWater?: boolean;
  hasConcreteSlab?: boolean;
  internetType?: string;
  is24h?: boolean;
  openingTime?: string;
  closingTime?: string;
}

export default function ListingSchema({
  id,
  title,
  description,
  price,
  surface,
  address,
  postalCode,
  city,
  images,
  mainCategory,
  hasElectricity,
  hasWater,
  hasConcreteSlab,
  internetType,
  is24h,
  openingTime,
  closingTime,
}: ListingSchemaProps) {
  const schema: SchemaPlace = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `https://microspot.com/annonces/${id}`,
    name: title,
    description: description,
    image: images,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      postalCode: postalCode,
      addressLocality: city,
      addressCountry: 'FR',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue' as const,
        name: 'Surface',
        value: `${surface} m²`,
      },
      {
        '@type': 'PropertyValue' as const,
        name: 'Prix mensuel',
        value: `${price} €`,
      },
      {
        '@type': 'PropertyValue' as const,
        name: 'Type',
        value: mainCategory,
      },
      {
        '@type': 'PropertyValue' as const,
        name: 'Électricité',
        value: hasElectricity ? 'Oui' : 'Non',
      },
      {
        '@type': 'PropertyValue' as const,
        name: 'Eau',
        value: hasWater ? 'Oui' : 'Non',
      },
      {
        '@type': 'PropertyValue' as const,
        name: 'Dalle béton',
        value: hasConcreteSlab ? 'Oui' : 'Non',
      },
      internetType && {
        '@type': 'PropertyValue' as const,
        name: 'Internet',
        value: internetType,
      },
    ].filter(Boolean),
    ...(is24h || (openingTime && closingTime) ? {
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification' as const,
        opens: is24h ? '00:00' : openingTime || '',
        closes: is24h ? '23:59' : closingTime || '',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday',
          'Thursday', 'Friday', 'Saturday', 'Sunday'
        ]
      }
    } : {}),
    dateModified: new Date().toISOString()
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}      {
        '@type': 'PropertyValue',
        name: 'Prix mensuel',
        value: `${price} €`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Type',
        value: mainCategory,
      },
      {
        '@type': 'PropertyValue',
        name: 'Électricité',
        value: hasElectricity ? 'Oui' : 'Non',
      },
      {
        '@type': 'PropertyValue',
        name: 'Eau',
        value: hasWater ? 'Oui' : 'Non',
      },
      {
        '@type': 'PropertyValue',
        name: 'Dalle béton',
        value: hasConcreteSlab ? 'Oui' : 'Non',
      },
      internetType && {
        '@type': 'PropertyValue',
        name: 'Internet',
        value: internetType,
      },
    ].filter(Boolean) as PropertyValue[],
    ...(is24h || (openingTime && closingTime) ? {
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        opens: is24h ? '00:00' : openingTime,
        closes: is24h ? '23:59' : closingTime,
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday',
          'Thursday', 'Friday', 'Saturday', 'Sunday'
        ],
      } as OpeningHoursSpecification
    } : {}),
    dateModified: new Date().toISOString()
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}
