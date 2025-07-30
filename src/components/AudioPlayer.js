'use client';

import { useEffect, useRef } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 2;
    }
  }, []);

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <audio ref={audioRef} controls>
        <source src="/public/paro.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
