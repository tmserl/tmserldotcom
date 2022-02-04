import '../Cards.css';
import './TwitterCard.css';
import { ReactComponent as TwitterLogo } from './twitter-logo.svg';

function TwitterCard() {
  return (
    <div className="card twitter--card">
      <a href="https://twitter.com/tmserl_" target="_blank">
        <TwitterLogo />
        <p>
          I'm slowly getting back into Twitter. At the moment, I'm mostly
          tracking my coding progress on <a href="#">100DaysOfCode</a>.
        </p>
      </a>
    </div>
  );
}

export default TwitterCard;
