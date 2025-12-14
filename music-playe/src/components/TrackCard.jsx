function TrackCard({ track, onSelect }) {
  return (
    <div
      onClick={() => onSelect(track)}
      className="cursor-pointer border rounded p-3 hover:shadow-lg transition"
    >
      <img
        src={track.album.cover_medium}
        alt={track.title}
        className="w-full rounded"
      />
      <h3 className="font-semibold mt-2">{track.title}</h3>
      <p className="text-gray-600 text-sm">{track.artist.name}</p>
    </div>
  );
}

export default TrackCard;
