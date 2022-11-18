import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import '../styles/App.css';

const App = () => {
  return (
    <main>
      <div className="App">
        <Hero />
        <About />
        <Projects />
      </div>
    </main>
  );
};

export default App;
