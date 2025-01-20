// let x = 100;
// console.log(typeof x);

// let y = true;
// console.log(typeof y);

// const student = {
//   name: "karma",
//   age: 24,
// };

// console.log(student);

// //array of object
// // const students = [
// //   { name: "karma", age: 240 },
// //   { name: "dipshi", age: 230 },
// // ];

// //operators : 3 types

// ++x, x++;

// console.log(true && true);

// //comparison operators : ==, ===, !=, !==, > , < , >= , <=

// == : only checks if it is equal or not

// === : also checks value and datatype

// != : value checks

// !== : value checks and also datatypes

// //conditional statements : if, if else, else if,

// const marks = 90;
// if (marks > 60)
// {
//     console.log("Pass");
// }
// else if(marks < 60 && marks > 40)
// {
//     console.log("Just Passed");
// }
// else
// {
//     console.log("Failed");
// }

// //switch case

// switch(marks)
// {
//     case 50:
//         console.log("Just Passed");
//         break;

//     case 99:
//         console.log("Passed");
//         break;

//     default:
//         console.log("Failed")

// }

//conditional statements : for, while, do while, for in, for of, forEach, map, filter , reduce

// 1.for

// let i = 0;
// while (i < 10) {
//   console.log("i:", i);
//   i++;
// }

//do while

// let x = 0;
// d0{
//     console/log("x:":x);
//     i++
// }
// while(x<10)

// //forEach

// let fruits = ["apple","banana","mango"]
// fruits.foreach ((fruit)=>{
//     console.log("fruit:",fruit)
// })

// callback function

//map

// let x = [1, 2, 3, 4, 5];
// let y = x.map((xp) => {
//   return xp * 2;
// });
// console.log("y:", y);

//forEach and map is used in array

//value,index,arr

//functions

// function sum(a, b) {
//   return a + b;
// }
// console.log("sum : ", sum(1, 2));

// console.log("1" + "1" - "1");

// let x = "apple";
// let y = "banana";
// console.log(x + y);

//arrow functions

// const sum = (x, y) => {
//   return x + y;
// };
// console.log("sum :", sum(3, 5));

//task

// function calculator(x, y, op) {
//   switch (op) {
//     case "+":
//       return x + y;
//     case "-":
//       return x - y;
//     case "*":
//       return x * y;
//     case "/":
//       return x / y;
//     default:
//       console.log("Not available operator");
//   }
// }

// let res = calculator(5, 7, "*");
// console.log("Res : ", res);

//for in and for of
//for in : object ko keys haru ma looping garne kam garxa , hamlai index value pani dinxa
//for of : siddhai values nai dinxa

const students = {
  name: "Jhone",
  age: 25,
  marks: 90,
};

for (let key in students) {
  console.log("key :", key, "value :", students[key]);
}

for (let x in "students") {
  console.log("x : ", x);
}
