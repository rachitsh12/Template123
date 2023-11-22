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
import Lottie from 'react-lottie';
import animationData from './Lottie-Lego.json';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


function App() {
  // const { scrollYProgress } = useScroll();
  // const lottieOptions = {
  //   loop: true, // Set to true if you want the animation to loop
  //   autoplay: true, // Set to true if you want the animation to start playing as soon as it's loaded
  //   animationData: animationData, // The animation data
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice',
  //   },
  // };
  return (
    <div className="App">
      {/* {console.log(scrollYProgress)}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      /> */}
      
      
      <Header />
      
      <ScrollAnimation animateIn="bounceInRight" animateOut='fadeOut' >
      <SpeakSection />
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="bounceInLeft"  >
      <PotentialSection />
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="bounceInRight" animateOut='fadeOut' >
      <BeginSection/>
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="bounceInLeft" animateOut='fadeOut' >
      <LearnSection/>
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="bounceInRight" animateOut='fadeOut' >
      <WhoSection/>
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="bounceInLeft" animateOut='fadeOut' >
      <MeetSection/>
      </ScrollAnimation>
      
      
      <FeaturedSection/>
      <BonusSection/>
      <ScrollAnimation animateIn="bounceInRight" animateOut='fadeOut' >
        
        <TestimonialSection/>
      <TestimonialSection2/>
        </ScrollAnimation>
      
      <FaqSection/>
      <LimitedSection/>
      <Footer/>
    </div>
  );
}

export default App;
