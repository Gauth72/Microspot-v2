import { IconType } from 'react-icons';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

export default function FeatureCard({ title, description, icon: Icon, color }: FeatureCardProps) {
  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`w-14 h-14 rounded-xl ${color} p-4 mb-6`}>
        <Icon className="w-full h-full text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
