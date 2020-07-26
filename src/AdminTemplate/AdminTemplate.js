import React, { Fragment } from "react";
import { Route } from "react-router-dom";


export const AdminTemplate = (props) => {
  return (
    <Route
      path={props.path}
      {...props.exact}
      render={(propsComponent) => {
        return (
          <LayoutHome>
            <props.Component {...propsComponent} />
          </LayoutHome>
        );
      }}
    />
  );
};
