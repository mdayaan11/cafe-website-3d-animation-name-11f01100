import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'cafe website 3d animation name Ayaan caf',
  description: 'Built by Heaven AI Engine',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
