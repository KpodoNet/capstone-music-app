import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import TrackList from "./components/TrackList";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleSearch = async () => {
    if (!searchTerm) return;

    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${searchTerm}`
    );
    const data = await response.json();
    setTracks(data.data);
    setSelectedTrack(null);
  };

  return (
    <div>
      <Navbar />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      <TrackList tracks={tracks} onSelect={setSelectedTrack} />
      <AudioPlayer track={selectedTrack} />
    </div>
  );
}

export default App;
