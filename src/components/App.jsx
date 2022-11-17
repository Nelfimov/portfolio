import React from 'react';
import Intro from './Intro';
import About from './About';
import '../styles/App.css';

const App = () => {
  return (
    <main>
      <div className="App">
        <Intro />
        <About />
      </div>
    </main>
  );
};

export default App;
