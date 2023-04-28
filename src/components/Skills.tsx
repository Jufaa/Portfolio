import '../styles/skills.css'

const Skills = () => {
  return (
    <>
      <h1>My Skills</h1>
      <div className="icons" id="skills">
        <div className="icon-wrapper">
          <img className="tamanio" src='icons/javascript.svg' />
          <h3>JavaScript</h3>
        </div>
        <div className="icon-wrapper">
          <img className="tamanio" src='icons/react.svg' />
          <h3>React</h3>
        </div>
        <div className="icon-wrapper">
          <img className="tamanio" src='icons/ts.svg' />
          <h3>TypeScript</h3>
        </div>
        <div className="icon-wrapper">
          <img className="tamanio" src='icons/css.svg' />
          <h3>CSS</h3>
        </div>
        <div className="icon-wrapper">
          <img className="tamanio" src='icons/nodejs.svg' />
          <h3>NodeJS</h3>
        </div>
        <div className="icon-wrapper">
          <img className="tamanio" src='icons/java.svg' />
          <h3>Java</h3>
        </div>
        <div className="icon-wrapper">
          <img className="tamanio" src='icons/spring.svg' />
          <h3>SpringBoot</h3>
        </div>
        <div className="icon-wrapper">
          <img className="tamanio" src='icons/c.svg' />
          <h3>C</h3>
        </div>
      </div>
    </>
  )
}

export default Skills