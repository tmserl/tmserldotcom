import './TwitterCard.css';
import { ReactComponent as TwitterLogo } from './twitter-logo.svg';

function TwitterCard() {
  return (
    <div className="card twitter--card">
      <TwitterLogo />
      <p>I'm slowly getting back into Twitter.</p>
    </div>
  );
}

export default TwitterCard;
