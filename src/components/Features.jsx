import "./Features.css";

function Features() {
  const features = [
    {
      icon: "📋",
      title: "Gestión de pacientes",
      text: "Organizá fácilmente la información de tus pacientes, historial clínico y progreso.",
    },
    {
      icon: "📈",
      title: "Seguimiento nutricional",
      text: "Visualizá la evolución de tus pacientes con métricas y reportes personalizados.",
    },
    {
      icon: "💬",
      title: "Comunicación centralizada",
      text: "Mantené toda la información y contacto con tus pacientes en un solo lugar.",
    },
    {
      icon: "⏱️",
      title: "Ahorro de tiempo",
      text: "Simplificá tus tareas diarias con herramientas automáticas y plantillas configurables.",
    },
  ];

  return (
    <section className="features" id="caracteristicas">
      <h2>¿Por qué elegir <span>Nutritrackers</span>?</h2>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
