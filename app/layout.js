import './globals.css';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import SearchModal from '../components/SearchModal';

export const metadata = {
  title: 'Hey Honey | Premium Artisanal Michigan Honey & Steeped Infusions',
  description:
    'Discover pure Michigan raw honey, Jay Jermo’s 25+ signature fruit & spice steeped infusions, and rare single-pollen global blossoms. Bottling honey since 1935.',
  keywords: [
    'Hey Honey',
    'Michigan honey',
    'Jay Jermo',
    'flavored honey',
    'raw honey',
    'artisan honey',
    'Turkish sunflower limoncello',
    'honey bear jars',
    'beeswax lip balm',
  ],
  authors: [{ name: 'Jay Jermo' }],
  creator: 'Hey Honey',
  publisher: 'Hey Honey',
  metadataBase: new URL('https://heyhoney.biz'),
  openGraph: {
    title: 'Hey Honey | Premium Artisanal Michigan Honey',
    description:
      'From Michigan’s local harvests to rare floral honeys from around the world. Pure, unfiltered, and crafted with nearly a century of beekeeping heritage.',
    url: 'https://heyhoney.biz',
    siteName: 'Hey Honey',
    images: [
      {
        url: '/assets/images/hero-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Hey Honey Artisan Honey',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/assets/logo/heyhoney-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-cream-100 text-charcoal-900 font-sans antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <SearchModal />
        </CartProvider>
      </body>
    </html>
  );
}

