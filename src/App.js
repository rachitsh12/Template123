// import logo from './logo.svg';
import './App.css';
import Footer from './MyComponents/Footer';
import './MyComponents/style.css';
import Header from './MyComponents/Header';
import SpeakSection from './MyComponents/SpeakSection';
import PotentialSection from './MyComponents/PotentialSection';
import BeginSection from './MyComponents/BeginSection';
import LearnSection from './MyComponents/LearnSection';
import WhoSection from './MyComponents/WhoSection';
import MeetSection from './MyComponents/MeetSection';
import FeaturedSection from './MyComponents/FeaturedSection';
import BonusSection from './MyComponents/BonusSection';
import TestimonialSection from './MyComponents/TestimonialSection';
import TestimonialSection2 from './MyComponents/TestimonialSection2';
import FaqSection from './MyComponents/FaqSection';
import LimitedSection from './MyComponents/LimitedSection';
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="App">
      {console.log(scrollYProgress)}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      
      
      <Header />
      <SpeakSection />
      <PotentialSection />
      <BeginSection/>
      <LearnSection/>
      <WhoSection/>
      <MeetSection/>
      <FeaturedSection/>
      <BonusSection/>
      <TestimonialSection/>
      <TestimonialSection2/>
      <FaqSection/>
      <LimitedSection/>
      <Footer/>
    </div>
  );
}

export default App;
