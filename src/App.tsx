import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { infoData } from './data/InfoData';
import { sliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const reset = () => {
    setIsOpen(false);
  };

  return (
    <div className="app">
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} reset={reset} />
      <Hero slides={sliderData} isOpen={isOpen} />
      <InfoSection infoData={infoData} />
    </div>
  );
};

export default App;
