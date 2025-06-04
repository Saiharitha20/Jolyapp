import PhotoTypeCard from './Photo TypeCard';

const groups = [
  { title: 'Candid', img: '/Project-icons/photo1.svg', photoCount: 0 },
  { title: 'Landscape', img: '/Project-icons/photo2.svg', photoCount: 0 },
  { title: 'Panaroma', img: '/Project-icons/photo3.svg', photoCount: 0 },
  { title: 'Portrait', img: '/Project-icons/photo4.svg', photoCount: 0 },
];

export default function PhotoTypeGroups() {
    return (
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Groups</h3>
        <div className="grid grid-cols-4 gap-4">
          {groups.map(group => (
            <PhotoTypeCard key={group.title} {...group} />
          ))}
        </div>
      </section>
    );
  }
  