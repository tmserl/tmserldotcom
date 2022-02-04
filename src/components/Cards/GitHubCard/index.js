import './GitHubCard.css';
import { ReactComponent as GitHubLogo } from './github-logo.svg';

function GitHubCard() {
  return (
    <div className="card github--card">
      <GitHubLogo />
      <p>
        This is where all of my code lives (it's lovely and homely). Nearly all
        of it is private for the time being, but that may change soon.
      </p>
    </div>
  );
}

export default GitHubCard;
