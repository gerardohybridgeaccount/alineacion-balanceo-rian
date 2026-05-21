

const Header = () => {
  return (
    <header className="main-header">
      <nav className="nav-container" aria-label="Navegación principal">
        <div className="logo">
          <a href="/" className="logo-link">
            <span className="logo-text">Rian Automotriz</span>
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
