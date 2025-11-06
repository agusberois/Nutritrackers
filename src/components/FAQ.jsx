import React, { useState } from "react";
import "./FAQ.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Qué es Nutritrackers?",
      answer:
        "Nutritrackers es una plataforma diseñada para nutricionistas que permite registrar pacientes, realizar seguimientos y visualizar métricas de progreso de forma simple y profesional.",
    },
    {
      question: "¿Necesito instalar algo?",
      answer:
        "No. Nutritrackers funciona directamente en tu navegador, sin necesidad de instalaciones. Solo creás tu cuenta y comenzás a usarla.",
    },
    {
      question: "¿Puedo usarla gratis?",
      answer:
        "Sí, el plan Básico es totalmente gratuito e ideal para comenzar. Podés actualizar a planes pagos cuando necesites más funciones.",
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer:
        "Por supuesto. No hay compromisos ni permanencias. Podés cancelar o cambiar de plan cuando lo desees.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2>Preguntas Frecuentes</h2>
      <p className="subtitle">
        Todo lo que necesitás saber antes de empezar.
      </p>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
