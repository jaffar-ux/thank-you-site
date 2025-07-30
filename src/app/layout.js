import "./globals.css";
import { useEffect, useRef } from "react";

export const metadata = {
  title: "I Have Something to Say...",
  description: "This isn’t just a website. It’s something truly special.",
};

export default function RootLayout({ children }) {
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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {/* Background Music */}
        <audio ref={audioRef} src="/paro.mp3" autoPlay loop />

        {/* Page Content */}
        {children}

        {/* Optional Play Button for manual trigger */}
        <button onClick={() => audioRef.current?.play()}>
          Play Background Music
        </button>
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
