import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { logout } from "../../services/userService";

export const Logout = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout(user.accessToken)
      .then((result) => {
        handleLogout();
        navigate("/", { replace: true });
      })
      .catch((err) => {
        navigate("/", { replace: true });
      });
  });

  return null;
};
