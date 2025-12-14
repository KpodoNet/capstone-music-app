function AudioPlayer({ track }) {
  if (!track) return null;

  return (
    <div className="mt-6 p-4 border-t bg-gray-100">
      <div className="flex items-center gap-4">
        <img
          src={track.album.cover_small}
          alt={track.title}
          className="w-16 h-16 rounded"
        />
        <div>
          <h3 className="font-bold">{track.title}</h3>
          <p className="text-sm text-gray-600">{track.artist.name}</p>
        </div>
      </div>

      <audio
        controls
        src={track.preview}
        className="w-full mt-3"
      />
    </div>
  );
}

export default AudioPlayer;
