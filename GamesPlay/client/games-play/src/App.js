import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
