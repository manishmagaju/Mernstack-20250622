// printing in java script
console.log("hello world");
console.error("this error");
console.warn("this  is warning");
console.table([1, 2, 3, 4]);

// lets   (cannot be redeclared but can be updated)
let phone = 981321;
phone = 984748;

console.log(phone);

// const  (cannot be redeclared and  updated)
const address = "bhaktapur";

console.log(address);

// data types in js
// number,string,boolean,null,undefined, bigint,symbol, array,object
fullname = "manish";
age = 21;
price = 99.99;
x = null;
y = undefined;
Isfollow = true;
isfollow = false;

console.log(fullname);
console.log(age);
console.log(x);
console.log(y);
console.log(Isfollow);
console.log(isfollow);

// object  (key and value pair)
const student = {
  fullname: "Manish magaju",
  age: 21,
  gpa: 3.6,
  ispass: true,
};

console.log(student);
console.log(student.fullname);
console.log(student.gpa);
console.log(student.ispass);
console.log(student.age);
console.log(typeof student); //type of checking
console.log(typeof student.gpa);

// array    index value or positioned   index always astarts from zero
const marks = [10, 20, 30, "ram", ["good"]];

console.log(marks);
console.log(marks[2]); //for individual data printing
console.log(marks[4]);

//operators
/* arithmetic  operator */
let a = 5;
let b = 6;
let c = a + b;
console.log("a+b=", c);
console.log("a-b=", a - b);
console.log("a*b=", a * b);
console.log("a/b=", a / b);
console.log("b%a=", b % a);

//pre and post increment operator
let apple = 5;
++apple;
console.log(apple);

//pre and post decrement operator
let ball = 5;
ball--;
console.log(ball);

let cat = 10;
console.log(cat--);
console.log(cat);

//assignment operators  =  +=  -=   *=  %=  **=    /=
console.log("____________________");

let p = 5;
p -= 2;
console.log(p);

let d = 7;
d *= 2;
console.log(d);

let e = 8;
e %= 3;
console.log(e);

// comparision operators == === != !==    >   <     >=       <=
console.log("____________________");

console.log(5 == 5); //true (equals to)    (it doesnt check data type)
console.log(5 === "5"); //false    (strictly equals to)  (it  check data type also)

console.log(5 != 6); //not equals to
console.log(5 !== "5"); // strictly not equals to

console.log(7 > 5); //greater than
console.log(5 < 7); //smaller than

console.log(5 <= 5); // smallerthan or equals to
console.log(4 <= 6); // smallerthan or equals to

//logical operators    (AND && , OR || , NOT !)
console.log("____________________");

console.log(false && true); //and
console.log(true && false); //and
console.log(true && true); //and
console.log(false && false); //and

console.log(false || true); //OR
console.log(true || false); //OR
console.log(false || false); //OR
console.log(true || true); //OR

console.log(!true); //not
console.log(!false); //not

//conditonal statement ()
console.log("__________________________");

//if statement  and if else statement
let agee = 1;

if (agee >= 18) {
  console.log("you are adult");
} else {
  console.log("you are baby");
}

//if......elseif ...if statement
let mark = 65;

if (mark >= 90) {
  console.log("you have score outstanding");
} else if (mark >= 80) {
  console.log("you have score distinction");
} else if (mark >= 70) {
  console.log("you have scored first division");
} else if (mark >= 60) {
  console.log("you have score average")
} else {
  console.log("you are gover gwach")
}

//switch statement
/* 
switch(____){
case (value):

break;
}
 */

let sallary = 12000;

switch (sallary) {
  case (sallary >= 100000):
    console.log("you are near to your sucess point")
    break;

  case (sallary >= 50000):
    console.log("you are earning more than 50 k")
    break;

  default:
    console.log("you need more dedication in your life")
    break;
}


