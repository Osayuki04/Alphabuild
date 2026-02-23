
import Hero from '../components/Home/hero';
import Mission from '../components/Home/mission';
import PromoTestimonial from '../components/Home/promoTestimonial';
import Projects from '../components/Home/projects';
import Services from '../components/Home/services';
import Testimonials from '../components/Home/testimonials';
import LatestNews from '../components/Home/latestNews';
import FAQ from '../components/Home/faq';
import Footer2 from '@/components/UI/footer2';
import MiniAbout from '@/components/Home/about';
import Blur from '@/components/UI/blur';



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
      <FAQ /> 
      <Footer2 />
      <Blur />
     
    </>
  );
}