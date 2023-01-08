import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

import { getComments, getOneGame } from "../services/gameService";
import { CommentList } from "./CommentList";
import { CommentForm } from "./CommentsForm";

export const Details = () => {
  const { user } = useContext(AuthContext);
  const { gameId } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    Promise.all([getOneGame(gameId), getComments(gameId)]).then(
      ([gameData, comments]) => setGame({ ...gameData, comments: comments })
    );
  }, [gameId]);

  const deleteHandler = (e) => {
    e.preventDefault();
  };

  if (!game) {
    return <p>Loading...</p>;
  }

  const isOwner = game?._ownerId === user._id;

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} alt={game.title} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.genre}</p>
        </div>
        <p className="text">{game.category}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          {game.comments.length > 0 ? (
            <CommentList comments={game.comments} />
          ) : (
            <p className="no-comment">No comments.</p>
          )}
        </div>

        {isOwner && (
          <div className="buttons">
            <Link to={`/edit/${game._id}`} className="button">
              Edit
            </Link>
            <Link onClick={deleteHandler} className="button">
              Delete
            </Link>
          </div>
        )}
      </div>

      {user && !isOwner && <CommentForm />}
    </section>
  );
};
