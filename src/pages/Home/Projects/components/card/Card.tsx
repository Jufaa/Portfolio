import '../../styles/card.css';
interface CardProps {
  title: string;
  body: string;
  img: string;
  git: string;
  deploy: string;
}

const Card = ({ title, img, body, git, deploy }: CardProps) => {
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
            <a href={git}>Code</a>
          </button>
          <button>
            <a href={deploy}>Deploy</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
