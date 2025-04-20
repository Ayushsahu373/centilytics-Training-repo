import React from 'react';
import CounterFunctional from './CounterFunctional';
import CounterClass from './CounterClass';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '2rem' }}>
      <CounterFunctional />
      <CounterClass />
    </div>
  );
}

export default App;
