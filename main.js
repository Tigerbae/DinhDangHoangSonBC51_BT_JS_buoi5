// tinh diem thi
var btnTinhDiem = document.getElementById("btnTinhDiem");
btnTinhDiem.onclick = function () {
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var diemMon1 = document.getElementById("diemMon1").value * 1;
  var diemMon2 = document.getElementById("diemMon2").value * 1;
  var diemMon3 = document.getElementById("diemMon3").value * 1;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value;
  if (khuVuc == "A") {
    khuVuc = 2;
  } else if (khuVuc == "B") {
    khuVuc = 1;
  } else if (khuVuc == "C") {
    khuVuc = 0.5;
  } else if (khuVuc == "X") {
    khuVuc = 0;
  }
  if (doiTuong == 1) {
    doiTuong = 2.5;
  } else if (doiTuong == 2) {
    doiTuong = 1.5;
  } else if (doiTuong == 3) {
    doiTuong = 1;
  } else if (doiTuong == 0) {
    doiTuong = 0;
  }
  var diemTongKet = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
  if (diemChuan <= diemTongKet) {
    document.getElementById("pResultD").innerHTML = diemTongKet + ` BAN DA DAU`;
  } else if (diemChuan > diemTongKet) {
    document.getElementById("pResultD").innerHTML = diemTongKet + ` BAN DA ROT`;
  }
};
// tinh tien dien
document.getElementById("btnTienDien").onclick = function () {
  var soKw = document.getElementById("soKw").value * 1;
  if (0 <= soKw && soKw <= 50) {
    soKw = soKw * 500;
  } else if (50 < soKw && soKw <= 100) {
    soKw = soKw * 650;
  } else if (100 < soKw && soKw <= 200) {
    soKw = soKw * 850;
  } else if (200 < soKw && soKw <= 350) {
    soKw = soKw * 1100;
  } else {
    soKw = soKw * 1300;
  }
  document.getElementById("pResultTD").innerHTML = soKw + ` VND`;
};
// tinh thue thu nhap ca nhan
document.getElementById("btnTinhThue").onclick = function () {
  var hoTen = document.getElementById("hoTen").value;
  var tongTTN = document.getElementById("tongTTN").value * 1;
  var soNPT = document.getElementById("soNPT").value * 1;
  document.getElementById("pHoTen").innerHTML = hoTen;
  var thuNCT = tongTTN - 4 - soNPT * 1.6;
  if (thuNCT <= 60) {
    thuNCT = (thuNCT * 5) / 100;
  } else if (60 < thuNCT && thuNCT <= 120) {
    thuNCT = (thuNCT * 10) / 100;
  } else if (120 < thuNCT && thuNCT <= 210) {
    thuNCT = (thuNCT * 15) / 100;
  } else if (210 < thuNCT && thuNCT <= 384) {
    thuNCT = (thuNCT * 20) / 100;
  } else if (384 < thuNCT && thuNCT <= 624) {
    thuNCT = (thuNCT * 25) / 100;
  } else if (624 < thuNCT && thuNCT <= 960) {
    thuNCT = (thuNCT * 30) / 100;
  } else if (960 < thuNCT) {
    thuNCT = (thuNCT * 35) / 100;
  }
  document.getElementById("pResultT").innerHTML = thuNCT + ` Trieu Dong`;
};
//tinh tien cap
function getEle(id) {
  return document.getElementById(id);
}

function tinhTienDien() {}
function chonLoaiKhachHang() {
  var loaiKhachHang = getEle("loaiKhachHang").value;
  if (loaiKhachHang === "Doanh Nghiep") {
    getEle("soKetNoi").style.display = "block";
    getEle("soKetNoiLabel").style.display = "block";
    getEle("btnTinhPhi").onclick = function () {
      var maKhachHang = getEle("maKhachHang").value;
      var soKetNoi = getEle("soKetNoi").value * 1;
      var soKenhCC = getEle("soKenhCC").value * 1;
      var phiXLHD = 15;
      if (soKetNoi <= 10) {
        var phiDVCB = soKetNoi * 75;
        var ThueKCC = soKenhCC * 50;
        var tongHDDN = phiDVCB + ThueKCC + phiXLHD;
      } else if (soKetNoi > 10) {
        var phiDVCB = 75 * 10 + (soKetNoi - 10) * 5;
        var ThueKCC = soKenhCC * 50;
        var tongHDDN = phiDVCB + ThueKCC + phiXLHD;
      }
      getEle("pMKH").innerHTML = maKhachHang;
      getEle("pResultPC").innerHTML = tongHDDN;
    };
  } else if (loaiKhachHang === "Nha Dan") {
    getEle("soKetNoi").style.display = "none";
    getEle("soKetNoiLabel").style.display = "none";
    getEle("btnTinhPhi").onclick = function () {
      var maKhachHang = getEle("maKhachHang").value;
      var soKenhCC = getEle("soKenhCC").value * 1;
      var phiXLHD = 4.5;
      var phiDVCB = 20.5;
      var ThueKCC = soKenhCC * 7.5;
      var tongHDDN = phiDVCB + ThueKCC + phiXLHD;
      getEle("pMKH").innerHTML = maKhachHang;
      getEle("pResultPC").innerHTML = tongHDDN;
    };
  }
}
