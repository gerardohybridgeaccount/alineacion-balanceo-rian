import fondoAlineacion from '../assets/fondoAlineacion.webp';

const Hero = () => {
  return (
    <section id="inicio" className="hero-container">
      <div className="hero-visual">
        <img 
          src={fondoAlineacion} 
          alt="Taller Rian Automotriz: Especialistas en Alineación y Balanceo Computarizado" 
          className="hero-img"
          fetchpriority="high"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1>Rian Automotriz: Expertos en Alineación y Balanceo Computarizado</h1>
        <p>Cuidamos tu seguridad y la de tu familia con tecnología de punta en alineación y balanceo.</p>
        <a href="#contacto" className="btn-primary">Agendar Cita</a>
      </div>
    </section>
  );
};

export default Hero;
