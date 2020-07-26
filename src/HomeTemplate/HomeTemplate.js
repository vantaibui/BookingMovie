import React, { Fragment } from "react";
import { Route, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const LayoutHome = (props) => {
  const taiKhoan = useSelector(
    (state) => state.quanLyNguoiDungReducer.taiKhoan
  );
  // console.log("hookSelect:", taiKhoan);

  const renderLogin = () => {
    if (taiKhoan !== "") {
      return <span className='mt-2'>Hello: {taiKhoan}</span>;
    }
    return (
      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
    );
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item d-flex justify-content-center">
              {/* <NavLink className="nav-link" to="/login">
                Login
              </NavLink> */}
              {renderLogin()}
            </li>
          </ul>
        </div>
      </nav>
      {props.children}
    </Fragment>
  );
};

export const HomeTemplate = (props) => {
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

// export const HomeTemplate = ({ Component, ...restParam }) => {
//   return (
//     <Route
//       {...restParam}
//       render={(propsComponent) => {
//         return <Component {...propsComponent} />;
//       }}
//     />
//   );
// };
