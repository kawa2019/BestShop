import React from 'react';
import Nav from './Nav/index';
import Opening from './Opening/index';
import Statistics from './Statistics/index';
import AttractInfo from './AttractingInfo/index';

export const App = () => {
  return (
    <div className="App">
      <Nav />
      <Opening />
      <Statistics />
      <AttractInfo />
    </div>
  );
}