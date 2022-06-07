import React from 'react';
import Column from './Column';
import TwitterCard from '../../Cards/TwitterCard';
import InstagramCard from '../../Cards/InstagramCard';
import './Grid.css';
import BlogCard from '../../Cards/BlogCard';
import PhotographyCard from '../../Cards/PhotographyCard';
import GitHubCard from '../../Cards/GitHubCard';
import MetaCard from '../../Cards/MetaCard';

function Grid() {
  return (
    <div className="grid">
      <Column>
        <TwitterCard />
        <InstagramCard />
        <MetaCard />
      </Column>
      <Column>
        <PhotographyCard />
        <BlogCard />
        <GitHubCard />
      </Column>
    </div>
  );
}

export default Grid;
