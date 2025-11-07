import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Hablemos</h3>
          <p>
            ¿Tenés dudas o querés saber más sobre Nutritrackers?
            <br /> Escribinos y te respondemos a la brevedad.
          </p>
          <a href="mailto:contacto@nutritrackers.com" className="contact-button">
            Contactar
          </a>
        </div>

        <div className="footer-socials">
          <h3>Seguinos</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nutritrackers. Todos los derechos reservados.</p>
        <p className="footer-bottom-developed-by"> Desarrollado por <a href="https://agusberois.dev" target="_blank">agusberois.dev</a> </p>
      </div>
    </footer>
  );
}
