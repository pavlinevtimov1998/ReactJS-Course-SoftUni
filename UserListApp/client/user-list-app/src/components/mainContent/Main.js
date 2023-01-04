import { Search } from "../search/Search";
import { UserTable } from "../userList/UserTable";
import { Pagination } from "../pagination/Pagination";

import { useEffect, useState } from "react";
import { getAll } from "../../services/userService";

export const Main = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAll().then((result) => setUsers(result));
  }, []);

  const isUsers = users.length > 0 ? true : false;

  return (
    <>
      <main className="main">
        <section className="card users-container">
          <Search />

          <UserTable users={users} isUsers={isUsers} />

          <Pagination />
        </section>
      </main>
    </>
  );
};
