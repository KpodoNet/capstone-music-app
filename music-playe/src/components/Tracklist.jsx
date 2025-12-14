import TrackCard from "./TrackCard";

function TrackList({ tracks, onSelect }) {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default TrackList;
