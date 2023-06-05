import './styles/footer.css';
const Footer = () => {
  return (
    <>
      <div className="foot">
        <p>© Copyright 2023. Made by Juan Cruz Francitorra</p>
        <div className="linkes">
          <a
            href="https://www.linkedin.com/in/juanfrancitorra/"
            id="linkedin"
            target="_blank"
          >
            <img src="icons/lk.svg" />
          </a>
          <a href="https://github.com/Jufaa" target="_blank" id="github">
            <img src="icons/github.svg" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
