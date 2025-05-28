interface StatCardProps {
  number: string;
  text: string;
}

export default function StatCard({ number, text }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
      <p className="text-4xl font-bold text-indigo-600 mb-2">{number}</p>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
