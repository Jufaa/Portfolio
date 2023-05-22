import '../../styles/card.css';
interface CardProps {
  title: string;
  body: string;
  img: string;
  enlace: string;
}

// TODO: agregar enlace 2 para los deploys
const Card = ({ title, img, body, enlace }: CardProps) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={img} alt="" />
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
            <a href={enlace}>Code</a>
          </button>
          <button>
            <a href={enlace}>Deploy</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
