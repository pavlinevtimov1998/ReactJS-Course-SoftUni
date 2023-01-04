import { NoUsers } from "./NoUsers";
import { UserItem } from "./UserItem";
import { UserDetails } from "../userList/UserDetails";

import { actions, deleteUser, edit, getOne } from "../../services/userService";

import { useState } from "react";
import { EditUser } from "./EditUser";
import { DeleteUser } from "./DeleteUser";

export const UserTable = (props) => {
  const [userAction, setUserAction] = useState({ user: null, action: null });

  const actionHandler = (action, user) => {
    if (action === actions.Details) {
      getOne(user._id).then((user) =>
        setUserAction((userAction) => ({ user: user, action: action }))
      );
    } else if (action === actions.Edit) {
      getOne(user._id).then((user) =>
        setUserAction((userAction) => ({ user: user, action: action }))
      );
    } else if (action === actions.Delete) {
      setUserAction((userAction) => ({ user: user, action: action }));
    }
  };

  const editUser = (e) => {
    e.preventDefault();

    const userId = userAction.user._id;

    const formData = new FormData(e.target);

    const { firstName, lastName, email, phoneNumber, imageUrl, ...address } =
      Object.fromEntries(formData);

    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      imageUrl,
      address: address,
    };

    edit(userId, userData).then((user) => {
      props.modifyUsers(user, userAction.action);
      setUserAction({ user: null, action: null });
      closeModalHandler();
    });
  };

  const deleteUserHandler = (e) => {
    e.preventDefault();

    const userId = userAction.user._id;

    deleteUser(userId).then((userId) => {
      props.modifyUsers(userId, userAction.action);
      setUserAction({ user: null, action: null });
      closeModalHandler();
    });
  };

  const closeModalHandler = () => {
    setUserAction({ user: null, action: null });
  };

  return (
    <>
      {userAction.action === "details" && (
        <UserDetails
          user={userAction.user}
          closeModalHandler={closeModalHandler}
        />
      )}
      {userAction.action === "edit" && (
        <EditUser
          user={userAction.user}
          closeModalHandler={closeModalHandler}
          editUser={editUser}
        />
      )}
      {userAction.action === actions.Delete && (
        <DeleteUser
          closeModalHandler={closeModalHandler}
          deleteUserHandler={deleteUserHandler}
        />
      )}

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>
                First name
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Last name
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Email
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Phone
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Created
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {/* {!props.users.length && <NoUsers />} */}

            {props.users.map((user) => (
              <UserItem
                key={user._id}
                user={user}
                actionHandler={actionHandler}
              />
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn-add btn">Add new user</button>
    </>
  );
};
