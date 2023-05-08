import Card from "../card/Card"
import '../styles/projects.css'
const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="container-cardes">


      <Card title={"pija"}  body={"hola"}/>
      <Card/>
      <Card/>
      </div>
    </div>
  )
}

export default Projects