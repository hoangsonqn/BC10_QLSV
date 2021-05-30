//Lớp đối tượng SinhVien

function SinhVien(_maSV,_tenSV,_email,_matKhau,_ngaySinh,_khoaHoc,_diemToan,_diemLy,_diemHoa){

    // hàm khởi tạo: tạo ra giá trị ban đầu cho tất cả giá trị bên trong
    // key = value 
 this.maSV = _maSV; 
 this.tenSV = _tenSV;
 this.email = _email;
 this.matKhau=_matKhau;
 this.ngaySinh=_ngaySinh;
 this.khoaHoc=_khoaHoc;
 this.diemToan=_diemToan;
 this.diemLy=_diemLy;
 this.diemHoa=_diemHoa;
 this.diemTB = 0;
 this.tinhDTB= function(){
     this.diemTB= (this.diemToan+this.diemLy+this.diemHoa)/3;
 }
}