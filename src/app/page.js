
import Hero from '../components/Home/hero';
import Mission from '../components/Home/mission';
import PromoTestimonial from '../components/Home/promoTestimonial';
import Projects from '../components/Home/projects';
import Services from '../components/Home/services';
import Testimonials from '../components/Home/testimonials';
import LatestNews from '../components/Home/latestNews';
import Footer2 from '@/components/UI/footer2';
import MiniAbout from '@/components/Home/about';
// import Footer from '../components/Home/footer';


export default function LandingPage() {
  return (
    <>
    
      <Hero className="" />
      <Mission />
       <MiniAbout />  
       {/* <PromoTestimonial /> */}
      <Services />
      <Projects />
      <Testimonials />
      <LatestNews />
      <Footer2 />
      {/* <Footer />  */}
    </>
  );
}