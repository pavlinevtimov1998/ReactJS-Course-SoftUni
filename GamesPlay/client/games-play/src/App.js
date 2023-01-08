import { Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import { Header } from "./components/common/Header";
import { Home } from "./components/common/Home";
import { Details } from "./components/Details";
import { Catalog } from "./components/Catalog";
import { Create } from "./components/Create";
import { Edit } from "./components/Edit";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { getHomeGames } from "./services/gameService";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getHomeGames().then((result) => {
      setGames(() => result);
    });
  }, []);

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home games={games} />}></Route>

          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/details/:gameId" element={<Details />}></Route>

          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:gameId" element={<Edit />}></Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
