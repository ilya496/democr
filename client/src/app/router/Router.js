import React from "react";
import { privateRoutes, publicRoutes, adminRoutes } from "./routes";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function Router() {
  const user = useSelector((state) => state.user);
  return (
    <Switch>
      {user?.data &&
        user.data.roles.includes("admin") &&
        adminRoutes.map((route, key) => (
          <Route
            key={key}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      {user?.data
        ? privateRoutes.map((route, key) => (
            <Route
              key={key}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))
        : publicRoutes.map((route, key) => (
            <Route
              key={key}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
    </Switch>
  );
}

export default Router;
