import React from "react";
import logo from "../assets/images/logo.png";
import "../styles/Footer.css";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isCircles = useMediaQuery({ minWidth: "1400px" });

  return (
    <footer>
      <div className="container footer-container">
        <div className="logo">
          <img src={logo} alt="Footer" />
        </div>
        <nav className="footer-nav">
          <div className="column">
            <p className="column-name">lift media</p>
            <div className="column-links">
              <a className="footer-link" href="/">
                Inicio
              </a>
              <a className="footer-link" href="/">
                Quiénes somos
              </a>
              <a className="footer-link" href="/">
                Contacto
              </a>
              <a className="footer-link" href="/">
                Política de Privacidad
              </a>
            </div>
          </div>
          <div className="column">
            <p className="column-name">legal</p>
            <div className="column-links">
              <a className="footer-link" href="/">
                Condiciones generales
              </a>
              <a className="footer-link" href="/">
                Política de Cookies
              </a>
              <a className="footer-link" href="/">
                Prensa
              </a>
            </div>
          </div>
          <div className="column">
            <p className="column-name">contact</p>
            <div className="column-links">
              <a className="footer-link" href="/">
                <i className="footer-icon fas fa-phone-alt"></i>
                123 456 789
              </a>
              <a className="footer-link" href="/">
                <i className="footer-icon fab fa-whatsapp"></i>
                Whatsapp
              </a>
              <a className="footer-link" href="/">
                <i className="footer-icon far fa-envelope"></i>
                hola@Liftmedia.com
              </a>
              <a className="footer-link" href="/">
                <i className="footer-icon far fa-clock"></i>
                Lunes a Viernes 09:00 a 20:00 horas
              </a>
            </div>
          </div>
          <div className="column">
            <p className="column-name">Social</p>
            <div className="social">
              <i className="social-icon fab fa-facebook-f"></i>
              <i className="social-icon fab fa-instagram"></i>
              <i className="social-icon fab fa-twitter"></i>
              <i className="social-icon fab fa-youtube"></i>
            </div>
          </div>
        </nav>
        <div className="divider"></div>
        <div className="copy-right">
          &copy; 2021 Lift Media | All Rights Reserved
        </div>
        {isCircles && (
          <>
            <div className="circle sm-circle"></div>
            <div className="circle lg-circle"></div>
          </>
        )}
      </div>
    </footer>
  );
}

export default Footer;
