import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title = 'Bhadra Mohit – Full Stack Developer',
  description = 'Bhadra Mohit is a Full Stack Developer specializing in MERN stack, .NET, and AI/ML solutions. Available for freelance projects and collaboration.',
  keywords = 'Full Stack Developer, React, Node.js, .NET, Python, AI/ML, Web Development, Bhadra Mohit',
  url = 'https://bhadramohit.vercel.app',
  image = 'https://avatars.githubusercontent.com/u/196953555?v=4',
}) => {
  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Bhadra Mohit" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Bhadra Mohit Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOHead;
