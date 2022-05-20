import './intro.scss';

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img className="image-profil" src="assets/profile-pic.png" alt="" />
          <img className="image-hypno" src="assets/hypno.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>hi there, i'm</h2>
          <h1>animma</h1>
          <h3>
            freelance <span>developper</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/vers-le-bas.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
