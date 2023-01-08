import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

import { createGame } from "../services/gameService";

export const Create = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  });

  const onChangeHandler = (e) =>
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));

  const createGameHandler = (e) => {
    e.preventDefault();

    const emptyFields = Object.values(data).filter((v) => v.length === 0);

    if (emptyFields.length > 0) {
      return alert("All fields are required!");
    }

    createGame(data, user.accessToken).then((result) => {
      console.log(result);
      navigate("/");
    });
  };
  return (
    <section id="create-page" className="auth" onSubmit={createGameHandler}>
      <form id="create">
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
            value={data.title}
            onChange={onChangeHandler}
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
            value={data.category}
            onChange={onChangeHandler}
          />
          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min={1}
            placeholder={1}
            value={data.maxLevel}
            onChange={onChangeHandler}
          />
          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
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
            defaultValue="Create Game"
          />
        </div>
      </form>
    </section>
  );
};
