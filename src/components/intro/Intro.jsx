import profil from '../../assets/profile-pic.png';
import hypno from '../../assets/hypno.png';
import fleche from '../../assets/vers-le-bas.png';
import './intro.scss';

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img className="image-profil" src={profil} alt="" />
          <img className="image-hypno" src={hypno} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Bienvenue, je suis</h2>
          <h1>Davy</h1>
          <h3>
            developpeur <span>web</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={fleche} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
