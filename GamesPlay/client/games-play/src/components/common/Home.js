import { useEffect, useState } from "react";

import { GameHomeItem } from "./GameHomeItem";

import { getHomeGames } from "../../services/gameService";

export const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getHomeGames().then((result) => {
      setGames(result);
    });
  }, []);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />

      <div id="home-page">
        <h1>Latest Games</h1>

        {games.map((game) => (
          <GameHomeItem key={game._id} game={game} />
        ))}

        {games.length === 0 && <p className="no-articles">No games yet</p>}
      </div>
    </section>
  );
};
