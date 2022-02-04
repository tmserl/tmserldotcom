import './PhotographyCard.css';
import { useState } from 'react';

function PhotographyCard() {
  const [color, setColor] = useState(['1d2d35', 'fcfcfc']);

  function onHover() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor([
      ...color.slice(0, 0),
      'fcfcfc',
      ...color.slice(1, 1),
      randomColor,
      ...color.slice(2),
    ]);
  }

  return (
    <div
      style={{ backgroundColor: `#${color[1]}` }}
      className="card photography--card"
      onMouseEnter={onHover}
    >
      <h2 style={{ color: `#${color[0]}` }}>TomEarl.XYZ</h2>
      <p style={{ color: `#${color[0]}` }}>
        Occassionaly, I take photos. Some of the better ones normally end up
        here. Lately, I'm really enjoying the Fujifilm X100V! 📷
      </p>
    </div>
  );
}

export default PhotographyCard;
