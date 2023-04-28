import BurguerButton from '../hooks/BurgerButton';
import '../styles/navbar.css';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [names] = useState(['Jufa-Developer', 'FullStack Developer']);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % names.length);
    }, 3000); // Cambia el texto cada 3 segundos

    return () => clearInterval(intervalId);
  }, [names]);

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <a href='#'>{names[currentIndex]}</a>
        </div>
        <div>
          <ul className="links">
            <li><a>Skills</a></li>
            <li><a>About Me</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className='burger'>
          <BurguerButton clicked={clicked} handleClick={handleClick}/>
          {
            clicked ? 
            <ul className="active">
            <li><a>Skills</a></li>
            <li><a>About Me</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
          </ul> :
           null
          }
        </div>
      </div>
    </>
  );
};

export default NavBar;