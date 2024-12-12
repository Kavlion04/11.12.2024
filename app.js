//array 

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let sum = 0;
// let array2 = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 1) {
//         sum++;
//         array2.push(array[i]);  
//     }

    
// }

// console.log( array2);

// 1 masala peremetr va yuzini topish
// function Triangle(a) {
//     const perimeter = 3 * a;
//     const semiPerimeter = perimeter / 2;
//     const area = Math.sqrt(semiPerimeter * Math.pow((semiPerimeter - a), 3));
//     return { perimeter, area };
// }
// const a = parseFloat(prompt("Teng tomonli uchburchakning tomon uzunligini kiriting:"));
// if (!isNaN(a) && a > 0) { 
//     const result = Triangle(a);
//     alert(`Teng tomonli uchburchakning perimetri: ${result.perimeter.toFixed(2)}  uchburchakning yuzi: ${result.area.toFixed(2)} `);
// } else {
//     alert("Iltimos, musbat son kiriting!");
// }



//2 masala uchta soni teskari ciqarish !
// function InvertDigit(num) {
//     let reversed = 0;
//     while (num > 0) {
//         let lastDigit = num % 10;
//         reversed = reversed * 10 + lastDigit;
//         num = Math.floor(num / 10);
//     }
//     return reversed;
// }
// const a = parseInt(prompt("Birinchi sonni kiriting:"));
// const b = parseInt(prompt("Ikkinchi sonni kiriting:"));
// const c = parseInt(prompt("Uchinchi sonni kiriting:"));
// if (a > 0 && b > 0 && c > 0) {
//     const reversedA = InvertDigit(a);
//     const reversedB = InvertDigit(b);
//     const reversedC = InvertDigit(c);

//     alert(`Son ${a} teskari: ${reversedA}`);
//     alert(`Son ${b} teskari: ${reversedB}`);
//     alert(`Son ${c} teskari: ${reversedC}`);
// } else {
//     alert("Iltimos, faqat musbat butun sonlarni kiriting!");
// }

//3 masala sekundni soat minut va sekundga o'tkazish
// function time() {
    
//     let a = parseFloat(prompt("sekund kiriting"));
//     let h = Math.floor(a / 3600);
//     let m = Math.floor((a - h * 3600) / 60);
//     let s = a - h * 3600 - m * 60;
//     console.log(h + " soat " + m + " minut " + s + " sekund ");
//     alert (` ${h} soat ${m} minut ${s} sekund `);
// }

// 4 masala

// function isPowerN(K, N) {
//     return Number.isInteger(Math.log(K) / Math.log(N));
//   }
//   function countPowerNumbers(numbers, N) {
//     return numbers.filter((num) => isPowerN(num, N)).length;
//   }
//   const numbers = [1, 8, 27, 16, 7]; 
//   const N = 3; 
//   console.log(`Nechtasi N ning darajasi: ${countPowerNumbers(numbers, N)}`);
  
// 5masala 
// function isEven(K) {
//     return K % 2 === 0;
//   }
//   function checkNumbers(numbers) {
//     return numbers.map((num) => ({
//       number: num,
//       isEven: isEven(num),
//     }));
//   }
//   const numbers = [4, 7, 10]; 
//   const result = checkNumbers(numbers);
//   result.forEach((res) => {
//     alert(`${res.number} soni ${res.isEven ? "juft" : "toq"}`);
//   });
  









