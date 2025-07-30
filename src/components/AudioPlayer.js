'use client';

import { useEffect, useRef, useState } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <audio ref={audioRef}>
        <source src="/paro.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handlePlayPause} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}
