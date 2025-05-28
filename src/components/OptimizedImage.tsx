import Image from 'next/image';

interface OptimizedImageProps {
  keyword: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

// Map des images Unsplash présélectionnées
const imageMap: { [key: string]: string } = {
  'modern retail space,commercial property': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
  'retail storefront,commercial space': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
  'vending machine,kiosk business': 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980',
  'business growth,success metrics': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
  'customer service,help desk': 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
  // Images intérieures
  'shopping mall interior': 'https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf',
  'office building lobby': 'https://images.unsplash.com/photo-1497366216548-37526070297c',
  'train station interior': 'https://images.unsplash.com/photo-1519677584237-752f8853252e',
  'modern coworking space': 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
  'hotel lobby': 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
  'gym interior': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
  // Images extérieures
  'storefront retail': 'https://images.unsplash.com/photo-1519810755548-39cd217da494',
  'parking lot commercial': 'https://images.unsplash.com/photo-1590674899484-d5640e854abe',
  'market square': 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb',
  'industrial park': 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866',
  'restaurant terrace': 'https://images.unsplash.com/photo-1520333789090-1afc82db536a',
  'gas station': 'https://images.unsplash.com/photo-1565620731358-e8c038abc8d1'
};

export default function OptimizedImage({ keyword, width, height, className = '', priority = false }: OptimizedImageProps) {
  // Utiliser l'URL statique ou une image par défaut
  const baseUrl = imageMap[keyword] || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8';
  const imageUrl = `${baseUrl}?w=${width}&h=${height}&fit=crop&auto=format`;
  
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      <Image
        src={imageUrl}
        alt={`Image ${keyword}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover' }}
        className="rounded-lg transition-transform duration-700 hover:scale-110"
        priority={priority}
      />
    </div>
  );
}
