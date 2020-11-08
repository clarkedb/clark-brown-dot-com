import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Posts from '../components/Posts';

const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Posts />
    </Layout>
  );
};

export default ProjectsPage;
