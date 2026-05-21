import { Gauge, Target, ShieldCheck, Wrench, Disc, Droplet } from 'lucide-react';

const Services = () => {
  return (
    <section id="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="services-grid">
        <article>
          <div className="service-icon">
            <Target size={48} strokeWidth={1.5} />
          </div>
          <h3>Alineación </h3>
          <p>Ajuste preciso de los ángulos de las ruedas para un manejo suave y menor desgaste de llantas.</p>
        </article>
        <article>
          <div className="service-icon">
            <Gauge size={48} strokeWidth={1.5} />
          </div>
          <h3>Balanceo </h3>
          <p>Eliminamos las vibraciones en el volante y protegemos la suspensión de tu vehículo.</p>
        </article>
        <article>
          <div className="service-icon">
            <ShieldCheck size={48} strokeWidth={1.5} />
          </div>
          <h3>Revisión de Suspensión</h3>
          <p>Inspección detallada para asegurar que tu auto responda correctamente en cada curva.</p>
        </article>
        <article>
          <div className="service-icon">
            <Wrench size={48} strokeWidth={1.5} />
          </div>
          <h3>Afinación Mayor</h3>
          <p>Optimización completa del motor para un mejor rendimiento, ahorro de combustible y reducción de emisiones.</p>
        </article>
        <article>
          <div className="service-icon">
            <Disc size={48} strokeWidth={1.5} />
          </div>
          <h3>Cambio de Llantas</h3>
          <p>Venta e instalación de neumáticos con montaje profesional y revisión de válvulas.</p>
        </article>
        <article>
          <div className="service-icon">
            <Droplet size={48} strokeWidth={1.5} />
          </div>
          <h3>Cambio de Aceite</h3>
          <p>Lubricación esencial con filtros de alta gama para prolongar la vida útil de tu motor.</p>
        </article>
      </div>
    </section>
  );
};



export default Services;
