// tinh diem thi 
var btnTinhDiem = document.getElementById('btnTinhDiem')
btnTinhDiem.onclick = function(){
    var diemChuan = document.getElementById('diemChuan').value*1;
    var diemMon1 = document.getElementById('diemMon1').value*1;
    var diemMon2 = document.getElementById('diemMon2').value*1;
    var diemMon3 = document.getElementById('diemMon3').value*1;
    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = document.getElementById('doiTuong').value;
    if(khuVuc == 'A'){
        khuVuc = 2;
    }else if(khuVuc == 'B'){
        khuVuc = 1;
    }else if(khuVuc == 'C'){
        khuVuc = 0.5;
    }else if(khuVuc == 'X'){
        khuVuc = 0;
    }
    if(doiTuong == 1){
        doiTuong = 2.5;
    }else if(doiTuong == 2){
        doiTuong = 1.5;
    }else if(doiTuong == 3){
        doiTuong = 1;
    }else if(doiTuong == 0){
        doiTuong = 0;
    }   
    var diemTongKet = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
    if(diemChuan<=diemTongKet){
        document.getElementById('pResultD').innerHTML = diemTongKet + ` BAN DA DAU`;
    }else if( diemChuan> diemTongKet){
        document.getElementById('pResultD').innerHTML = diemTongKet + ` BAN DA ROT`;
    }
};
// tinh tien dien 
document.getElementById('btnTienDien').onclick = function(){
    var soKw = document.getElementById('soKw').value*1;
    if(0<=soKw && soKw<=50){
        soKw = soKw*500;
        document.getElementById('pResultTD').innerHTML = soKw + ` VND`;
    }else if(50<soKw && soKw<=100){
        soKw = soKw*650;
        document.getElementById('pResultTD').innerHTML = soKw + ` VND`;
    }else if(100<soKw && soKw<=150){
        soKw = soKw*850;
        document.getElementById('pResultTD').innerHTML = soKw + ` VND`;
    }else if(150<soKw){
        soKw = soKw*1100;
        document.getElementById('pResultTD').innerHTML = soKw + ` VND`;
    }else{
        soKw = soKw*1300;
        document.getElementById('pResultTD').innerHTML = soKw + ` VND`;
    }
};

