import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactInfo from '../components/ContactInfo';
import Newsletter from '../components/Newsletter';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactInfo />
      <Newsletter />
    </Layout>
  );
};

export default ContactPage;
