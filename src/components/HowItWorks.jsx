import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="howitworks" id="como-funciona">
      <h2>¿Cómo funciona Nutritrackers?</h2>
      <p className="subtitle">
        En tres simples pasos, optimizá tu trabajo como nutricionista.
      </p>

      <div className="steps">
        <div className="step">
          <div className="step-number">1</div>
          <h3>Registrá tus pacientes</h3>
          <p>
            Cargá tus clientes fácilmente con toda su información nutricional y
            de progreso.
          </p>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <h3>Seguimiento inteligente</h3>
          <p>
            Visualizá gráficos, avances y registros para un control eficiente de
            cada paciente.
          </p>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <h3>Mejorá tu gestión</h3>
          <p>
            Ahorrá tiempo y ofrecé una experiencia profesional con una interfaz
            simple y clara.
          </p>
        </div>
      </div>
    </section>
  );
}
