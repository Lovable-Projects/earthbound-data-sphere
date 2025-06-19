
import { Helmet } from 'react-helmet-async';

interface SocialMetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SocialMeta: React.FC<SocialMetaProps> = ({
  title = "Perssonify - Growth & Strategic Solutions",
  description = "We help businesses grow fast and scale smart. Strategic solutions and growth strategies that deliver measurable results.",
  image = "/images/social-card.jpg",
  url = "https://perssonify.com"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SocialMeta;
