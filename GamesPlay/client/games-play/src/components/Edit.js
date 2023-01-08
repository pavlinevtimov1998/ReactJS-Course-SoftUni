import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

import { editGame, getOneGame } from "../services/gameService";

export const Edit = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [data, setData] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  });

  useEffect(() => {
    getOneGame(gameId).then((result) => setData(result));
  }, [gameId]);

  const onChangeHandler = (e) =>
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));

  const editGameHandler = (e) => {
    e.preventDefault();

    const emptyFields = Object.values(data).filter((v) => v.length === 0);

    if (emptyFields.length > 0) {
      return alert("All fields are required!");
    }

    editGame(gameId, data, user.accessToken).then(() =>
      navigate("/details/" + gameId)
    );
  };

  return (
    <section id="edit-page" className="auth">
      <form id="edit" onSubmit={editGameHandler}>
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={data.title}
            onChange={onChangeHandler}
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={data.category}
            onChange={onChangeHandler}
          />
          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min={1}
            value={data.maxLevel}
            onChange={onChangeHandler}
          />
          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={data.imageUrl}
            onChange={onChangeHandler}
          />
          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            value={data.summary}
            onChange={onChangeHandler}
          />
          <input
            className="btn submit"
            type="submit"
            defaultValue="Edit Game"
          />
        </div>
      </form>
    </section>
  );
};
