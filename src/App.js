import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import PerspectiveBottom from './components/PerspectiveBottom';

function App() {
  return (
    <>
      <PerspectiveBottom/>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
