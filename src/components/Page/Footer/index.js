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
      <p>Made with ♥️ in Birmingham, {year}</p>
    </div>
  );
}

export default Footer;
