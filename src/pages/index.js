import React from 'react';
import { Link } from 'gatsby';

import MainLayout from 'src/layouts/MainLayout';
import SEO from 'src/components/SEO';
import Button from 'src/components/Button';

const IndexPage = ({ location }) => {
  const siteTitle = 'oheydrew.me - Tech rants and other things';

  return (
    <MainLayout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
      <h1>
        Hey people{' '}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </h1>
      <p>Welcome to your new Gatsby website. You are on your home page.</p>
      <p>
        This starter comes out of the box with styled components and Gatsby's
        default starter blog running on Netlify CMS.
      </p>
      <p>Now go build something great!</p>
      <Link to="/blog/">
        <Button marginTop="35px">Go to Blog</Button>
      </Link>
    </MainLayout>
  );
};

IndexPage.displayName = 'Index';
export default IndexPage;
