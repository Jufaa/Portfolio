import './styles/card.css';
import { Card } from './components';
const Projects = () => {
  return (
    <div id="projects" className="centrar">
      <h1>Projects</h1>
      <div className="container-cardes">
        <Card
          title={'E-Commerce'}
          body={
            'Projecto creado con typescript, contiene la funcionalidades basicas de un E-Comerce'
          }
          img={'/project1.png'}
          enlace={
            'https://github.com/Jufaa/E-Commerce-basic-with-React-and-TypeScript'
          }
        />
        <Card
          title={'Search Pokemon'}
          body={'Projecto creado con typescript'}
          img={'/pokemon.png'}
          enlace={'https://github.com/Jufaa/Pokemon'}
        />
        <Card
          title={'Rock & EDM Festival'}
          body={'Projecto creado con JavaScript y SASS'}
          img={'/project2.png'}
          enlace={'https://rockyedmfestivall.netlify.app/'}
        />
        <Card
          title={'MemoTest'}
          body={'Projecto creado con TypeScript '}
          img={'/project3.png'}
          enlace={'https://github.com/Jufaa/MemoTest'}
        />
        <Card
          title={'Marvel Project'}
          body={'Projecto creado con React, React-Router-Dom y Boostrap'}
          img={'/project4.png'}
          enlace={'https://github.com/Jufaa/SuperHeroes'}
        />
      </div>
    </div>
  );
};

export default Projects;
