import React, { useState, useRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./player.css";

const Player = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const onDrop = useCallback((acceptedFiles) => {
    const newSongs = acceptedFiles.map((file) => ({
      title: file.name,
      url: URL.createObjectURL(file),
      playCount: 0
    }));
    setSongs((prevSongs) => [...prevSongs, ...newSongs]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "audio/mp3",
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
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    setIsPlaying(false);
  };

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
            <h1>{songs[currentSongIndex].title}</h1>
            <audio
              ref={audioRef}
              src={songs[currentSongIndex].url}
              onEnded={nextSong}
            />
            <button onClick={playPause}>{isPlaying ? "Pause" : "Play"}</button>
            <button onClick={nextSong}>Next</button>
            <ul>
              {songs.map((index) => (
                <>
                  <li
                    key={index}
                    className={index === currentSongIndex ? "active" : ""}
                  >
                    {index.title} 
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
