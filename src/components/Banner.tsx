import '../styles/banner.css'
const Banner = () => {
  return (
    <>
    <div className="container">
    <img className="keloke" src='/about-image.svg'/>
    <p>Hola, me llamo</p>
    <h1 className='menos-gap'>Juan Cruz Francitorra</h1>
    <h2>Construyo sitios web</h2>
    <h3>Soy un desarrolador web especializado en crear sitios webs awesomes!</h3>
    <a href="https://drive.google.com/file/d/1s15yXaDMgZ8toQpAYH7AO873nRSESDgR/view?usp=sharing" download className='as'>Curriculum</a>
    <a href="https://www.linkedin.com/in/juanfrancitorra/" target='_blank' className='as'>Linkedin</a>
    <a href="https://github.com/Jufaa"className='as' target="_blank">GitHub</a>
    </div>
    </>
  )
}

export default Banner