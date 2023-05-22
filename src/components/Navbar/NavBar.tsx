import BurguerButton from '../../hooks/BurgerButton';
import './styles/navbar.css';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [names] = useState(['Jufa-Developer', 'FullStack Developer']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % names.length);
    }, 3000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [names]);

  const handleLinkClick = () => {
    setClicked(false);
  };

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
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
