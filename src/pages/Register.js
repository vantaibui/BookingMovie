import React, { Component } from "react";

class Register extends Component {
  state = {
    values: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      sdt: "",
    },
    errors: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      sdt: "",
    },
  };
  // onChange thay đổi trả về một cái event
  handleChangeInput = (event) => {
    /*var tagInput = event.target;
    this.setState({[tagInput.name]:tagInput.value}, ()=>{
        console.log(this.state);
    })*/
    let { value, name } = event.target;
    // this.setState({ [name]: value }, () => {
    //     console.log(this.state);
    //   });
    // Tạo ra object this.state.value mới
    let newValue = {
      ...this.state.values,
      [name]: value,
    };
    // Xét trường hợp rỗng

    // Tạo ra object this.state.errors mới
    let newError = {
      ...this.state.errors,
      [name]: value === "" ? "Không được bỏ trống" : "",
    };

    if (name === "email") {
      let regexEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
      // match so sánh chuỗi
      if (value.match(regexEmail)) {
        newError.email = "";
      } else {
        newError.email = "Email không hợp lệ!";
      }
    }

    this.setState({ values: newValue, errors: newError });
  };
  handleSubmit = (event) => {
    // Chặn sự kiện load lại trang từ form submit
    event.preventDefault();
    let { values, errors } = this.state;
    let valid = true;
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
    }
    if (!valid) {
      alert("Thông tin không hợp lệ!");
    }
    // Gọi api hoặc dispatch redux
  };
  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h3 className="display-4 text-center text-primary">Register</h3>
        <div className="form-group">
          <span>Họ tên</span>
          <input
            type="text"
            className="form-control"
            name="hoTen"
            onChange={this.handleChangeInput}
          />
          <span className="text-danger">{this.state.errors.hoTen}</span>
        </div>
        <div className="form-group">
          <span>Tài khoản</span>
          <input
            type="text"
            className="form-control"
            name="taiKhoan"
            onChange={this.handleChangeInput}
          />
          <span className="text-danger">{this.state.errors.taiKhoan}</span>
        </div>
        <div className="form-group">
          <span>Mật khẩu</span>
          <input
            type="password"
            className="form-control"
            name="matKhau"
            onChange={this.handleChangeInput}
          />
          <span className="text-danger">{this.state.errors.matKhau}</span>
        </div>
        <div className="form-group">
          <span>Email</span>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={this.handleChangeInput}
          />
          <span className="text-danger">{this.state.errors.email}</span>
        </div>
        <div className="form-group">
          <span>Số điện thoại</span>
          <input
            type="text"
            className="form-control"
            name="sdt"
            onChange={this.handleChangeInput}
          />
          <span className="text-danger">{this.state.errors.sdt}</span>
        </div>
        <div className="form-group text-center">
          <input
            type="submit"
            className="btn btn-success px-3"
            value="Đăng ký"
          />
        </div>
      </form>
    );
  }
}

export default Register;
