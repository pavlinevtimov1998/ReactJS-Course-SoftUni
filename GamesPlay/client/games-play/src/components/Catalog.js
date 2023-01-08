import { useEffect, useState } from "react";

import { GameCatalogItem } from "./GameCatalogItem";

import { getCatalogGames } from "../services/gameService";

export const Catalog = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getCatalogGames().then((result) => setGames(result));
  }, []);
  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      {games.map((game) => (
        <GameCatalogItem key={game._id} game={game} />
      ))}

      {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
    </section>
  );
};
