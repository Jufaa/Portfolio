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
            'Project created with TypeScript and React, whose functions are basic to an E-Commerce'
          }
          img={'/project1.png'}
          git={
            'https://github.com/Jufaa/E-Commerce-basic-with-React-and-TypeScript'
          }
          deploy={'https://ecccomerbasic.netlify.app/'}
        />
        <Card
          title={'Search Pokemon'}
          body={'Project created with Typescript, CharakaUI and React'}
          img={'/pokemon.png'}
          git={'https://github.com/Jufaa/Pokemon'}
          deploy={'https://pokemonsearchhh.netlify.app/'}
        />
        <Card
          title={'Twitter UI'}
          body={'Project created with Typescript, CharakaUI and React'}
          img={'/project2.png'}
          deploy={'https://twitter-ui-jufa.netlify.app/'}
          git={'https://github.com/Jufaa/Twitter-App-UI'}
        />
        <Card
          title={'Rick and Morty APP'}
          body={'Project created with Typescript, CharakaUI and React'}
          img={'/project3.png'}
          git={'https://github.com/Jufaa/Ricky-Morty'}
          deploy={'https://jufa-rickmortyapp.netlify.app/'}
        />
        <Card
          title={'Marvel Project'}
          body={'Project created with React, React-Router-Dom y Boostrap'}
          img={'/project4.png'}
          git={'https://github.com/Jufaa/SuperHeroes'}
          deploy={'https://sueprhero.netlify.app/marvel'}
        />
      </div>
    </div>
  );
};

export default Projects;
