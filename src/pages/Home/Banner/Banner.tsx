import './styles/banner.css';
const Banner = () => {
  return (
    <>
      <div className="container">
        <img className="keloke" src="/about-image.svg" alt="aboutimage" />
        <div className="contenedor">
          <p>Hi, my name is</p>
          <h1>Juan Cruz Francitorra</h1>
          <h2>I build websites</h2>
          <h3>
            I am a web developer specialized in creating amazing websites!
          </h3>
        </div>
        <a
          href="https://drive.google.com/file/d/1k56AaTFDCqpd-lPHZ6e155fxZyDm0a8R/view?usp=sharing"
          download
          className="as"
        >
          Curriculum
        </a>
        <a
          href="https://www.linkedin.com/in/juanfrancitorra/"
          target="_blank"
          className="as"
        >
          Linkedin
        </a>
        <a href="https://github.com/Jufaa" className="as" target="_blank">
          GitHub
        </a>
      </div>
    </>
  );
};

export default Banner;
