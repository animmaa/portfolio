import './topbar.scss';
import { Person, Mail } from '@mui/icons-material';

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Le Bris Davy
          </a>

          <div className="itemContainer">
            <Mail className="icon" />
            <span>davylebris@gmail.com</span>
          </div>
          <div>
            <a href="https://gist.github.com/animmaa/">
              <img src="assets/icons8-github-50.png" alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/davy-lebris-2b422a224">
              <img src="assets/icons8-linkedin-50.png" alt="" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
