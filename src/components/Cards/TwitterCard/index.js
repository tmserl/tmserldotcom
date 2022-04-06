import '../Cards.css';
import './TwitterCard.css';
import { ReactComponent as TwitterLogo } from './twitter-logo.svg';

function TwitterCard() {
  return (
    <div className="card twitter--card">
      <a href="https://twitter.com/tmserl_" target="_blank" rel="noreferrer">
        <TwitterLogo />
        <p>
          I'm slowly getting back into Twitter. At the moment, I'm mostly
          tracking my coding progress on #100DaysOfCode.
        </p>
      </a>
    </div>
  );
}

export default TwitterCard;
