import './MetaCard.css';
import { useState } from 'react';

function MetaCard() {
  const [input, setInput] = useState('');

  return (
    <div className="card makemeta--card">
      <a href="https://makemeta.app" target="_blank" rel="noreferrer">
        <h2>MakeMeta</h2>
        <h3>Generate Meta Tags for your website</h3>
      </a>
      <div className="makemeta--card__blue">
        <p>Try it out!</p>
        <input
          placeholder="MakeMeta"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </div>
      <a href="https://makemeta.app" target="_blank" rel="noreferrer">
        {input && (
          <div className="makemeta--card__green">
            <p>
              &lt;meta name="twitter:title" content="{input}" &gt;
              <br />
              &lt;meta property="og:title" content={input}" &gt;
              <br />
              &lt;meta property="og:site_name" content="{input}" &gt;
            </p>
          </div>
        )}
      </a>
    </div>
  );
}

export default MetaCard;
