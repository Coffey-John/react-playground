import React from 'react';

import RouletteGun from './state-drills/RouletteGun.js'

function App() {
  return (
    <main className='App'>
     <RouletteGun
      bulletInChamber={8}
     />
    </main>
  );
}

export default App;