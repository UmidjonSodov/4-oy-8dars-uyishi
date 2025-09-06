 

 

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
  
//   const sm = Object.values(products).reduce((sum, price) => sum + price, 0);
  
//   console.log(sm);


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



// 11-masala

// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// const sm = products.reduce((sum, product) => {
//     const discountedPrice =
//         product.price - (product.price * product.discount) / 100;
//     return sum + discountedPrice * product.quantity;
// }, 0);

// console.log("Umumiy summa:", sm);


// 12-masala

// const obj = {
//     it: 20,
//     mushuk: 10,
//     sigir: 200,
//     tovuq: 2,
// };

// const result = Object.entries(obj).flat();
// console.log(result);


// 13-masala

// const grades = [
//     { name: "Fizika", grade: 4, kredit: 6 },
//     { name: "Matematika", grade: 5, kredit: 6 },
//     { name: "Tarix", grade: 4, kredit: 4 },
//     { name: "Dasturlash", grade: 5, kredit: 8 },
//     { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// const sm = grades.reduce(
//     (acc, subject) => {
//         acc.soft += subject.grade * subject.kredit;
//         acc.smCredits += subject.kredit;
//         return acc;
//     },
//     { soft: 0, smCredits: 0 }
// );

// const GPA = sm.soft / sm.smCredits;

// console.log("GPA:", GPA.toFixed(2));


// 14-masala

// const rightAnswers = {
//     1: "B",
//     2: "A",
//     3: "C",
//     4: "D",
//     5: "B",
//     6: "C",
//     7: "A",
//     8: "D",
//     9: "A",
//     10: "B",
// };

// const myAnswers = {
//     1: "C",
//     2: "A",
//     3: "D",
//     4: "D",
//     5: "B",
//     6: "C",
//     7: "B",
//     8: "C",
//     9: "A",
//     10: "C",
// };

// let correct = 0;
// let wrong = 0;

// for (let key in rightAnswers) {
//     if (rightAnswers[key] === myAnswers[key]) {
//         correct++;
//     } else {
//         wrong++;
//     }
// }

// console.log("To‘g‘ri javoblar soni:", correct);
// console.log("Noto‘g‘ri javoblar soni:", wrong);


// 15-masala

// const obj = { a: 2, b: 3, c: 4, d: 6 };

// function getMultipleValues(n) {
//     const res = {};
//     for (let key in obj) {
//         res[key] = obj[key] * n;
//     }
//     return res;
// }

// let n = 3;
// const result = getMultipleValues(n);
// console.log(result);


// 16-masala

// const product = {
//   name: "Iphone 14",
//   company: {
//     name: "Apple",
//     price: "200 mlrd",
//     founder: {
//       firstName: "Steve",
//       lastName: "Jobs",
//       birthDate: 1950,
//     },
//   },
// };


// const {
//   name: productName,
//   company: {
//     name: companyName,
//     price: companyPrice,
//     founder: { firstName, lastName, birthDate }
//   }
// } = product;

// console.log(productName);   
// console.log(companyName);   
// console.log(companyPrice);  
// console.log(firstName);     
// console.log(lastName);      
// console.log(birthDate);     



// 17-masala


// const smt = [
//     { name: "Umidjon", protcent: 95 },
//     { name: "Ali", protcent: 78 },
//     { name: "Fayozbek", protcent: 88 },
//     { name: "Xumoyun", protcent: 60 },
// ];


// const smtech = smt.reduce((sum, p) => sum + p.protcent, 0) / smt.length;


// const updatedSmt = smt.map((sm) => ({
//     ...sm,
//     status: sm.protcent >= 70 ? "o‘tgan" : "yiqilgan",
// }));

  // console.log("O‘rtacha protcent:", smtech.toFixed(2));
  // console.log(updatedSmt);


  // 18-masala

  // const pupils = [
  //     { name: "Umidjon", protcent: 95 },
  //         { name: "Ali", protcent: 78 },
  //         { name: "Fayozbek", protcent: 88 },
  //         { name: "Xumoyun", protcent: 60 },
  // ];


  // const smtech = pupils.reduce((sum, p) => sum + p.protcent, 0) / pupils.length;


  // const updatedPupils = pupils.map((pupil) => {
  //     let grade;

  //     if (pupil.protcent >= 90) grade = 5;
  //     else if (pupil.protcent >= 80) grade = 4;
  //     else if (pupil.protcent >= 70) grade = 3;
  //     else grade = 2;

  //     return {
  //         ...pupil,
  //         status: pupil.protcent >= 70 ? "o‘tgan" : "yiqilgan",
  //         grade,
  //     };
  // });

  // console.log("O‘rtacha protcent:", smtech.toFixed(2));
  // console.log(updatedPupils);


  // 19-masala


  // const pupils = [
  //     { name: "Umidjon", protcent: 95 },
  //             { name: "Ali", protcent: 78 },
  //             { name: "Fayozbek", protcent: 88 },
  //             { name: "Xumoyun", protcent: 60 },
  // ];

 
  // const smtech =
  //     pupils.reduce((sum, p) => sum + p.protcent, 0) / pupils.length;


  // const updatedPupils = pupils.map((pupil) => {
  //     let grade;

  //     if (pupil.protcent >= 90) grade = 5;
  //     else if (pupil.protcent >= 80) grade = 4;
  //     else if (pupil.protcent >= 70) grade = 3;
  //     else grade = 2;

  //     return {
  //         ...pupil,
  //         status: pupil.protcent >= 70 ? "o‘tgan" : "yiqilgan",
  //         grade,
  //         isPassed: pupil.protcent >= 70,
  //     };
  // });

  // console.log("O‘rtacha protcent:", smtech.toFixed(2));
  // console.log(updatedPupils);


  // 20-masala


  // const pupils = [
  //     { name: "Umidjon", protcent: 95 },
  //     { name: "Ali", protcent: 78 },
  //     { name: "Aziz", protcent: 83 },
  //     { name: "Xumoyun", protcent: 88 },
  //     { name: "Bobur", protcent: 66 },
  //     { name: "Fayozbek", protcent: 75 },
  // ];

  // const result = pupils.reduce(
  //     (acc, pupil) => {
  //         if (pupil.protcent >= 70) {
  //             acc.passed++;
  //         } else {
  //             acc.failed++;
  //         }
  //         return acc;
  //     },
  //     { passed: 0, failed: 0 }
  // );

  // console.log("Imtihondan o‘tganlar soni:", result.passed);
  // console.log("Imtihondan o‘ta olmaganlar soni:", result.failed);
