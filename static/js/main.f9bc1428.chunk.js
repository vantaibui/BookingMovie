(this.webpackJsonpbookingticket=this.webpackJsonpbookingticket||[]).push([[0],{41:function(e,a,t){e.exports=t(72)},46:function(e,a,t){},47:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},48:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(16),r=t.n(l),o=(t(46),t(8)),i=t(18),m=t(20),s=t(21),h=(t(47),t(48),t(4)),u=t(1),d=t(13),g=function(e){var a=Object(d.c)((function(e){return e.quanLyNguoiDungReducer.taiKhoan}));return c.a.createElement(n.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light"},c.a.createElement(h.b,{className:"navbar-brand",to:"/"},"Navbar"),c.a.createElement("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavId"},c.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement(h.b,{className:"nav-link",to:"/home"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{className:"nav-link",to:"/register"},"Register")),c.a.createElement("li",{className:"nav-item d-flex justify-content-center"},""!==a?c.a.createElement("span",{className:"mt-2"},"Hello: ",a):c.a.createElement(h.b,{className:"nav-link",to:"/login"},"Login"))))),e.children)},p=function(e){return c.a.createElement(u.b,Object.assign({path:e.path},e.exact,{render:function(a){return c.a.createElement(g,null,c.a.createElement(e.Component,a))}}))},v=t(6),E=t(10),f=t.n(E),b="http://movie0706.cybersoft.edu.vn/api",N=new function e(){Object(o.a)(this,e),this.layDanhSachPhim=function(){return f()({url:"".concat(b,"/quanlyphim/laydanhsachphim?manhom=").concat("GP05"),method:"GET"})},this.layThongTinPhim=function(e){return f()({url:"".concat(b,"/QuanLyRap/LayThongTinLichChieuPhim?maPhim=").concat(e),method:"GET"})},this.layThongTinPhongVe=function(e){return f()({url:"".concat(b,"/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=").concat(e),method:"GET"})}},y=function(e){var a=Object(n.useState)([]),t=Object(v.a)(a,2),l=t[0],r=t[1];return Object(n.useEffect)((function(){N.layDanhSachPhim().then((function(e){console.log(e.data),r(e.data)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"display-4"},"Danh s\xe1ch phim"),c.a.createElement("div",{className:"row"},l.map((function(e,a){return c.a.createElement("div",{className:"col-4",key:a},c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:e.hinhAnh,alt:e.maPhim}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},e.tenPhim),c.a.createElement(h.b,{className:"btn btn-success",to:"/movieDetail/".concat(e.maPhim)},"\u0110\u1eb7t v\xe9"))))}))))},O=t(9),C=t(7),T=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={values:{hoTen:"",taiKhoan:"",matKhau:"",email:"",sdt:""},errors:{hoTen:"",taiKhoan:"",matKhau:"",email:"",sdt:""}},e.handleChangeInput=function(a){var t=a.target,n=t.value,c=t.name,l=Object(C.a)({},e.state.values,Object(O.a)({},c,n)),r=Object(C.a)({},e.state.errors,Object(O.a)({},c,""===n?"Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng":""));if("email"===c){n.match(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/)?r.email="":r.email="Email kh\xf4ng h\u1ee3p l\u1ec7!"}e.setState({values:l,errors:r})},e.handleSubmit=function(a){a.preventDefault();var t=e.state,n=t.values,c=(t.errors,!0);for(var l in n)""===n[l]&&(c=!1);c||alert("Th\xf4ng tin kh\xf4ng h\u1ee3p l\u1ec7!")},e}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("form",{className:"container",onSubmit:this.handleSubmit},c.a.createElement("h3",{className:"display-4 text-center text-primary"},"Register"),c.a.createElement("div",{className:"form-group"},c.a.createElement("span",null,"H\u1ecd t\xean"),c.a.createElement("input",{type:"text",className:"form-control",name:"hoTen",onChange:this.handleChangeInput}),c.a.createElement("span",{className:"text-danger"},this.state.errors.hoTen)),c.a.createElement("div",{className:"form-group"},c.a.createElement("span",null,"T\xe0i kho\u1ea3n"),c.a.createElement("input",{type:"text",className:"form-control",name:"taiKhoan",onChange:this.handleChangeInput}),c.a.createElement("span",{className:"text-danger"},this.state.errors.taiKhoan)),c.a.createElement("div",{className:"form-group"},c.a.createElement("span",null,"M\u1eadt kh\u1ea9u"),c.a.createElement("input",{type:"password",className:"form-control",name:"matKhau",onChange:this.handleChangeInput}),c.a.createElement("span",{className:"text-danger"},this.state.errors.matKhau)),c.a.createElement("div",{className:"form-group"},c.a.createElement("span",null,"Email"),c.a.createElement("input",{type:"text",className:"form-control",name:"email",onChange:this.handleChangeInput}),c.a.createElement("span",{className:"text-danger"},this.state.errors.email)),c.a.createElement("div",{className:"form-group"},c.a.createElement("span",null,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),c.a.createElement("input",{type:"text",className:"form-control",name:"sdt",onChange:this.handleChangeInput}),c.a.createElement("span",{className:"text-danger"},this.state.errors.sdt)),c.a.createElement("div",{className:"form-group text-center"},c.a.createElement("input",{type:"submit",className:"btn btn-success px-3",value:"\u0110\u0103ng k\xfd"})))}}]),t}(n.Component),j=new function e(){Object(o.a)(this,e),this.dangNhap=function(e){return f()({url:"".concat(b,"/QuanLyNguoiDung/DangNhap"),method:"POST",data:e})},this.dangKy=function(e){return f()({url:"".concat(b,"/QuanLyNguoiDung/DangKy"),method:"POST",data:e})},this.datVe=function(e){return f()({url:"".concat(b,"/QuanLyDatVe/DatVe"),method:"POST",data:e,headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")}})}},x=function(e){var a=Object(d.b)(),t=Object(n.useState)({values:{taiKhoan:"",matKhau:""},errors:{taiKhoan:"",matKhau:""}}),l=Object(v.a)(t,2),r=l[0],o=l[1],i=Object(n.useState)("Ch\u01b0a submit"),m=Object(v.a)(i,2),s=m[0],h=m[1],u=function(e){var a=e.target,t=a.value,n=a.name,c=Object(C.a)({},r.values,Object(O.a)({},n,t)),l=Object(C.a)({},r.errors,Object(O.a)({},n,""===t?"Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng":""));o({values:c,errors:l})};return c.a.createElement("form",{className:"container",onSubmit:function(t){t.preventDefault(),j.dangNhap(r.values).then((function(t){console.log(t.data),localStorage.setItem("userLogin",JSON.stringify(t.data)),localStorage.setItem("accessToken",t.data.accessToken),a({type:"DANG_NHAP",taiKhoan:t.data.taiKhoan}),e.history.push("/home")})).catch((function(e){console.log(e.response.data)})),h("\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng!")}},c.a.createElement("p",{className:"text-danger"}," ",s," "),c.a.createElement("h3",{className:"display-4"}," \u0110\u0103ng nh\u1eadp "),c.a.createElement("div",{className:"form-group"},c.a.createElement("span",null," T\xe0i kho\u1ea3n "),c.a.createElement("input",{type:"text",name:"taiKhoan",className:"form-control",onChange:u})),c.a.createElement("div",{className:"form-group"},c.a.createElement("span",null," M\u1eadt kh\u1ea9u "),c.a.createElement("input",{type:"password",name:"matKhau",className:"form-control",onChange:u})),c.a.createElement("div",{className:"form-group"},c.a.createElement("button",{className:"btn btn-success"}," \u0110\u0103ng nh\u1eadp ")))},P=t(38);function k(e){var a,t,l=Object(n.useState)({}),r=Object(v.a)(l,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){N.layThongTinPhim(e.match.params.maPhim).then((function(e){i(e.data)}))}),[]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4"},c.a.createElement("img",{src:o.hinhAnh,alt:o.maPhim})),c.a.createElement("div",{className:"col-8"},c.a.createElement("table",{className:"table"},c.a.createElement("tr",null,c.a.createElement("th",null,"T\xean phim: "),c.a.createElement("th",null,o.tenPhim)),c.a.createElement("tr",null,c.a.createElement("th",null,"M\xf4 t\u1ea3: "),c.a.createElement("th",null,o.moTa))))),c.a.createElement("h3",null,"Th\xf4ng tin l\u1ecbch chi\u1ebfu"),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4"},c.a.createElement("div",{className:"nav flex-column nav-pills",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},null===(a=o.heThongRapChieu)||void 0===a?void 0:a.map((function(e,a){return c.a.createElement("a",{key:a,className:"nav-link",id:"v-pills-home-tab","data-toggle":"pill",href:"#".concat(e.maHeThongRap),role:"tab","aria-controls":"v-pills-home","aria-selected":"true"},c.a.createElement("img",{style:{width:"30px",height:"30px",marginRight:"5px"},src:e.logo,alt:e.maHeThongRap}),e.tenHeThongRap)})))),c.a.createElement("div",{className:"col-8"},c.a.createElement("div",{className:"tab-content",id:"v-pills-tabContent"},null===(t=o.heThongRapChieu)||void 0===t?void 0:t.map((function(e,a){var t;return c.a.createElement("div",{className:"tab-pane fade show",id:e.maHeThongRap,role:"tabpanel","aria-labelledby":"v-pills-home-tab"},null===(t=e.cumRapChieu)||void 0===t?void 0:t.map((function(e,a){var t;return c.a.createElement("div",{key:e.maCumRap},c.a.createElement("h3",null,e.tenCumRap),c.a.createElement("div",{className:"row"},null===(t=e.lichChieuPhim)||void 0===t?void 0:t.slice(0,12).map((function(e,a){return c.a.createElement(h.b,{className:"col-4",key:e.maLichChieu,to:"/showTime/".concat(e.maLichChieu)},P(e.ngayChieuGioChieu).format("DD/MM/YY hh:mm A"))}))))})))}))))))}P().format();var S=t(27),D=t(38);function K(e){var a=Object(n.useState)({}),t=Object(v.a)(a,2),l=t[0],r=t[1],o=Object(n.useState)([]),i=Object(v.a)(o,2),m=i[0],s=i[1];Object(n.useEffect)((function(){var a=e.match.params.maLichChieu;N.layThongTinPhongVe(a).then((function(e){console.log(e.data),r(e.data)})).catch((function(e){console.log(e)}))}),[]);var h=function(e,a){if(e)return c.a.createElement("button",{className:"ghe gheDaDat",disabled:!0},"X");var t="";-1!==m.findIndex((function(e){return e.stt==a.stt}))&&(t="gheDangDat");var n="";return"Vip"===a.loaiGhe&&(n="gheVIP"),c.a.createElement("button",{onClick:function(){!function(e){var a=m.findIndex((function(a){return a.stt===e.stt}));-1!=a?m.splice(a,1):m=[].concat(Object(S.a)(m),[e]),s(Object(S.a)(m))}(a)},className:"ghe ".concat(t," ").concat(n)},a.stt)},d=function(){var a={maLichChieu:e.match.params.maLichChieu,danhSachVe:m,taiKhoanNguoiDung:JSON.parse(localStorage.getItem("userLogin")).taiKhoan};j.datVe(a).then((function(e){window.location.reload(),console.log(e.data)})).catch((function(e){console.log(e)}))},g=function(){return c.a.createElement("div",null,m.map((function(e,a){return c.a.createElement("span",{key:a},"Gh\xea\u0301: ",e.tenGhe)})),"-",m.reduce((function(e,a,t){return e+a.giaVe}),0).toLocaleString())};return localStorage.getItem("userLogin")?c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-7 text-center"},c.a.createElement("div",{className:"trapezoid "}),function(){var e=l.danhSachGhe;return null===e||void 0===e?void 0:e.map((function(e,a){return c.a.createElement(n.Fragment,{key:a},h(e.daDat,e)," ",(a+1)%16===0?c.a.createElement("br",null):"")}))}()),c.a.createElement("div",{className:"col-5"},function(){var e,a,t,n,r,o,i,m;return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"text-danger"},null===(e=l.thongTinPhim)||void 0===e?void 0:e.tenPhim),c.a.createElement("img",{src:null===(a=l.thongTinPhim)||void 0===a?void 0:a.hinhAnh,alt:null===(t=l.thongTinPhim)||void 0===t?void 0:t.maLichChieu}),c.a.createElement("h3",null,null===(n=l.thongTinPhim)||void 0===n?void 0:n.tenCumRap," -",null===(r=l.thongTinPhim)||void 0===r?void 0:r.tenRap),c.a.createElement("p",null,null===(o=l.thongTinPhim)||void 0===o?void 0:o.diaChi),c.a.createElement("h4",null,"Gi\u01a1\u0300 chi\xea\u0301u:",D(null===(i=l.thongTinPhim)||void 0===i?void 0:i.gioChieu,"hh:mm").format("LT")),c.a.createElement("h4",null,"Gi\u01a1\u0300 chi\xea\u0301u: ",null===(m=l.thongTinPhim)||void 0===m?void 0:m.gioChieu),c.a.createElement("div",null,g(),c.a.createElement("button",{onClick:function(){d()},className:"w-100 btn btn-success"},"\u0110\u0103\u0323t ve\u0301")))}()))):(alert("\u0110\u0103ng nh\xe2\u0323p \u0111\xea\u0309 \u0111\u0103\u0323t ve\u0301"),c.a.createElement(u.a,{to:"/login"}))}D().format();var w=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(h.a,null,c.a.createElement(n.Fragment,null,c.a.createElement(u.d,null,c.a.createElement(p,{exact:!0,path:"/",Component:y}),c.a.createElement(p,{exact:!0,path:"/home",Component:y}),c.a.createElement(p,{exact:!0,path:"/register",Component:T}),c.a.createElement(p,{exact:!0,path:"/login",Component:x}),c.a.createElement(p,{exact:!0,path:"/movieDetail/:maPhim",Component:k}),c.a.createElement(p,{exact:!0,path:"/showTime/:maLichChieu",Component:K})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=t(11),I="";localStorage.getItem("userLogin")&&(I=JSON.parse(localStorage.getItem("userLogin")).taiKhoan);var R={taiKhoan:I},G=Object(L.c)({quanLyNguoiDungReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"DANG_NHAP":return e.taiKhoan=a.taiKhoan,Object(C.a)({},e);case"DANG_KY":default:return Object(C.a)({},e)}}}),V=t(40),A=Object(L.d)(G,Object(L.a)(V.a));r.a.render(c.a.createElement(d.a,{store:A},c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.f9bc1428.chunk.js.map