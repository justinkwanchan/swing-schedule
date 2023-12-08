import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navigation from './components/navigation';
import Footer from './components/footer';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Let's Dance",
  description: 'Swing dance schedule in Montreal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
