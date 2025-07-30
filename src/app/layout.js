import "./globals.css";

export const metadata = {
  title: "I Have Something to Say...",
  description: "This isn’t just a website. It’s something truly special, built with love — just for you. Open it and feel it unfold.",
};

'use client';

import { useEffect, useRef } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(err => {
        console.warn("Autoplay blocked. User must interact first.", err);
      });
    }
  }, []);

  return (
    <html lang="en">
      <body>
        {/* Background Music */}
        <audio ref={audioRef} src="/paro.mp3" autoPlay loop />

        {/* Your actual page content */}
        {children}
      </body>
    </html>
  );
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
