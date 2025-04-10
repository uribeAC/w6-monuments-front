import { Monument } from "../../types";
import "./MonumentCard.css";

interface MonumentCardProps {
  monument: Monument;
}

const MonumentCard: React.FC<MonumentCardProps> = ({
  monument: { name, description, imageUrl, alternativeText, city, country },
}) => {
  return (
    <article className="monument">
      <div className="monument__photo">
        <div className="monument__photo-overlay"></div>
        <p className="monument__description">{description}</p>
        <img
          className="monument__image"
          src={imageUrl}
          alt={alternativeText}
          width={250}
          height={500}
        />
      </div>
      <div className="monument__data">
        <h2 className="monument__data-name">{name}</h2>
        <span className="monument__data-location">
          {country}, {city}
        </span>
      </div>
    </article>
  );
};

export default MonumentCard;
