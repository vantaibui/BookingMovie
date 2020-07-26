import React, { useState } from "react";
import { qlNguoiDung } from "../services/Quan LyNguoiDungService";
import { userLogin, token } from "../config/setting";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../redux/actions/quanLyNguoiDungAction";

const Login = (props) => {
  const dispatch = useDispatch();

  let [state, setState] = useState({
    values: {
      taiKhoan: "",
      matKhau: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
    },
  });

  let [result, setResult] = useState("Chưa submit");

  const handleChangeInput = (event) => {
    let { value, name } = event.target;

    let newValue = {
      ...state.values,
      [name]: value,
    };

    let newError = {
      ...state.errors,
      [name]: value === "" ? "Không được bỏ trống" : "",
    };
    setState({ values: newValue, errors: newError });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    qlNguoiDung
      .dangNhap(state.values)
      .then((res) => {
        console.log(res.data);
        // Lưu thông tin người dùng vào local
        localStorage.setItem(userLogin, JSON.stringify(res.data));
        // Lưu thông tin token vào local
        localStorage.setItem(token, res.data.accessToken);

        dispatch(dangNhapAction(res.data.taiKhoan));

        props.history.push("/home");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    setResult("Đăng nhập thành công!");
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <p className="text-danger"> {result} </p>
      <h3 className="display-4"> Đăng nhập </h3>
      <div className="form-group">
        <span> Tài khoản </span>
        <input
          type="text"
          name="taiKhoan"
          className="form-control"
          onChange={handleChangeInput}
        />
      </div>
      <div className="form-group">
        <span> Mật khẩu </span>
        <input
          type="password"
          name="matKhau"
          className="form-control"
          onChange={handleChangeInput}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success"> Đăng nhập </button>
      </div>
    </form>
  );
};

export default Login;
