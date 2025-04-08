import { Monument } from "../types";

interface MonumentCardProps {
  monument: Monument;
}

const MonumentCard: React.FC<MonumentCardProps> = ({ monument }) => {
  return (
    <article>
      <h2>{monument.name}</h2>
      <img
        src={monument.imageUrl}
        alt={`Monument: ${monument.name}`}
        width="250"
      />
      <p>{monument.description}</p>
      <span>
        {monument.country}, {monument.city}
      </span>
    </article>
  );
};

export default MonumentCard;
