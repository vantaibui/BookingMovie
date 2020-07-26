import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeTemplate } from "./HomeTemplate/HomeTemplate";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MovieDetail from "./pages/MovieDetail";
import Showtime from "./pages/Showtime";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <Switch>
              <HomeTemplate exact path="/" Component={Home}></HomeTemplate>
              <HomeTemplate exact path="/home" Component={Home}></HomeTemplate>
              <HomeTemplate
                exact
                path="/register"
                Component={Register}
              ></HomeTemplate>
              <HomeTemplate
                exact
                path="/login"
                Component={Login}
              ></HomeTemplate>
              <HomeTemplate
                exact
                path="/movieDetail/:maPhim"
                Component={MovieDetail}
              ></HomeTemplate>
              <HomeTemplate
                exact
                path="/showTime/:maLichChieu"
                Component={Showtime}
              ></HomeTemplate>

              {/* Admin */}

            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
