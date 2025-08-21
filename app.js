 
 
 //    object masalalarin 

 

  // 1- masala 


//   const me = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
//   };
  
//   for (let key in me) {
//     if (Array.isArray(me[key])) {
//       if (key === "friends") {
//         console.log(key + ": " + me[key].join("+"));
//       } else {
//         console.log(key + ": " + me[key].join(","));
//       }
//     } else {
//       console.log(key + ": " + me[key]);
//     }
//   }
  




// 2 -masaala



// const n = 5;
// const obj = {};

// for (let i = 1; i <= n; i++) {
//   obj[i] = i * i;
// }

// console.log(obj);


// 3  - masala 


// const obj = {1: 1, 2: 4, 3: 9, 4: 16, 5: 25};


// let keys = Object.keys(obj).map(Number); // ["1","2",...] -> [1,2,...]
// let keysSum = keys.reduce((a, b) => a + b, 0);


// let valuesSum = Object.values(obj).reduce((a, b) => a + b, 0);

// console.log("Kalitlar yig'indisi:", keysSum);
// console.log("Qiymatlar yig'indisi:", valuesSum);




 // 4- masala  



//  const arr = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
// const obj = {};

// for (let i = 0; i < arr.length; i++) {
//   obj[arr[i]] = arr[i].length;
// }

// console.log(obj);




//   5 - masala




// const products = {
//     Apelsin: 10000,
//     Olma: 12000,
//     Mandarin: 8000,
//     Banan: 20000
//   };
  
//   const total = Object.values(products).reduce((sum, price) => sum + price, 0);
  
//   console.log(total);


// 6- masala 




// function defineObject(obj) {
//     return Object.keys(obj).every(key => isNaN(key));
//   }
  
  
//   console.log(defineObject({abc: 1, 123: 2, d: 5})); 
//   console.log(defineObject({abc: 1, d: 5}));        
  


// 7-masala



// const obj = { a: false, b: 12, c: true, d: 0 };
// const newObj = {};

// Object.keys(obj).forEach(key => {
//   if (obj[key]) {
//     newObj[key] = obj[key];
//   }
// });

// console.log(newObj);



// 7 - masala  



// const arr = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// const obj = {};

// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   if (obj[num]) {
//     obj[num]++; 
//   } else {
//     obj[num] = 1; 
//   }
// }

//console.log(obj);




// 8 -masala



// const num = "8945472985629"; 
// const groups = ["birlar", "minglar", "millionlar", "milliardlar", "trilionlar"];
// const obj = {};

// let i = 0;
// for (let end = num.length; end > 0; end -= 3) {
//   let start = Math.max(end - 3, 0);
//   let part = num.slice(start, end);
//   obj[groups[i]] = Number(part);
//   i++;

//console.log(obj);




// 9 -masala





// const num = "8945472985629"; 
// const groups = ["birlar", "minglar", "millionlar", "milliardlar", "trilionlar"];
// const obj = {};

// for (let i = 0, end = num.length; end > 0; i++, end -= 3) {
//   let start = Math.max(end - 3, 0);
//   let part = num.slice(start, end);
//   obj[groups[i]] = Number(part);
// }

// console.log(obj);

  


// 10-masala


// const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       alreadyRead: false,
//     },
//     {
//       title: "Dunyo ishlari",
//       author: "O'tkir Hoshimov",
//       alreadyRead: true,
//     },
//     {
//       title: "Vaqtning qadri",
//       author: "Abdulfattoh Abu G'udda",
//       alreadyRead: false,
//     },
//   ];
  
//   for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     const status = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
//     console.log(
//       `${i + 1}. ${book.author}ning "${book.title}" kitobi ${status};`
//     );
//   }


