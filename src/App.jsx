import { Helmet } from 'react-helmet-async'
import './App.css'

function App() {
  return (
    <>
      <Helmet>
        <title>Alineación y Balanceo Profesional | [Nombre de tu Negocio]</title>
        <meta name="description" content="Especialistas en alineación y balanceo computarizado. Mejora la seguridad y vida de tus llantas. ¡Contáctanos hoy!" />
        <link rel="canonical" href="https://tudominio.com" />
        
        {/* Schema.org JSON-LD para SEO Local */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "[Nombre de tu Negocio]",
            "image": "https://tudominio.com/hero.png", 
            "@id": "https://tudominio.com",
            "url": "https://tudominio.com",
            "telephone": "+521234567890",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Calle Principal #123",
              "addressLocality": "Ciudad",
              "addressRegion": "Estado",
              "postalCode": "12345",
              "addressCountry": "MX"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.4326,
              "longitude": -99.1332
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
          })}
        </script>
      </Helmet>

      <header>
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <h1>Expertos en Alineación y Balanceo Computarizado</h1>
          <p>Cuidamos tu seguridad y la de tu familia con tecnología de punta.</p>
          <a href="#contacto" className="btn-primary">Agendar Cita</a>
        </section>

        <section id="servicios">
          <h2>Nuestros Servicios</h2>
          <div className="services-grid">
            <article>
              <h3>Alineación 3D</h3>
              <p>Ajuste preciso de los ángulos de las ruedas para un manejo suave y menor desgaste de llantas.</p>
            </article>
            <article>
              <h3>Balanceo Computarizado</h3>
              <p>Eliminamos las vibraciones en el volante y protegemos la suspensión de tu vehículo.</p>
            </article>
            <article>
              <h3>Revisión de Suspensión</h3>
              <p>Inspección detallada para asegurar que tu auto responda correctamente en cada curva.</p>
            </article>
          </div>
        </section>

        <section id="contacto">
          <h2>Contacto</h2>
          <p>Visítanos o llámanos para brindarte la mejor atención.</p>
          <div className="contact-info">
            <p><strong>📍 Dirección:</strong> Calle Principal #123, Ciudad, País</p>
            <p><strong>📞 Teléfono:</strong> +52 123 456 7890</p>
            <p><strong>⏰ Horario:</strong> Lun - Vie: 9:00 AM - 6:00 PM | Sáb: 9:00 AM - 2:00 PM</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} [Nombre de tu Negocio]. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
