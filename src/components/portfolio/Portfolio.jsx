import { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import flecheHaut from '../../assets/vers-le-haut.png';
import './portfolio.scss';
import { featuredPortfolio, webPortfolio } from '../../data';

const Portfolio = () => {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'featured',
      title: 'Projets Personnels',
    },
    {
      id: 'web',
      title: 'Projets de groupe',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Liste de mes projets</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <a href={d.url}>
              <img src={d.img} alt="" />
            </a>

            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      <div>
        <p>
          <i>
            Certains projets sont encore en cours de finition et d'autre ne sont
            pas encore mise en ligne. Je mets les liens github en attendant le
            déployement.
            <br />
            <br /> Veuillez m'excuser pour la gêne occasionnée et merci pour
            votre patience...
          </i>
        </p>
      </div>
      <div className='flech'>

      <a href="#contact">
        <img src={flecheHaut} alt="" />
      </a>
      </div>
    </div>
  );
};

export default Portfolio;
