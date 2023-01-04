import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Search } from "./components/search/Search";
import { UserTable } from "./components/userList/UserTable";
import { Pagination } from "./components/pagination/Pagination";

import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />
          <UserTable />

          <Pagination />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
