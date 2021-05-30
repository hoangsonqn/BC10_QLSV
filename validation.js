function Validation() {
  this.kiemTraRong = function (input, divID, mess) {
    if (input.trim() === "") {
      getEle(divID).innerHTML = mess;
      getEle(divID).className = "alert alert-danger";
      return false;
    } else {
      getEle(divID).className = "";
      getEle(divID).innerHTML = "";
      return true;
    }
  };

  this.kiemTraDoDaiKyTu = function (input, divID, mess, min, max) {
    if (input.length >= min && input.length <= max) {
      getEle(divID).innerHTML = "";
      getEle(divID).className = "";
      return true;
    }
    getEle(divID).innerHTML = mess;
    getEle(divID).className = "alert alert-danger";
    return false;
  };

  this.kiemTraKyTuChu = function (input, divID, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (input.match(letter)) {
      getEle(divID).className = "";
      getEle(divID).innerHTML = "";
      return true;
    }
    getEle(divID).innerHTML = mess;
    getEle(divID).className = "alert alert-danger";
    return false;
  };

  this.kiemTraEmail = function (input, divID, mess) {
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(letter)) {
      getEle(divID).className = "";
      getEle(divID).innerHTML = "";
      return true;
    }
    getEle(divID).innerHTML = mess;
    getEle(divID).className = "alert alert-danger";
    return false;
  };

  this.kiemTraMatKhau = function (input, divID, mess) {
    var letter =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (input.match(letter)) {
      getEle(divID).className = "";
      getEle(divID).innerHTML = "";
      return true;
    }
    getEle(divID).innerHTML = mess;
    getEle(divID).className = "alert alert-danger";
    return false;
  };

  this.kiemTraNgaySinh = function (input, divID, mess) {
    var letter = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if (input.match(letter)) {
      getEle(divID).className = "";
      getEle(divID).innerHTML = "";
      return true;
    }
    getEle(divID).innerHTML = mess;
    getEle(divID).className = "alert alert-danger";
    return false;
  };

  this.kiemTraKhoaHoc = function (idSelect, divID, mess) {
    if (getEle(idSelect).selectedIndex != 0) {
      getEle(divID).className = "";
      getEle(divID).innerHTML = "";
      return true;
    }
    getEle(divID).innerHTML = mess;
    getEle(divID).className = "alert alert-danger";
    return false;
  };

  this.kiemTraTrungMaSV = function (input, divID, mess, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].maSV === input) {
        var status = false;
        break;
      }
    }
    if (status === false) {
      getEle(divID).innerHTML = mess;
      getEle(divID).className = "alert alert-danger";
      return false;
    }
    getEle(divID).className = "";
    getEle(divID).innerHTML = "";
    return true;
  };
}
