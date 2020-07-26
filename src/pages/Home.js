import React, { useState, useEffect } from "react";
import { qlPhimService } from "../services/QuanLyPhimService";
import { NavLink } from "react-router-dom";

const Home = (props) => {
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  const renderDSPhim = () => {
    return danhSachPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img
              className="card-img-top"
              src={phim.hinhAnh}
              alt={phim.maPhim}
            />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <NavLink className="btn btn-success" to={`/movieDetail/${phim.maPhim}`}>
                Đặt vé
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };
  //   useEffect thay thế cho 3 lifeCycle
  useEffect(() => {
    qlPhimService
      .layDanhSachPhim()
      .then((result) => {
        console.log(result.data);
        setDanhSachPhim(result.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []); // Tham số 2 [] rỗng sử dụng như componentDistchMount
  return (
    <div className="container">
      <div className="display-4">Danh sách phim</div>
      <div className="row">{renderDSPhim()}</div>
    </div>
  );
};
export default Home;
