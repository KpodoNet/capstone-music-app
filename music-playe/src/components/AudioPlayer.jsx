function AudioPlayer({ track }) {
  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
        <img
          src={track.album.cover_small}
          alt={track.title}
          className="w-14 h-14 rounded"
        />

        <div className="flex-1">
          <h3 className="font-semibold">{track.title}</h3>
          <p className="text-sm text-gray-300">
            {track.artist.name}
          </p>
        </div>

        <audio
          controls
          src={track.preview}
          className="w-64"
        />
      </div>
    </div>
  );
}

export default AudioPlayer;
