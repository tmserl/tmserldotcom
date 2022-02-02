import '../Cards.css';
import './TwitterCard.css';
import { ReactComponent as TwitterLogo } from './twitter-logo.svg';

function TwitterCard() {
  return (
    <div className="card twitter--card">
      <TwitterLogo />
      <p>
        I'm slowly getting back into Twitter. At the moment, I'm mostly tracking
        my <a href="#">100DaysOfCode</a>
      </p>
    </div>
  );
}

export default TwitterCard;
