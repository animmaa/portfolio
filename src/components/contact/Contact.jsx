import python from '../../assets/VscodeIconsFileTypePython.svg';
import html from '../../assets/VscodeIconsFileTypeHtml.svg';
import css from '../../assets/LogosCss3.svg';
import sass from '../../assets/VscodeIconsFileTypeScss.svg';
import js from '../../assets/VscodeIconsFileTypeJsOfficial.svg';
import react from '../../assets/VscodeIconsFileTypeReactjs.svg';
import node from '../../assets/LogosNodejs.svg';
import wordpress from '../../assets/BxlWordpress.svg';
import mysql from '../../assets/LogosMysql.svg';
import fleche from '../../assets/vers-le-bas.png';
import './contact.scss';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Qui suis-je?</h1>
      <div>
        <p>
          Je m'appelle Davy Lebris, j'ai 32 ans et je viens de finir une
          formation de developpeur full-stack en React / NodeJs avec la Wild
          Code School.
        </p>
        <p>
          Après 10 ans dans le secteur de l'animation et du social, j'ai
          effectué une reconversion professionnel dans le domaine du web.
        </p>
        <h2>Les langages que j'ai déjà utilisés :</h2>
        <div className="orga-icon">
          <div className="circle-img">
            <img src={html} alt="" />
          </div>
          <div className="circle-img">
            <img src={css} alt="" />
          </div>
          <div className="circle-img">
            <img src={sass} alt="" />
          </div>
          <div className="circle-img">
            <img src={js} alt="" />
          </div>
          <div className="circle-img">
            <img src={react} alt="" />
          </div>
          <div className="circle-img">
            <img src={node} alt="" />
          </div>
          <div className="circle-img">
            <img src={python} alt="" />
          </div>
          <div className="circle-img">
            <img src={wordpress} alt="" />
          </div>
          <div className="circle-img">
            <img src={mysql} alt="" />
          </div>
        </div>
        <h2>Mes souhaits sur l'avenir</h2>
        <p>
          Je souhaite trouver une entreprise qui me permettra de&nbsp;
          <b>m'améliorer</b> et de <b>monter en expérience</b>, dans le cadre
          d'un <u>contrat de professionnalisation ou un CDD</u>. <br />
          J'ai la&nbsp;
          <u>
            <b>volonté d'apprendre</b>
          </u>
          &nbsp; et je cherche des professionnels qui ont la&nbsp;
          <u>
            <b>volonté de transmettre</b>
          </u>
          .
        </p>
      </div>
      <a href="#portfolio">
        <img src={fleche} alt="" />
      </a>
    </div>
  );
};

export default Contact;
