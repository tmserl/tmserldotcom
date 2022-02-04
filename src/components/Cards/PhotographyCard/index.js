import './Photography.css';
import { useState } from 'react';

function PhotographyCard() {
  const [color, setColor] = useState('1d2d35;');

  function onHover() {
    setColor(Math.floor(Math.random() * 16777215).toString(16));
  }

  return (
    <div className="card photography--card" onMouseEnter={onHover}>
      <h2 style={{ color: `#${color}` }}>TomEarl.XYZ</h2>
      <p>
        Occassionaly, I take photos. Some of the better ones normally end up
        here. Lately, I'm really enjoying the Fujifilm X100V! 📷
      </p>
    </div>
  );
}

export default PhotographyCard;
