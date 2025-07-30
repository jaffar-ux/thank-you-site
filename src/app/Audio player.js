// src/app/AudioPlayer.js OR src/components/AudioPlayer.js

"use client";

import { useEffect, useRef } from "react";

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch((err) => {
        console.warn("Autoplay blocked. User must interact first.");
      });
    }
  }, []);

  return (
    <>
      {/* Background Music */}
      <audio ref={audioRef} src="/paro.mp3" autoPlay loop />

      {/* Optional Play Button */}
      <button onClick={() => audioRef.current?.play()}>
        Play Background Music
      </button>
    </>
  );
}
