//template literals
name = "manish";
classs = 14;
address = "bhaktapur";

const about = `my name is ${name} and i read in grade ${classs} and i live in  ${address}`;
console.log(about);

//...........................................................................
//destructring
//array and object destructitring

// object desctruing
const course = {
  title: "mernstack",
  price: 2500,
  duration: "2.5months",
};

const { title: fitle, price, duration } = course;
console.log(fitle);
console.log(price);

//array desctruing
const data = ["kathmandu", 9847484645, "manish magaju"];

const [myaddress, mynumber, myname] = data;

console.log("my address is", myaddress);
console.log("my number is:", mynumber);
console.log("my name is:", myname);

//...........................................................................
//spread operators(...)
//copying code
const profile = {
  name: "manish",
  age: 21,
  address: "bhaktapur",
};

const user = {
  email: "manish@gmail.com",
  password: 123456,
};

const userdata = {
  //spread operta
  ...profile,
  ...user,
};

console.log(userdata);

//..................................................................................
//combination of destructuring and spread operator

const four = {
  naam: "rabina",
  grade: 4,
  roll: 1,
  thegan: "jagati",
};

const five = {
  naam: "saina",
  grade: 5,
  roll: 2,
  thegan: "aadarsha",
};

const { naam, grade, ...restobject1 } = four;
const { roll, thegan, ...restobject2 } = five;

const selectivedata = {
  ...restobject1,
  ...restobject2,
};

console.log(selectivedata);

//spread operator in array
const data1 = [1, 2, 3, 4, 5];
const data2 = [6, 7, 8, 9, 10];

const alldata = [...data1, ...data2];

console.log(alldata);

/*arraymethods*/ console.log("array methods===============================");
const datalist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < datalist.length; i++) {
  console.log(datalist[i]);
}

console.log("for of loop using===============================");

for (const data of datalist) {
  console.log(data);
}

console.log(
  "foreach loop using also use of anonymous function==============================="
);

datalist.forEach((mydata) => {
  console.log(mydata);
});

//array to string
const integer = [12, 45, 234, 534, 634];
const stringi = integer.toString();
console.log(typeof stringi);

//array to join
let c = integer.join("+");
console.log(c);

//pop in array  ( it removes last element from the element)
let birds = ["dove", "sparrow", "pigeon", "peacock"];
let app = birds.pop();
console.log(app);

//push in array
let bird = ["dove", "sparrow", "pigeon", "peacock"];
let pap = bird.push("crow");
console.log(bird, pap);

//shift in array
let numm = [387, 56, 76, 5, 365, 563, 2356];
numm.shift();
console.log(numm);

//unshiift
let numb = [387, 56, 76, 5, 365, 563, 2356];
numb.unshift(2);
console.log(numb);

//delete in array
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
delete arr[0];
console.log(arr, arr.length);

//concat in array
let ball = ["football", "basketball"];
let smallball = ["cricketball", "tabletennisball"];

let result = ball.concat(...smallball);
console.log(result);

//map in  array methods
console.log("map in arraymethods===============================");
//it change each item from array and makes new array
let arraying = [1, 2, 3, 4, 5, 6];
const arrayingresult = arraying.map((n) => n + 10);
console.log(arrayingresult);

//filter in arraymethod
const dataa = [201, 27, 675, 3566, 45654, 24, 656, 767, 24, 876];
const resultData = dataa.filter((nam) => nam > 200);

console.log(resultData);

//filterting  string in array method
const fruits = ["apple", "banana", "grapes", "kiwi", "mango"];
const resultFruits = fruits.filter((fru) => fru.length > 5);

console.log(resultFruits);

//find array method
//finding even numbers
const numbers = [23, 43, 1, 5, 6, 13, 45, 656];
const resultNumbers = numbers.find((num) => num % 2 === 0);
console.log(resultNumbers);

//findings user by find() array methods
const users = [
  {
    name: "manish",
    age: 20,
  },
  {
    name: "ritika",
    age: 21,
  },
  {
    name: "sujan",
    age: 30,
  },
];

const resultUsers = users.find((use) => use.name == " manish");
console.log(resultUsers);

//include,some and every in array methods
//it give result in booleans

const datas = [5, 10, 80, 100, 200, 120, 230];

const resultInclude = datas.include(200);
const resultSome = datas.some((num) => num > 100);
const resultEvery = datas.every((num) => num > 200);

console.log({resultInclude,resultSome,resultEvery});