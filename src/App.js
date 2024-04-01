
import React, { useState } from 'react';
import './App.css'; 
import Senta from './Components/senta';


function App() {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleAppClick = (event) => {
    setClickPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="App" onClick={handleAppClick}>
      <Senta clickPosition={clickPosition} />
    </div>
  );
}

export default App;
