import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Index from './jsx';
import { Lines } from 'react-preloaders';

function App() {
  return (
    <div className="App">
      <Lines />
      <Index />
      
    </div>
  );
}

export default App;
