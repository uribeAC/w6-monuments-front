import { Monument } from "../../types";
import "./MonumentCard.css";

interface MonumentCardProps {
  monument: Monument;
}

const MonumentCard: React.FC<MonumentCardProps> = ({ monument }) => {
  return (
    <article className="monument">
      <div className="monument__photo">
        <div className="image-overlay"></div>
        <img
          className="monument__image"
          src={monument.imageUrl}
          alt={`Monument: ${monument.name}`}
          width={250}
        />
        <p className="monument__description">{monument.description}</p>
      </div>
      <div className="monument__data">
        <h2 className="monument__data-name">{monument.name}</h2>
        <span className="monument__data-location">
          {monument.country}, {monument.city}
        </span>
      </div>
    </article>
  );
};

export default MonumentCard;
