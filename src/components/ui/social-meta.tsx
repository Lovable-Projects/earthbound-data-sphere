
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SocialMetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SocialMeta: React.FC<SocialMetaProps> = ({
  title = "Perssonify - Growth & Strategic Solutions",
  description = "We help businesses grow faster, scale with confidence, and solve what holds progress back where it matters most.",
  image = "/Logo-Black.png",
  url
}) => {
  const location = useLocation();
  const currentUrl = url || `${window.location.origin}${location.pathname}`;
  const imageUrl = `${window.location.origin}${image}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Create or update meta tags
    const updateMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const updateNameMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', imageUrl);
    updateMetaTag('og:url', currentUrl);
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:site_name', 'Perssonify');

    // Twitter Card tags
    updateNameMetaTag('twitter:card', 'summary_large_image');
    updateNameMetaTag('twitter:title', title);
    updateNameMetaTag('twitter:description', description);
    updateNameMetaTag('twitter:image', imageUrl);

    // Standard meta tags
    updateNameMetaTag('description', description);

    // LinkedIn specific
    updateMetaTag('og:image:width', '1200');
    updateMetaTag('og:image:height', '630');

  }, [title, description, imageUrl, currentUrl]);

  return null;
};

export default SocialMeta;
