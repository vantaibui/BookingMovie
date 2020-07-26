import { DANG_NHAP, DANG_KY } from "../types/quanLynguoiDungType";
export const dangNhapAction = (taiKhoan) => {
    return {
        type: DANG_NHAP,
        taiKhoan,
    };
};

export const dangKyAction = (taiKhoan) => {
    return {
        type: DANG_KY,
        taiKhoan,
    };
};