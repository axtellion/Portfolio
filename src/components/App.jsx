import './App.css';
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import { Skills } from './Skills/Skills';
import { Projects } from './Projects/Projects';
import { Contact } from './Contact/Contact';
import { Footer } from './Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
