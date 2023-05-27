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
            'Projecto creado con Typescript y React, contiene la funcionalidades basicas de un E-Comercce'
          }
          img={'/project1.png'}
          git={
            'https://github.com/Jufaa/E-Commerce-basic-with-React-and-TypeScript'
          }
          deploy={'https://ecccomerbasic.netlify.app/'}
        />
        <Card
          title={'Search Pokemon'}
          body={'Projecto creado con Typescript y React! Falta estilos'}
          img={'/pokemon.png'}
          git={'https://github.com/Jufaa/Pokemon'}
          deploy={'https://pokemonsearchhh.netlify.app/'}
        />
        <Card
          title={'Twitter UI'}
          body={'Projecto creado con Typescript, React y ChakraUI'}
          img={'/project2.png'}
          deploy={'https://twitter-ui-jufa.netlify.app/'}
          git={'https://github.com/Jufaa/Twitter-App-UI'}
        />
        <Card
          title={'MemoTest'}
          body={'Projecto creado con TypeScript y React! Falta agregar estilos'}
          img={'/project3.png'}
          git={'https://github.com/Jufaa/MemoTest'}
          deploy={'https://memotestsss.netlify.app/'}
        />
        <Card
          title={'Marvel Project'}
          body={'Projecto creado con React, React-Router-Dom y Boostrap'}
          img={'/project4.png'}
          git={'https://github.com/Jufaa/SuperHeroes'}
          deploy={'https://sueprhero.netlify.app/marvel'}
        />
      </div>
    </div>
  );
};

export default Projects;
