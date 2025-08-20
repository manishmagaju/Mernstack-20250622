//function
//basic syntax
function greeting(){
    console.log("hello its me manish")
}

greeting()            //function call



/*function with parameter*/ console.log("___________________");

function greet(name){
    console.log("hello,"+name);
}

greet("manish")


//printing square from function
function square(number){
    console.log(number*number);
}

square(6)

//printing sum of two; number from function
function sum(num1, num2){
    console.log(num1+num2);
}

sum(6,20)


//return type in function

function addition(a,b){
    return a+b;
}

let p = addition(100,6);
console.log(p)
