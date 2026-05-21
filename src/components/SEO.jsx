import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Rian Automotriz | Expertos en Alineación y Balanceo",
  description = "Especialistas en alineación y balanceo computarizado en Rian Automotriz. Mejora la seguridad y vida de tus llantas. ¡Contáctanos hoy!",
  canonical = "https://tudominio.com",
  businessName = "Rian Automotriz"
}) => {
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": businessName,
    "image": `${canonical}/hero.png`,
    "@id": canonical,
    "url": canonical,
    "telephone": "+521234567890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carretera Federal Mexico-Puebla",
      "addressLocality": "san matias tlalancaleca",
      "addressRegion": "puebla",
      "postalCode": "74110",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.3265,
      "longitude": -98.4958
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Automotrices",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Alineación 3D"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Balanceo Computarizado"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
