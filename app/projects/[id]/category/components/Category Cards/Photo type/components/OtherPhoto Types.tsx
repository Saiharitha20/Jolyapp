import PhotoTypeCard from './Photo TypeCard';

const otherTypes: any[] = [
  // Add your actual data here
];

export default function OtherPhotoTypes() {
  if (otherTypes.length === 0) return null;
  return (
    <section>
      <h3 className="text-lg font-semibold mb-3">Other</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {otherTypes.map(type => (
          <PhotoTypeCard key={type.title} {...type} />
        ))}
      </div>
    </section>
  );
}
