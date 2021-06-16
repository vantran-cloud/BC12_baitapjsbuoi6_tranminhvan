//Bài 1: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + ... + n > 10000
/**
 * phân tích:
 * input: tổng các số nguyên từ 1 đến n > 10000
 * handle: khai báo biến số nguyên dương, tổng các số nguyên dương, sử dụng vòng lập để tìm số nguyên dương nhỏ nhất, mỗi lần check thực hiện bước nhảy cho n +> n++
 * output: tìm ra số nguyên dương nhỏ nhất
 */

var n = 1;
var sum = 0;

var btnTinhRa = document.getElementById('btnTinhRa');
btnTinhRa.onclick = function() {

    while(sum < 10000) {
        sum = sum + n;
        n++;
    }
    alert('Số nguyên dương nhỏ nhất là : ' + n)

}


// Bài 2:Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2
//     + x^3 + ... + x^n

/**
 * phân tích:
 * input: nhập vào số x, số n, tổng s(n);
 * handle: khai báo biến x, biến n, biến tổng, biến lũy thừa, sử dụng vòng lập for
 * output: tính ra tổng S(n)
 */

var luyThua = 0;
var tong = 0;
var btnTinhTong = document.getElementById('btnTinhTong');
btnTinhTong.onclick = function() {
    var soX = document.getElementById('nhapSoX').value;
    var soN = document.getElementById('nhapSoN').value;

    for(var i = 1; i <= soN; i++) {
        luyThua = Math.pow(soX, i);
        tong = tong + luyThua;  
    }

    alert('Tổng S(n) là : ' + tong);
}


//Bài 3:Nhập vào n. Tính giai thừa 1*2*...n
/**
 * phân tích:
 * input: nhập vào số n
 * handle: khai báo biến n, biến giai thừa, sử dụng vòng lập for
 * output: tính ra giai thừa 
 */

var giaiThua = 1;
var btnKetQua = document.getElementById('btnKetQua');
btnKetQua.onclick = function() {
    var nhapVaoN = document.getElementById('nhapN').value;

    for(var i = 1; i <= nhapVaoN; i++)  {
        giaiThua = giaiThua * i;
    }

    alert('Giai thừa của n là: ' + giaiThua);
}



//Bài 4:Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.
// Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh.


/**
 * phân tích
 * input: nhập 10 thẻ div
 * handle:khai báo biến tạo div, sử dụng vòng lập for
 * output:xuất ra div nào chẵn background đỏ, div lẻ background xanh
 */

var btnTaoDiv = document.getElementById('btnTaoDiv');
btnTaoDiv.onclick = function() {
    var theDiv = document.getElementsByTagName('div');
   
    for(var i = 0; i < theDiv.length; i++) {
       
        if((i + 1) % 2 == 0) {
            theDiv[i].style.background = 'red';
            theDiv[i].innerHTML = 'Div ' + (i +  1) + ' là chẵn';
            theDiv[i].style.width = '50%';
            theDiv[i].style.color = 'white';
        }else{
            theDiv[i].style.background = 'blue';
            theDiv[i].style.width = '50%';
            theDiv[i].innerHTML = 'Div ' + (i +  1) + ' là lẻ';
            theDiv[i].style.color = 'white';
        };
    };
   
} 