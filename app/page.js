import React from 'react';
import Hero from '../components/Hero';
import BrandIntro from '../components/BrandIntro';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import BrandStory from '../components/BrandStory';
import WhyChooseUs from '../components/WhyChooseUs';
import FlavorSection from '../components/FlavorSection';
import RareHoney from '../components/RareHoney';
import PairingGuide from '../components/PairingGuide';
import CustomerReviews from '../components/CustomerReviews';
import MarketSchedule from '../components/MarketSchedule';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';

export default function HomePage() {
  return (
    <>
      {/* Section A: Immersive Editorial Hero with 3D Three.js Bee */}
      <Hero />

      {/* Section B: Brand Introduction */}
      <BrandIntro />

      {/* Section C: Explore Our Honey (Category Grid) */}
      <CategorySection />

      {/* Section D: Featured Products Showcase */}
      <FeaturedProducts />

      {/* Section E: The Story Behind Hey Honey */}
      <BrandStory />

      {/* Section F: Why Hey Honey (Differentiators) */}
      <WhyChooseUs />

      {/* Section G: Flavored Honey Experience */}
      <FlavorSection />

      {/* Section H: Rare & Unique Honeys */}
      <RareHoney />

      {/* Section H.2: The Honey Pairing Guide */}
      <PairingGuide />

      {/* Section H.3: Customer Reviews & Market Testimonials */}
      <CustomerReviews />

      {/* Section H.4: Michigan Farmers Market Live Schedule */}
      <MarketSchedule />

      {/* Section I: The Hive - Blog */}
      <BlogSection />

      {/* Section J: Newsletter */}
      <Newsletter />
    </>
  );
}
