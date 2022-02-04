import './Photography.css';
import { useState } from 'react';

function PhotographyCard() {
  const [color, setColor] = useState('1d2d35');
  const [randomColor, setRandomColor] = useState('fcfcfc');

  function onHover() {
    setRandomColor(Math.floor(Math.random() * 16777215).toString(16));
    setColor('fcfcfc');
  }

  return (
    <div
      style={{ backgroundColor: `#${randomColor}` }}
      className="card photography--card"
      onMouseEnter={onHover}
    >
      <h2 style={{ color: `#${color}` }}>TomEarl.XYZ</h2>
      <p style={{ color: `#${color}` }}>
        Occassionaly, I take photos. Some of the better ones normally end up
        here. Lately, I'm really enjoying the Fujifilm X100V! 📷
      </p>
    </div>
  );
}

export default PhotographyCard;
