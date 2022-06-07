import React from 'react';
import './BlogCard.css';

function BlogCard() {
  return (
    <div className="card blog--card">
      <a href="https://tmserl.uk" target="_blank" rel="noopener noreferrer">
        <h2>tmserl.uk</h2>
        <p>
          A low frequency blog of both technical and non-technical ramblings.
        </p>
      </a>
    </div>
  );
}

export default BlogCard;
