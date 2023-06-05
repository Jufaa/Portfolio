import { Languages } from './languajes';
import './styles/skills.css';

const Skills = () => {
  return (
    <>
      <h1>My Skills</h1>
      <div className="icons" id="skills">
        {Languages.map((skill, index) => (
          <div className="icon-wrapper" key={index}>
            <img className="tamanio" src={skill.img} alt={skill.languaje} />
            <h3>{skill.languaje}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
