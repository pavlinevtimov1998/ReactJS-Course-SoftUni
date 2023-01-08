import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import { Header } from "./components/common/Header";
import { Home } from "./components/common/Home";
import { Details } from "./components/Details";
import { Catalog } from "./components/Catalog";
import { Create } from "./components/Create";
import { Edit } from "./components/Edit";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Logout } from "./components/auth/Logout";

function App() {
  return (
    <AuthProvider>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/details/:gameId" element={<Details />}></Route>

            <Route path="/create" element={<Create />}></Route>
            <Route path="/edit/:gameId" element={<Edit />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
