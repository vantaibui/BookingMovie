import axios from "axios";
import { domain, token, userLogin, groupID } from "../config/setting";

export class QuanLyNguoiDung {
    dangNhap = (userLogin) => {
        return axios({
            url: `${domain}/QuanLyNguoiDung/DangNhap`,
            method: "POST",
            data: userLogin,
        });
    };
    dangKy = (userLogin) => {
        return axios({
            url: `${domain}/QuanLyNguoiDung/DangKy`,
            method: "POST",
            data: userLogin,

        })
    }
    datVe = (thongTinDatVe) => {
        return axios({
            url: `${domain}/QuanLyDatVe/DatVe`,
            method: "POST",
            data: thongTinDatVe,
            // yeu cau dang nhap
            headers: {
                // sau bearer co dau cach
                Authorization: "Bearer " + localStorage.getItem(token),
            },
        });
    };
}

export const qlNguoiDung = new QuanLyNguoiDung();