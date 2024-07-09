import React, { useState, useRef, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "./player.css";

const Player = () => {
  const [songs, setSongs] = useState(() => {
    const savedSongs = localStorage.getItem("songs");
    return savedSongs ? JSON.parse(savedSongs) : [];
  });
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isLoopingPlaylist, setIsLoopingPlaylist] = useState(false);
  const audioRef = useRef(null);

  const saveSongsToLocalStorage = (songs) => {
    try {
      const metadata = songs.map(song => ({
        title: song.title,
        playCount: song.playCount
      }));
      localStorage.setItem('songs', JSON.stringify(metadata));
    } catch (e) {
      if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") {
        alert("The song is too big to be added to the localStorage.");
      } else {
        console.error("Error saving to localStorage", e);
      }
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    const readFilesAsDataURLs = acceptedFiles.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve({
            title: file.name,
            url: reader.result,
            playCount: 0, // Initialize play count
          });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readFilesAsDataURLs).then(newSongs => {
      const updatedSongs = [...songs, ...newSongs];
      setSongs(updatedSongs);
      saveSongsToLocalStorage(updatedSongs);
    });
  }, [songs]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "audio/mp3",
    playerCount: 0,
  });

  const playPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    const newSongs = [...songs];
    newSongs[currentSongIndex].playCount += 1; // Increment play count
    setSongs(newSongs);
    saveSongsToLocalStorage(newSongs);
    if (isLoopingPlaylist) {
      setCurrentSongIndex((currentSongIndex + 1) % newSongs.length);
    } else {
      setCurrentSongIndex((currentSongIndex + 1) < newSongs.length ? currentSongIndex + 1 : 0);
    }
    setIsPlaying(false);
  };

  const resetPlaylist = () => {
    setSongs([]);
    setCurrentSongIndex(0);
    setIsPlaying(false);
    localStorage.removeItem('songs');
  };

  const playSong = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  const toggleLoopPlaylist = () => {
    setIsLoopingPlaylist(!isLoopingPlaylist);
  };

  const shuffleSongs = () => {
    const shuffledSongs = [...songs];
    for (let i = shuffledSongs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]];
    }
    setSongs(shuffledSongs);
    setCurrentSongIndex(0);
    saveSongsToLocalStorage(shuffledSongs);
    setIsPlaying(true)
  };

  useEffect(() => {
    if (songs.length > 0) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex, songs, isPlaying]);

  return (
    <>
      <div className="music-player">
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <p>Drag 'n drop some files here, or click to select files</p>
          )}
        </div>
        {songs.length > 0 && (
          <>
            <h3>{songs[currentSongIndex].title}</h3>
            <audio
              ref={audioRef}
              src={songs[currentSongIndex].url}
              onEnded={nextSong}
              loop={isLooping}
            />
            <button onClick={playPause}>{isPlaying ? "Pause" : "Play"}</button>
            <button onClick={nextSong}>Next</button>
            <button onClick={resetPlaylist}>Reset</button>
            <button onClick={toggleLoop}>
              {isLooping ? "Stop Looping Song" : "Loop Song"}
            </button>
            <button onClick={toggleLoopPlaylist}>
              {isLoopingPlaylist ? "Stop Looping Playlist" : "Loop Playlist"}
            </button>
            <button onClick={shuffleSongs}>Shuffle</button>
            <ul>
              {songs.map((index) => (
                <>
                  <li
                    key={index}
                    className={index === currentSongIndex ? "active" : ""}
                  >
                    {index.title} - Played: {index.playCount} times
                  </li>
                </>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Player;
