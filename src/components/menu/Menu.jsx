import './menu.scss'

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
      <div className={'menu ' + (menuOpen && 'active')}>
        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#intro">Accueil</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">Qui suis-je</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#portfolio">Mes projets</a>
          </li>

          {/* <li onClick={() => setMenuOpen(false)}>
            <a href="#works">Works</a>
          </li> */}
          {/* <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials">Plaisir loufoque</a>
                </li> */}
        </ul>
      </div>
    );
}

export default Menu
