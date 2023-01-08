import { Link } from "react-router-dom";

export const GameCatalogItem = ({ game }) => {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={game.imageUrl} alt={game.title} />
        <h6>{game.genre}</h6>
        <h2>{game.title}</h2>
        <Link to={`/details/${game._id}`} className="details-button">
          Details
        </Link>
      </div>
    </div>
  );
};
