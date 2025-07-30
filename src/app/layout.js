'use client';

import "./globals.css";
import AudioPlayer from "../components/AudioPlayer";

export const metadata = {
  title: "I Have Something to Say...",
  description: "This isn't just a website. It's something truly special.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AudioPlayer />
        {children}
      </body>
    </html>
  );
}
