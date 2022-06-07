import React from 'react';
import './Footer.css';
import { useState, useEffect } from 'react';

function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    function getCurrentYear() {
      const date = new Date();
      setYear(date.getFullYear());
    }

    getCurrentYear();
  }, []);

  return (
    <div className="footer">
      <p>
        Made with{' '}
        <span role="img" aria-label="heart">
          ♥️
        </span>{' '}
        in Birmingham, {year}
      </p>
    </div>
  );
}

export default Footer;
