// 17 misol 

// function butunQoldiqTopish(n , m) { ////
//     let butunQism = 0;
//     while ( n >= m) {
//         n -= m;
//         butunQism++;
//     }
//     return {butunQism: butunQism, Qoldiq: n };
// }

// let natija = butunQoldiqTopish(17, 5)
// console.log("Butun qismi: " + natija.butunQism + ", Qoldiq: " + natija.Qoldiq);

// 18 misol

// function reverseDigits (n) {
//     let reversed = 0;

//     while (n > 0) {
//         let digit = n % 10;
//     reversed = reversed * 10 + digit;
//     n = Math.floor(n / 10)
//     }
//     return reversed;
// }
// let reversedNumber = reverseDigits(123456) // son kiriting bu yerga 
// console.log("teskari son: " + reversedNumber);

// 19 ---misol

// function sumAndCountDigits (n) {
//     let sum = 0;
//     let count = 0;

//     while (n > 0) {
//         sum += n % 10;
//         count++;
//         n = Math.floor(n / 10)
//     }
//     return { sum: sum, count: count};
// }

// let result = sumAndCountDigits(12345)
// console.log("Raqamlar yigindisi: " + result.sum + " , Raqamlar sonin: " + result.count);

// 20 --- misol 

// function hastwodigit(n) {
//     while ( n > 0 ) {
//         if (n % 10 == 2 ) {
//             return true;
//         }
//         n  = Math.floor(n / 10);
//     }
//     return false;
// }

// let hastwo = hastwodigit(54) 
// console.log("2 ta raqam mavjudmi? " + hastwo);

// 21 -- misol ---- toq raqam mavjudmi
// function toqRaqammavjudmi (n) {
//     while (n > 0 ) {
//         if ((n % 10) % 2 !== 0) {
//             return true;
//         }
//         n = Math.floor(n / 10);
//     }
//     return false;
//     }

//     let mavjud = toqRaqammavjudmi();
//     console.log("toq raqam mavjudmi ?" + mavjud);
    

// 22- misol  tub son aniqlovchi programa 

// function tubSon (n) {
//     if 
//     (n <= 1) 
//     return false;
//     let i = 2;
//     while (i * i <= n) {
//         if (n % i === 0) {
//             return false;
//         }
//         i++;
//     }
//     return true   
// }

// let tubmi = tubSon(4147)
// console.log("tubsonmi: " + tubmi);

