// Senta.js
import React, { useState, useEffect } from 'react';
import './Senta.css'; 

const Senta = ({ clickPosition }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState('right');
  console.log("directiondirectiondirection----->",direction);

  useEffect(() => {
    setPosition(clickPosition);
    setDirection(clickPosition.x < position.x ? 'left' : 'right');
  }, [clickPosition]);

  return (
    <div
      className={`senta ${direction}`} 
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '100px', 
        height: '100px', 
      }}
    >
      <img src="https://www.wizard.financial/static/media/wizaart-img.56787174.gif" alt="Senta" style={{ width: '100%', height: '100%' 
    ,transform:'scaleX(-1)',
    }} />
    </div>
  );
};

export default Senta;
