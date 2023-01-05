import { Search } from "../search/Search";
import { UserTable } from "../userList/UserTable";
import { Pagination } from "../pagination/Pagination";
import { Spinner } from "../common/Spinner";

import { useEffect, useState } from "react";
import { actions, getAll } from "../../services/userService";

export const Main = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    changeLoaderState();
    getAll().then((result) => {
      setUsers(result);
      changeLoaderState();
    });
  }, []);

  const changeLoaderState = () => {
    setLoading((state) => !state);
  };

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
      {isLoading && <Spinner />}
      <main className="main">
        <section className="card users-container">
          <Search />

          <UserTable
            users={users}
            isUsers={isUsers}
            modifyUsers={modifyUsers}
            changeLoaderState={changeLoaderState}
          />

          <Pagination />
        </section>
      </main>
    </>
  );
};
