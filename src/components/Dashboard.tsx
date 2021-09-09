import Welcome from "./Welcome";
import Timeline from './Timeline';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { Route } from 'react-router-dom';

const DashBoard: React.FC = () => {
  return (
    <>
{/*       <Route exact path="/" component={Welcome} /> */}
      <Welcome />
      <Timeline />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default DashBoard;