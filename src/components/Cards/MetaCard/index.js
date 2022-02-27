import './MetaCard.css';
import { useState } from 'react';

function MetaCard() {
  const [input, setInput] = useState('');

  return (
    <div className="card makemeta--card">
      <a href="https://makemeta.app" target="_blank" rel="noreferrer">
        <h2>MakeMeta</h2>
        <h3>Generate Meta Tags for your website</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <div className="output">
          <p>{input}</p>
        </div>
      </a>
    </div>
  );
}

export default MetaCard;
