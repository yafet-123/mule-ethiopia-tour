import Seo from '@/components/Seo';
import Hero from '@/components/home/Hero';
import SearchBar from '@/components/home/SearchBar';
import TravelStyles from '@/components/home/TravelStyles';
import WhyUs from '@/components/home/WhyUs';
import PopularTours from '@/components/home/PopularTours';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import WhereWeTravel from '@/components/home/WhereWeTravel';
import Testimonials from '@/components/home/Testimonials';
import AboutTeaser from '@/components/home/AboutTeaser';
import BlogTeaser from '@/components/home/BlogTeaser';
import CustomizeCTA from '@/components/home/CustomizeCTA';
import PartnersStrip from '@/components/home/PartnersStrip';
import FAQSection from '@/components/home/FAQSection';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Seo path="/" />

      {/* Hero + search bar cleanly placed beneath it */}
      <Hero />
      <div className="container-x relative z-30 mt-2 mb-8 sm:mt-4 sm:mb-10 lg:mt-6 lg:mb-12">
        <SearchBar />
      </div>

      <TravelStyles />
      <WhyUs />
      <PopularTours />
      <FeaturedDestinations />
      <WhereWeTravel />
      <Testimonials />
      <AboutTeaser />
      <BlogTeaser />
      <CustomizeCTA />
      <PartnersStrip />
      <FAQSection />
      <FinalCTA />
    </>
  );
}