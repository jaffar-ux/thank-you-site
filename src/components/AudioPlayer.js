"use client";
import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        console.warn("Autoplay blocked. User must interact first.");
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true; // Ensures that the audio loops
    }
  }, []);

  return (
    <>
      {/* Background Music */}
      <audio ref={audioRef} src="/paro.mp3" />
      
      {/* Play/Pause Button */}
      <button onClick={handlePlayPause}>
        {isPlaying ? "Pause Background Music" : "Play Background Music"}
      </button>
    </>
  );
}
