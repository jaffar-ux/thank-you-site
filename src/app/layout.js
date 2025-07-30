import "./globals.css";

export const metadata = {
  title: "I Have Something to Say...",
  description: "This isn’t just a website. It’s something truly special, built with love — just for you. Open it and feel it unfold.",
};
'use client';

import { useEffect, useRef } from 'react';
import './globals.css';

export const metadata = {
  title: "I Have Something to Say...",
  description: "This isn’t just a website. It’s something true.",
};

 {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(err => {
        console.warn("Autoplay blocked. User must interact first.", err);
      });
    }
  }, []);

   function Layout() {
  return (
    <div>
      {/* layout content */}
    </div>
  );
}

export default Layout;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {/* Background Music */}
        <audio ref={audioRef} src="/paro.mp3" autoPlay loop />
        
        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
<button onClick={() => audioRef.current?.play()}>
  Play Background Music
</button>

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
