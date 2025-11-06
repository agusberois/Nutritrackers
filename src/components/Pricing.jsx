import React from "react";
import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing" id="precios">
      <h2>Planes y Precios</h2>
      <p className="subtitle">
        Elegí el plan que mejor se adapte a tus necesidades.
      </p>

      <div className="pricing-cards">
        {/* Plan 1 */}
        <div className="card">
          <h3>Básico</h3>
          <p className="price">$0<span>/mes</span></p>
          <ul>
            <li>Hasta 5 pacientes</li>
            <li>Registro de progreso</li>
            <li>Soporte por email</li>
          </ul>
          <button>Comenzar</button>
        </div>

        {/* Plan 2 */}
        <div className="card featured">
          <h3>Profesional</h3>
          <p className="price">$9<span>/mes</span></p>
          <ul>
            <li>Pacientes ilimitados</li>
            <li>Gráficos y métricas avanzadas</li>
            <li>Soporte prioritario</li>
          </ul>
          <button>Probar ahora</button>
        </div>

        {/* Plan 3 */}
        <div className="card">
          <h3>Equipo</h3>
          <p className="price">$19<span>/mes</span></p>
          <ul>
            <li>Hasta 5 profesionales</li>
            <li>Gestión colaborativa</li>
            <li>Soporte premium</li>
          </ul>
          <button>Contactar</button>
        </div>
      </div>
    </section>
  );
}
