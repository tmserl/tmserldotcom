import React from 'react';
import './Page.css';
import Header from './Header';
import Grid from './Grid';
import Footer from './Footer';

function Page() {
  return (
    <div className="page container">
      <Header />
      <Grid />
      <Footer />
    </div>
  );
}

export default Page;
