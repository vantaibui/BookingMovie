import React, { useState, useEffect, Fragment } from "react";
import { qlPhimService } from "../services/QuanLyPhimService";
import { userLogin } from "../config/setting";
import { Redirect } from "react-router-dom";
import { qlNguoiDung } from "../services/Quan LyNguoiDungService";

var moment = require("moment");
moment().format();

export default function Showtime(props) {
  let [thongTinPhongVe, setThongTinPhongVe] = useState({});

  let [danhSachGheDangDat, setDanhSachGheDangDat] = useState([]);

  useEffect(() => {
    // Lấy mã lịch chiếu từ params url
    let { maLichChieu } = props.match.params;
    qlPhimService
      .layThongTinPhongVe(maLichChieu)
      .then((res) => {
        console.log(res.data);
        setThongTinPhongVe(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const datGhe = (ghe) => {
    //   Nếu như mảng ghế đang đặt chưa có ghế đó => push vào mảng
    let index = danhSachGheDangDat.findIndex(
      (gheDangDat) => gheDangDat.stt === ghe.stt
    );
    if (index != -1) {
      // Nếu click vào ghế đã có trong mảng ghế đang đặt thì remove ra
      danhSachGheDangDat.splice(index, 1);
    } else {
      // Nếu như click vào chưa có trong mảng ghế đang đặt thì push vào
      danhSachGheDangDat = [...danhSachGheDangDat, ghe];
    }
    // Set lại danhSachGheDangDat và render lại giao diện
    setDanhSachGheDangDat([...danhSachGheDangDat]);
  };

  const renderGhe = (daDat, ghe) => {
    if (daDat) {
      return (
        <button className={"ghe gheDaDat"} disabled>
          X
        </button>
      );
    } else {
      // Kiểm tra ghế có đang đặt hay không?
      let cssGheDangDanh = "";
      let index = danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.stt == ghe.stt
      );
      if (index !== -1) {
        // Nếu ghế trong 160 ghế có trong ghê đang đặt => render class ghế đó màu xanh
        cssGheDangDanh = "gheDangDat";
      }
      let cssGheVip = "";
      if (ghe.loaiGhe === "Vip") {
        cssGheVip = "gheVIP";
      }
      return (
        <button
          onClick={() => {
            datGhe(ghe);
          }}
          className={`ghe ${cssGheDangDanh} ${cssGheVip}`}
        >
          {ghe.stt}
        </button>
      );
    }
  };

  const renderDanhSachGhe = () => {
    // let danhSachGhe = thongTinPhongVe?.danhSachGhe;
    let { danhSachGhe } = thongTinPhongVe;
    return danhSachGhe?.map((ghe, index) => {
      // return <button className='gheThuong' key={index}>{ghe.stt}</button>;
      return (
        <Fragment key={index}>
          {renderGhe(ghe.daDat, ghe)} {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  const renderThongTinPhim = () => {
    // console.log(thongTinPhongVe.thongTinPhim);

    return (
      <div className="container">
        {/* thongTinPhim? => khi nao co thong tin phim thi moi render  */}
        <h1 className="text-danger">{thongTinPhongVe.thongTinPhim?.tenPhim}</h1>
        <img
          src={thongTinPhongVe.thongTinPhim?.hinhAnh}
          alt={thongTinPhongVe.thongTinPhim?.maLichChieu}
        />
        <h3>
          {thongTinPhongVe.thongTinPhim?.tenCumRap} -
          {thongTinPhongVe.thongTinPhim?.tenRap}
        </h3>
        <p>{thongTinPhongVe.thongTinPhim?.diaChi}</p>
        <h4>
          Giờ chiếu:
          {moment(thongTinPhongVe.thongTinPhim?.gioChieu, "hh:mm").format("LT")}
        </h4>
        <h4>Giờ chiếu: {thongTinPhongVe.thongTinPhim?.gioChieu}</h4>

        <div>
          {/*render thông tin ghế đang đặt  */}
          {renderThongTinGheDangDat()}

          <button
            onClick={() => {
              datVe();
            }}
            className="w-100 btn btn-success"
          >
            Đặt vé
          </button>
        </div>
      </div>
    );
  };

  const datVe = () => {
    let thongTinDatVe = {
      maLichChieu: props.match.params.maLichChieu,
      danhSachVe: danhSachGheDangDat,
      taiKhoanNguoiDung: JSON.parse(localStorage.getItem("userLogin")).taiKhoan,
    };
    // console.log(thongTinDatVe);
    qlNguoiDung
      .datVe(thongTinDatVe)
      .then((res) => {
        //   đưa dữ liệu và reload lại trang
        window.location.reload();
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderThongTinGheDangDat = () => {
    return (
      <div>
        {danhSachGheDangDat.map((gheDangDat, index) => {
          return <span key={index}>Ghế: {gheDangDat.tenGhe}</span>;
        })}
        -
        {danhSachGheDangDat
          .reduce((tongTien, gheDangDat, index) => {
            return (tongTien += gheDangDat.giaVe);
          }, 0)
          .toLocaleString()}
      </div>
    );
  };

  if (!localStorage.getItem(userLogin)) {
    alert("Đăng nhập để đặt vé");
    // redirect chuyển hướng trang
    return <Redirect to="/login" />;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-7 text-center">
          <div className="trapezoid "></div>
          {renderDanhSachGhe()}
        </div>
        <div className="col-5">{renderThongTinPhim()}</div>
      </div>
    </div>
  );
}
