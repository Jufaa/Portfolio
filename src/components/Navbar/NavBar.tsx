import BurguerButton from '../../hooks/BurgerButton';
import { useInterval } from './hooks/useInterval';
import './styles/navbar.css';
import { useState } from 'react';

const NavBar = () => {
  const { currentIndex, scrolled, names } = useInterval();

  const [clicked, setClicked] = useState(false);
  const handleLinkClick = () => {
    setClicked(false);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <a href="#home">{names[currentIndex]}</a>
        </div>
        <div>
          <ul className="links">
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#aboutme">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={`burger ${scrolled ? 'hidden' : ''}`}>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
          {clicked ? (
            <ul className=" active">
              <li>
                <a href="#skills" onClick={handleLinkClick}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#aboutme" onClick={handleLinkClick}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleLinkClick}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleLinkClick}>
                  Contact
                </a>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default NavBar;
