//1- In ra phần tử âm của mảng

function negative(array) {
  let ok = [];
  let m;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      m = array[i];
      ok.push(m);
    }
  }
  console.log(ok);
}
negative([2, 1, -9, -4, -6, -2, 3]);

//2 - Tách 1 mảng thành 2 mảng chẵn và lẻ
function Parity(array1) {
  let ketQua = {
    mangChan: [],
    mangLe: []
  };
  array1.forEach(function (item, index) {
    if (item % 2 == 0) ketQua.mangChan.push(item);
    else ketQua.mangLe.push(item);
  });
  return ketQua;
}
console.log(Parity([1, 2, 3, 4, 5]));

// 3 Chèn X vào vị trí đầu của mảng 1 chiều
let mang = [2, 3, 4];
let a = mang.unshift(1);
console.log(mang);

// 4 In ra các phần tử chẵn và nhỏ hơn 20
function layMangChan(bring) {
  let ketQua1 = [];
  bring.forEach(function (item, index) {
    if (item % 2 == 0 && item < 20) ketQua1.push(item);
  });
  return ketQua1;
}
console.log(layMangChan([1, 2, 3, 4, 5, 21, 22]));

//5 Tìm vị trí phần tử có giá trị x xuất hiện cuối cùng trong mảng

//6- Tìm vị trí của phần tử nhỏ nhất trong mảng 1 chiều
function mang6(array6) {
  let min = array6[0];
  for (let i = 0; i < array6.length; i++) {
    if (min > array6[i]) {
      min = array6[i];
    }
  }
  let vitri = array6.indexOf(min);
  return vitri;
}
console.log(mang6([2, 3, 9, 7, 6, 8, 1, 1, 2, 9]));

//7- Tính tổng các phần tử ở vị trí chẵn trong mảng 1 chiều
function mang1(array3) {
  let tong = 0;
  array3.forEach(function (item, index) {
    if (index % 2 == 0) {
      tong += item;
    }
  });
  return tong;
}
console.log(mang1([1, 2, 3, 4, 6, 7, 8, 9, 21]));
//8 - Sắp xếp mảng theo thứ tự giảm dần
//9- Sắp xếp các phần tử chẵn giảm dần
//10 Xóa phần tử tại vị trí lẻ trong mảng
function mang10(array10) {
  let y = [];
  let x;
  for (let i = 0; i < array10.length; i++) {
    if (i % 2 == 0) {
      y.push(array10[i]);
    }
  }
  return y;
}
console.log(mang10([9, 8, 7, 6, 5, 4, 3, 2, 1]));

///////11 Xóa phần tử có giá trị lớn nhất trong mảng
function max(array8) {
  let x8 = array8[0];
  for (let i = 1; i < array8.length; i++) {
    if (x8 < array8[i]) {
      x8 = array8[i];
    }
  }
  let y8 = array8.indexOf(x8);
  array8.splice(location, 1);

  return array8;
}

console.log(max([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//12  Xóa tất cả các phần tử nhỏ hơn X
function mang12(array12) {
  let y12 = [];
  let x12 = 6;
  let c12;
  for (let i = 0; i < array12.length; i++) {
    if (array12[i] > x12) {
      c12 = array12[i];
      y12.push(c12);
    }
  }
  return y12;
}
console.log(mang12([4, 5, 7, 8]));

//13 Nối 2 mảng số nguyên (Tự search google có câu lệnh)
let array13_1 = [1, 2, 3, 4, 5];
let array13_2 = [5, 4, 3, 2, 1];
function mang13(array13_1, array13_2) {
  return array13_1.concat(array13_2);
}
console.log("" + array13_1.concat(array13_2));

//14 Xóa các phần tử trùng với X trong mảng 1 chiều
function mang14(array14) {
  let y14 = [];
  let x14 = 4;
  let c14;
  for (let i = 0; i < array14.length; i++) {
    if (x14 == array14[i]) {
      array14[i] = c14;
      {
        array14.splice(i, 1);
      }
    }
  }
  y14 = array14;
  return y14;
}
console.log(mang14([1, 3, 6, 4, 5, 2, 3, 4]));
//15 Tìm phần tử xuất hiện nhiều nhất trong mảng số nguyên
function mang15(array15) {
  let x15;
  let cong;
  let max = 0;
  for (let i = 0; i < array15.length; i++) {
    if (array15[i] == array15[i + 1]) {
      cong++;
      if (cong > max) {
        max = cong;
        array15[i] = x15;
      }
    }
  }
  console.log(x15);
}
console.log(mang12([1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3]));
