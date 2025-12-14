function TrackCard({ track, onSelect }) {
  return (
    <div
      onClick={() => onSelect(track)}
      className="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
    >
      <img
        src={track.album.cover_medium}
        alt={track.title}
        className="w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 truncate">
          {track.title}
        </h3>
        <p className="text-sm text-gray-600 truncate">
          {track.artist.name}
        </p>
      </div>
    </div>
  );
}

export default TrackCard;
