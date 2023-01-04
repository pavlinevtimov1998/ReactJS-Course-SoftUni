import { Search } from "../search/Search";
import { UserTable } from "../userList/UserTable";
import { Pagination } from "../pagination/Pagination";

import { useEffect, useState } from "react";
import { actions, getAll } from "../../services/userService";

export const Main = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAll().then((result) => setUsers(result));
  }, []);

  const modifyUsers = (modifiedUser, action) => {
    if (action === actions.Edit) {
      setUsers(
        users.map((user) => {
          if (user._id === modifiedUser._id) {
            return modifiedUser;
          }

          return user;
        })
      );
    } else if (action === actions.Delete) {
      setUsers(users.filter((user) => user._id !== modifiedUser));
    } else if (action === actions.Create) {
      setUsers((users) => [...users, modifiedUser]);
    }
  };

  const isUsers = users.length > 0 ? true : false;

  return (
    <>
      <main className="main">
        <section className="card users-container">
          <Search />

          <UserTable
            users={users}
            isUsers={isUsers}
            modifyUsers={modifyUsers}
          />

          <Pagination />
        </section>
      </main>
    </>
  );
};
