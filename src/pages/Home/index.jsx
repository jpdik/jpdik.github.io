import About from './sections/About';
import Attributes from './sections/Attributes';
import Awards from './sections/Awards';
import Contact from './sections/Contact';
import Creations from './sections/Creations';
import Home from './sections/Home';
import Publications from './sections/Publications';
import Skills from './sections/Skills';

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Awards />
      <Creations />
      <Publications />
      <Attributes />
      <Contact />
    </>
  );
};

export default HomePage;
