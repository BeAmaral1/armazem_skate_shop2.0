import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Armazém Skate Shop - Surf e Skate', 
  description = 'A melhor loja de surf e skate do Brasil. Pranchas, shapes, acessórios e vestuário das melhores marcas.',
  image = '/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website'
}) => {
  const fullTitle = title.includes('Armazém') ? title : `${title} | Armazém Skate Shop`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="surf, skate, pranchas, shapes, longboard, vestuário surf, acessórios skate" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Armazém Skate Shop" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="author" content="Armazém Skate Shop" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
