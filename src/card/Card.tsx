import './card.css'
const Card = ({title, img, body, enlace}) => {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={img} alt=''/>
        </div>
        <div className="card-content">

        <div className="card-title">
            <h3>{title}</h3>
        </div>
        <div className="card-body">
           <p> {body} </p> 
        </div>
<div className="btn">
    <button>
        <a href={enlace}>
            View Code
        </a>
    </button>
</div>
    </div>
        </div>
  )
}

export default Card