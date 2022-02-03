import './InstagramCard.css';
import { ReactComponent as InstagramLogo } from './instagram-logo.svg';

function InstagramCard() {
  return (
    <div className="card instagram--card">
      <InstagramLogo />
      <p>
        Mostly lurking on here, but occassionaly I post a photo when I remember
        it exists. Strictly no selfies allowed.
      </p>
    </div>
  );
}

export default InstagramCard;
