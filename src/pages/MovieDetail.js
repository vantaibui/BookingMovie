import React, { useState, useEffect } from "react";
import { qlPhimService } from "../services/QuanLyPhimService";
import { NavLink } from "react-router-dom";

var moment = require("moment"); // require
moment().format();

export default function MovieDetail(props) {
  let [phim, setPhim] = useState({});
  useEffect(() => {
    qlPhimService.layThongTinPhim(props.match.params.maPhim).then((result) => {
      // console.log(result.data);
      setPhim(result.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={phim.hinhAnh} alt={phim.maPhim} />
        </div>
        <div className="col-8">
          <table className="table">
            <tr>
              <th>Tên phim: </th>
              <th>{phim.tenPhim}</th>
            </tr>
            <tr>
              <th>Mô tả: </th>
              <th>{phim.moTa}</th>
            </tr>
          </table>
        </div>
      </div>
      <h3>Thông tin lịch chiếu</h3>
      <hr />
      <div className="row">
        <div className="col-4">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {phim.heThongRapChieu?.map((heThongRap, index) => {
              return (
                <a
                  key={index}
                  className="nav-link"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href={`#${heThongRap.maHeThongRap}`}
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "5px",
                    }}
                    src={heThongRap.logo}
                    alt={heThongRap.maHeThongRap}
                  />
                  {heThongRap.tenHeThongRap}
                </a>
              );
            })}

            {/* <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> */}
          </div>
        </div>
        <div className="col-8">
          <div className="tab-content" id="v-pills-tabContent">
            {phim.heThongRapChieu?.map((heThongRap, index) => {
              return (
                <div
                  className="tab-pane fade show"
                  id={heThongRap.maHeThongRap}
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  {heThongRap.cumRapChieu?.map((cumRap, index) => {
                    return (
                      <div key={cumRap.maCumRap}>
                        <h3>{cumRap.tenCumRap}</h3>
                        <div className="row">
                          {cumRap.lichChieuPhim
                            ?.slice(0, 12)
                            .map((lichChieu, index) => {
                              return (
                                <NavLink
                                  className="col-4"
                                  key={lichChieu.maLichChieu}
                                  to={`/showTime/${lichChieu.maLichChieu}`}
                                >
                                  {moment(lichChieu.ngayChieuGioChieu).format('DD/MM/YY hh:mm A')}
                                </NavLink>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          {/* <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              ...
            </div> */}
        </div>
      </div>
    </div>
  );
}
