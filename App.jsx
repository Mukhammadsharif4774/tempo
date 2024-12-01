import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './source/Navigator';
import {GlobalProvider} from './source/contexts/GlobalContext';

export default function App() {
  return (
    <GlobalProvider>
      <StatusBar />
      <Navigation />
    </GlobalProvider>
  );
}
