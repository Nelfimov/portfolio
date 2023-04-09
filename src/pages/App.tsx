import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import '../styles/App.css';

const App = () => {
  return (
    <main>
      <Hero />
      <hr />
      <About />
      <hr />
      <Projects />
    </main>
  );
};

export default App;
