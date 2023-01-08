import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element=""></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
