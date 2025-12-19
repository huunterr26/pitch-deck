import React from 'react';
import Deck from './components/Deck';
import { ThemeProvider } from './components/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider cycleDuration={4000}>
      <Deck />
    </ThemeProvider>
  );
};

export default App;