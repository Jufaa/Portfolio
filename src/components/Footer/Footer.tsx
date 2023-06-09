import './styles/footer.css';
const Footer = () => {
  return (
    <>
      <div className="foot">
        <p>© Copyright 2023. Made by Juan Cruz Francitorra</p>
        <div className="linkes">
          <a
            href="https://www.linkedin.com/in/juanfrancitorra/"
            target="_blank"
            title="Linkedin"
          >
            <img src="icons/lk.svg" alt="linkedin" />
          </a>
          <a href="https://github.com/Jufaa" target="_blank" title="GitHub">
            <img src="icons/github.svg" alt="github" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
