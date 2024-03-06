import { monstserrat } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monstserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
