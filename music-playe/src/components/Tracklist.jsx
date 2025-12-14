import TrackCard from "./TrackCard";

function TrackList({ tracks, onSelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
      {tracks.map((track) => (
        <TrackCard
          key={track.id}
          track={track}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default TrackList;
