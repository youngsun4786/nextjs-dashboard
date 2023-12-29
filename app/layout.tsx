import '@/app/ui/global.css';
import { geist } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${geist.variable}`} lang="en">
      <body className={`${geist.className} antialiased`}>{children}</body>
    </html>
  );
}
