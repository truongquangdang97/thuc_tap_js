//1 - Truyền vào một mảng số: Tính số phần tử trong mảng, chèn 2 số: vào vị
// trí cuối cùng, chèn 2 số vào vị trí đầu tiên, xóa phần tử ở vị trí thứ 2, 3

// function mang1(array1){
//     console.log(array1.length);
//     array1.push(8,9);
//     array1.unshift(10,11);
//     array1.splice(2,2);
//
//     return array1;
// }
// console.log(mang1([1,2,3,4,5,6,7]));

//2- Viết hàm tính tổng các giá trị âm trong mảng 1 chiều các số thực
//         function mang2(array2){
//             let sum =0;
//             array2.forEach(function (item,index){
//                 if (item<0){
//                     sum+=item
//                 }
//             })
//             return sum;
//         }
//         console.log(mang2([1,-2,-1,-7,4]))

//3 Hãy liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn [x, y] truyền vào
// Ví dụ [1,2,4,5,5], mảng truyền vào [1,3,5] => kết quả [1,5]
//
//     function mang3(array3,array4){
//
//             let x=[];
//             for (let i=0;i< array3.length;i++){
//                 for (let j=0;j<array4.length;j++){
//                     if (array4[j]!=array3[i]){
//                       x.push(array4[j])
//
//                     }
//                 }
//             }
//             return x ;
//     }
//     console.log(mang3([1,2,3,4,5,6,7],[1,2,3,9]))
//
// function mang3(array3,array4){
//
//     let x=[];
//     array4.forEach(item4,index4)
//     array3.forEach(item3,index3)
//     if (item4!=item3){
//         x.push(item4);
//     }
//     return x ;
// }
// console.log(mang3([1,2,3,4,5,6,7],[1,2,3,9]))
