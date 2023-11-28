// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Index';
import './components/style.css';
import Header from './components/Header/Index';
import SpeakSection from './components/SpeakSection/Index';
import PotentialSection from './components/PotentialSection/Index';
import BeginSection from './components/BeginSection/Index';
import LearnSection from './components/LearnSection/Index';
import WhoSection from './WhoSection/Index';
import MeetSection from './components/MeetSection/Index';
import FeaturedSection from './components/FeaturedSection/Index';
import BonusSection from './components/BonusSection/Index';
import TestimonialSection from './components/TestimonialSection/Index';
import TestimonialSection2 from './components/TestimonialSection2/Index';
import FaqSection from './components/FaqSection/Index';
import LimitedSection from './components/LimitedSection/Index';
import "animate.css/animate.min.css";


function App() {
  return (
    <div className="App">
      <Header />
     <SpeakSection />
      <PotentialSection />
      <BeginSection />
      <LearnSection />
      <WhoSection />
      <MeetSection />
      <FeaturedSection />
      <BonusSection />
      <TestimonialSection />
      <TestimonialSection2 />
      <FaqSection />
      <LimitedSection />
      <Footer />
    </div>
  );
}

export default App;
