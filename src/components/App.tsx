import Hero from './Hero';
import About from './About';
import Projects from './Projects';
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
