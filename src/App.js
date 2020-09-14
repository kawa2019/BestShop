import React from 'react';
import Nav from './Nav/index';
import Opening from './Opening/index';
import Statistics from './Statistics/index';
import AttractInfo from './AttractingInfo/index';
import Pricing from './Pricing/index';

export const App = () => {
  return (
    <div className="App">
      <Nav />
      <Opening />
      <Statistics />
      <AttractInfo />
      <Pricing />
    </div>
  );
}