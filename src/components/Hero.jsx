import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Simplificá tu trabajo como <span>nutricionista</span>.
          </h1>
          <p>
            Nutritrackers es la herramienta digital que te ayuda a organizar tus pacientes, 
            registrar consultas y hacer seguimientos eficientes, todo desde un solo lugar.
          </p>
          <button className="hero-btn">Ver más</button>
        </div>

        <div className="hero-image">
          <img
            src="/images/mockup-app.png"
            alt="Vista previa de Nutritrackers"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
