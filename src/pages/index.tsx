import Layout from 'components/layout';
import Seo from 'components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

function IndexPage() {
  return (
    <Layout pageTitle='Home Page'>
      <StaticImage alt='cat' src='../assets/images/cat.jpg' />
      <p>Welcome to my Gatsby site!</p>
    </Layout>
  );
}

export const Head = () => <Seo title='Home Page' />;

export default IndexPage;
