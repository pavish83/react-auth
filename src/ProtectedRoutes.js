import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const ProtectedRoutes = ({ element: Element, ...rest }) => {
  const token = cookies.get("TOKEN");

  if (token) {
    return <Element />;
  } else {
    return (
      <Navigate
        to={{
          pathname: "/",
          state: {
            // sets the location a user was about to assess before being redirected to login
            from: {...rest.location},
          },
        }}
      />
    );
  }
};

export default ProtectedRoutes;