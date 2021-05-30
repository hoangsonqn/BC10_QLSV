function DanhSachSinhVien() {
  this.list = [];

  //thêm sinh viên là 1 phương thức của lớp đối tượng
  this.themSV = function (SV) {
    this.list.push(SV);
  };

  // tìm vị trí
  this.timSV = function (maSV) {
    var index = -1;
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].maSV == maSV) {
        index = i;
        break;
      }
    }
    return index;
  };

  this._xoaSV = function (maSV) {
    var index = this.timSV(maSV);
    if (index != -1) {
      this.list.splice(index, 1);
    }
  };

  this.layThongtinSV = function (maSV) {
    var index = this.timSV(maSV);
    if (index != -1) {
      return this.list[index];
    }
  };
  this.capNhatSV = function (sinhVien) {
    var index = this.timSV(sinhVien.maSV);
    if (index!=-1){
        return this.list[index]=sinhVien
    }
      
  }

//   this.timKiemSV = function  () {
      
//   }
}


//Cách viết function ngoài lớp đối tượng

DanhSachSinhVien.prototype.timKiemSV = function (keyword) {
    //Tạo ra mảng tìm kiếm 
    //Duyệt mảng dssv.list
    //Nếu keyword trùng với sinhVien.tenSV
    // Thêm vào mảng tìm kiếm
    // Return về mảng tìm kiếm

    var mangTimKiem=[];
    for (var i=0; i<this.list.length;i++ ){
     if (this.list[i].tenSV.toLowerCase().indexOf(keyword.toLowerCase()) !==-1){
         mangTimKiem.push(this.list[i])
     }
    }
     return mangTimKiem;
}