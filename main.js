function getEle(id) {
  return document.getElementById(id);
}

/**getEle("btnAdd").onclick = function(){
    
} */

//tạo đối tượng Danh sách sinh viên từ lớp đối tượng
var dssv = new DanhSachSinhVien();
dssv.list;

var validation = new Validation();
/**call back funtion: tham số của 1 hàm
là 1 hàm khác
*/

function addUser(){
  console.log("ham cua son2")
}

//lấy data từ localstorage để in ra màn hình ngay lúc load trang
getLocalStorage();

function layDuLieuDauVao(isAdd) {
  var _maSV = getEle("txtMaSV").value;
  var _tenSV = getEle("txtTenSV").value;
  var _email = getEle("txtEmail").value;
  var _matKhau = getEle("txtPass").value;
  var _ngaySinh = getEle("txtNgaySinh").value;
  var _khoaHoc = getEle("khSV").value;
  var _diemToan = +getEle("txtDiemToan").value;
  var _diemLy = +getEle("txtDiemLy").value;
  var _diemHoa = +getEle("txtDiemHoa").value;

  //check dữ liệu đầu vào
  var isValid = true;

  if (isAdd){
  isValid &=
    validation.kiemTraRong(
      _maSV,
      "divMaErr",
      "(*)Mã học viên không được để trống"
    ) &&
    validation.kiemTraDoDaiKyTu(
      _maSV,
      "divMaErr",
      "Độ dài mã sinh viên trong khoảng 4-10",
      4,
      10
    ) &&
    validation.kiemTraTrungMaSV(
      _maSV,
      "divMaErr",
      "Mã sinh viên đã tồn tại",
      dssv.list
    );
  }
  isValid &=
    validation.kiemTraRong(
      _tenSV,
      "divTenErr",
      "(*)Tên học viên không được để trống"
    ) &&
    validation.kiemTraKyTuChu(
      _tenSV,
      "divTenErr",
      "(*)Tên sinh viên phải là chữ"
    );
  isValid &=
    validation.kiemTraRong(
      _email,
      "divEmailErr",
      "(*)Email không được để trống"
    ) &&
    validation.kiemTraEmail(
      _email,
      "divEmailErr",
      "(*)Email không đúng định dạng"
    );
  isValid &=
    validation.kiemTraRong(
      _matKhau,
      "divMatKhauErr",
      "(*)Mật khẩu không được để trống"
    ) &&
    validation.kiemTraMatKhau(
      _matKhau,
      "divMatKhauErr",
      "(*)Mật khẩu phải có đủ chữ hoa, chữ thường, số và kí hiệu đặc biệt"
    );
  isValid &=
    validation.kiemTraRong(
      _ngaySinh,
      "divNgaySinhErr",
      "(*)Ngày sinh không được để trống"
    ) &&
    validation.kiemTraNgaySinh(
      _ngaySinh,
      "divNgaySinhErr",
      "(*)Ngày sinh không đúng định dạng"
    );

  isValid &= validation.kiemTraKhoaHoc(
    "khSV",
    "divKHErr",
    "(*)Vui lòng chọn khóa học"
  );
  if (isValid) {
    var sinhVien = new SinhVien(
      _maSV,
      _tenSV,
      _email,
      _matKhau,
      _ngaySinh,
      _khoaHoc,
      _diemToan,
      _diemLy,
      _diemHoa
    );
    return sinhVien;
  }
  return null;
}

//Thêm sinh viên
getEle("btnAdd").addEventListener("click", function (event) {
//chặn trang web bị load lại khi sumit fomr
event.preventDefault();

  sinhVien = layDuLieuDauVao(true);
  if (sinhVien) {
    sinhVien.tinhDTB();
    dssv.themSV(sinhVien);
    taoBang(dssv.list);
    setLocalStorage();
  }
});

function taoBang(arr) {
  // reset tbody
  getEle("tbodySinhVien").innerHTML = "";

  for (var i = 0; i < arr.length; i++) {
    //tạo dòng
    var tagTR = document.createElement("tr");

    //tạo cột
    var tagTD_MaSV = document.createElement("td");
    var tagTD_TenSV = document.createElement("td");
    var tagTD_Email = document.createElement("td");
    var tagTD_NgaySinh = document.createElement("td");
    var tagTD_KhoaHoc = document.createElement("td");
    var tagTD_DTB = document.createElement("td");
    var tagTD_Delete = document.createElement("td");
    var tagTD_Edit = document.createElement("td");

    //Tạo nội dung cho 6 cột
    tagTD_MaSV.innerHTML = arr[i].maSV;
    tagTD_TenSV.innerHTML = arr[i].tenSV;
    tagTD_Email.innerHTML = arr[i].email;
    tagTD_NgaySinh.innerHTML = arr[i].ngaySinh;
    tagTD_KhoaHoc.innerHTML = arr[i].khoaHoc;
    // arr[i].tinhDTB();
    tagTD_DTB.innerHTML = arr[i].diemTB;
    tagTD_Edit.innerHTML =
      '<buton id="btn-delete" class="btn btn-info" onclick="suaSinhVien(\'' +
      arr[i].maSV +
      "')\">Sửa</buton>";
    tagTD_Delete.innerHTML =
      '<buton id="btn-delete" class="btn btn-danger" onclick="xoaSinhVien(\'' +
      arr[i].maSV +
      "')\">Xóa</buton>";

    //Gắn cột vào hàng
    tagTR.appendChild(tagTD_TenSV);
    tagTR.appendChild(tagTD_MaSV);
    tagTR.appendChild(tagTD_Email);
    tagTR.appendChild(tagTD_NgaySinh);
    tagTR.appendChild(tagTD_KhoaHoc);
    tagTR.appendChild(tagTD_DTB);
    tagTR.appendChild(tagTD_Edit);
    tagTR.appendChild(tagTD_Delete);

    //Gắn hàng vào bảng
    getEle("tbodySinhVien").appendChild(tagTR);
  }
}

//Sửa sinh viên

function suaSinhVien(maSV) {
  var sinhVien = dssv.layThongtinSV(maSV);

  getEle("btnAdd").style.display = "none";
  getEle("btnUpdate").style.display = "inline-block";

  //Đẩy thông tin ra UI
  getEle("txtMaSV").value = sinhVien.maSV;
  getEle("txtMaSV").disabled = true;
  getEle("txtTenSV").value = sinhVien.tenSV;
  getEle("txtEmail").value = sinhVien.email;
  getEle("txtPass").value = sinhVien.matKhau;
  getEle("txtNgaySinh").value = sinhVien.ngaySinh;
  getEle("khSV").value = sinhVien.khoaHoc;
  getEle("txtDiemToan").value = sinhVien.diemToan;
  getEle("txtDiemLy").value = sinhVien.diemLy;
  getEle("txtDiemHoa").value = sinhVien.diemHoa;
}

//Cập nhật sinh viên

getEle("btnUpdate").addEventListener("click", function () {
  var sinhVien=layDuLieuDauVao(false);
  sinhVien.tinhDTB();
  dssv.capNhatSV(sinhVien);
  taoBang(dssv.list);
  setLocalStorage();

});

//xóa sinh viên

function xoaSinhVien(maSV) {
  dssv._xoaSV(maSV);
  taoBang(dssv.list);
  setLocalStorage();
}

//Reset form
getEle("btnReset").addEventListener("click", function () {
  
  getEle("formSV").reset();
  getEle("txtMaSV").disabled = false;
  getEle("btnAdd").style.display = "inline-block";
  getEle("btnUpdate").style.display = "none";

});

//Tìm kiếm sinh viên

getEle("txtSearch").addEventListener("keyup",function()  {
  var keyWord= getEle("txtSearch").value;
  var mangTimKiem=dssv.timKiemSV(keyWord);
  taoBang(mangTimKiem);
});


// Lưu data vào local storage để ko bị mất khi f5
function setLocalStorage() {
  //chuyển kiểu dữ liệu JSON sang String để lưu tại local
  var arrString = JSON.stringify(dssv.list);

  //local chỉ lưu data ở dạng string
  localStorage.setItem("dssv", arrString);
}

//lấy data từ local Storage để sử dung

function getLocalStorage() {
  // chuyển string về lại json
  if (localStorage.getItem("dssv")) {
    dssv.list = JSON.parse(localStorage.getItem("dssv"));
    taoBang(dssv.list);
  }
}
