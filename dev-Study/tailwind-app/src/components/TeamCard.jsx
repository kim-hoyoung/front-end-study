export default function TeamCard({ member }) {
  const { name, position, image, bio } = member;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl text-gray-600 font-semibold mb-1">{name}</h2>
        <p className="text-sm text-gray-600 mb-2">{position}</p>
        <p className="text-sm text-gray-700">{bio}</p>
      </div>
    </div>
  );
}
