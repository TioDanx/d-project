import React from 'react';
import './Footer.css';
import facebook from './imgs/facebook.png';
import twitter from './imgs/twitter.png';
import instagram from './imgs/instagram.png';
import linkedin from './imgs/linkedin.png';
import react from './imgs/react.png';
import html from './imgs/html.png';
import css from './imgs/css.png';
import js from './imgs/js.png';

export default function Footer() {
    return <div className="footer">
        <div className="footer-redes">
            <img src={facebook} alt="Facebook" className="social-media-photo" />
            <img src={twitter} alt="Twitter" className="social-media-photo" />
            <img src={instagram} alt="Instagram" className="social-media-photo" />
            <img src={linkedin} alt="Linkedin" className="social-media-photo" />
        </div>
        <div className="legales">
            <p>Coca­Cola de Argentina, respeta el derecho de los usuarios del sitio a la protección de sus datos personales, los cuales están amparados por la Ley N° 25.326, y se compromete a proteger la seguridad de sus datos de carácter personal. Los datos que los usuarios proporcionen a la Compañía a través de nuestro Sitio se encuentran sujetos a nuestra Política de Privacidad, disponible en https://www.cocacolalatinamerica.com/ar/es/politicas-de-privacidad</p>
        </div>
        <div className="tecnologias">
            <img src={react} alt="React" className="social-media-photo" />
            <img src={html} alt="React" className="social-media-photo" />
            <img src={css} alt="React" className="social-media-photo" />
            <img src={js} alt="React" className="social-media-photo" />
        </div>
    </div>
};