import Column from './Column';
// import MapCard from '../../Cards/MapCard';
import TwitterCard from '../../Cards/TwitterCard';
import InstagramCard from '../../Cards/InstagramCard';
import './Grid.css';
// import BlogCard from '../../Cards/BlogCard';
import PhotographyCard from '../../Cards/PhotographyCard';
import GitHubCard from '../../Cards/GitHubCard';
import MetaCard from '../../Cards/MetaCard';

function Grid() {
  return (
    <div className="grid">
      <Column>
        <TwitterCard />
        {/* <BlogCard /> */}
        <InstagramCard />
        <MetaCard />
      </Column>
      <Column>
        {/* <MapCard /> */}
        <PhotographyCard />
        <GitHubCard />
      </Column>
    </div>
  );
}

export default Grid;
