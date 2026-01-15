
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  const siteName = "Onboarding 4 U";
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = window.location.origin;
  const defaultImage = "https://onboarding4u.com/images/logo/logo.webp"; // Your brand logo
  const seoImage = image || defaultImage;

  useEffect(() => {
    // Update Document Title
    document.title = fullTitle;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update Open Graph Tags
    const ogTags = {
      'og:title': fullTitle,
      'og:description': description,
      'og:image': seoImage,
      'og:url': `${siteUrl}${pathname}`,
      'og:type': article ? 'article' : 'website',
      'og:site_name': siteName,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    });

    // Update Twitter Tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': fullTitle,
      'twitter:description': description,
      'twitter:image': seoImage,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    });

  }, [fullTitle, description, seoImage, siteUrl, pathname, article]);

  return null;
};

export default SEO;
