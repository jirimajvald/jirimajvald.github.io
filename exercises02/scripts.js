//Exercise 01

let greeting = 'Hello world';
console.log (greeting);
greeting = 'Hello Jiri!';
console.log (greeting);
greeting = 'Hello Michal';
console.log (greeting);

//Excerise 02

let campLength;
campLength = 4;
let dayLength;
dayLength = 9;
console.log (`Length of camp is ${campLength} days every day has ${dayLength} hours.`);
let hours;
hours = dayLength * campLength;
console.log (hours);

let number1;
number1 = 1;
console.log(number1);
let number2;
number2 = 2;
console.log(number2);
number2 = 3 + number1;
console.log(number2);

// Excerise 3

let number;
number = 10;
if (number > 0){
    console.log("positiv");
} else if (number===0){
    console.log("zero");
} else if (number < 0){
    console.log("negativ");
}

number= 0;
if (number > 0){
    console.log("positiv");
} else if (number===0){
    console.log("zero");
} else if (number < 0){
    console.log("negativ");
}

number= -2;
if (number > 0){
    console.log("positiv");
} else if (number===0){
    console.log("zero");
} else if (number < 0){
    console.log("negativ");
}

// Excerise 4
let names = ['Jiri','Emil','Jarda','Tomas'];
names.forEach(item => {
        console.log(item);
    })

names.forEach(item => {
        console.log("Ahoj " + item);
    })
names.push ("Marita");
names.forEach(item => {
    console.log("Ahoj " + item);
})

let name;
name = "Marita";
if (name !== "Jiri"){
    console.log("Ahoj " + name);
} else {
    console.log("You are coding master!");
}

name = "Jiri";
if (name == "Jiri"){
    console.log(`You are really clever person ${name}!`);
} else {
    names.forEach(others =>{
        console.log(others);
        if (others !== "Jiri"){
            console.log("Ahoj " + others);
        }
    })}

name = "Marita";
if (name == "Jiri"){
    console.log(`You are really clever person ${name}!`);
} else {
    names.forEach(others =>{
        //console.log(others);
    if (others !== "Jiri"){
        console.log("Ahoj " + others);
        }
    })}

// Excerise 05
let array;
array = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
array.forEach(numbers =>{
    console.log(numbers);
})
array.forEach(evens =>{
    if(evens %2 == 0){
        console.log(`Even number ${evens}`);
    } else {
        console.log("odd");
    }})

// Excerise 06
array.forEach(three =>{
    if (three %3 == 0){
        console.log("Fizz" + three);
    }
})
array.forEach(five =>{
    if(five %5 == 0){
        console.log("Buzz" + five);
    }
})
array.forEach(both =>{
    if ((both %5 == 0) && (both %3 == 0)){
    console.log("FizzBuzz" + both);
    }
})
array.push('25','26','27','28','29','30');
console.log(array);
array.forEach(three =>{
    if (three %3 == 0){
        console.log("Fizz" + three);
    }
})
array.forEach(five =>{
    if(five %5 == 0){
        console.log("Buzz" + five);
    }
})
array.forEach(both =>{
    if ((both %5 == 0) && (both %3 == 0)){
    console.log("FizzBuzz" + both);
    }
})

// Excerise 07

//Create an object for the details of your favourite book (author, title, year)
//Write out the whole object to the console
let book1 = { author:'Eduard Storch', title: 'Lovci mamutu', year:'1918'};

//Write out the author, title and year of the book
console.log(book1);
console.log(book1['author']);
console.log(book1['title']);
console.log(book1['year']);

//Create two more book objects (with the same details)
let book2 = { author:'Ernest Hemingway', title: 'Starec a more', year:'1952'};
let book3 = { author:'George Orwell', title: 'Farma zvirat', year:'1954'};

//Put all of them into an array
let books = [book1,book2,book3];
//Write all of them to the console using a forEach
books.forEach(books =>{
    console.log(books);
})

//Write out the title for each
books.forEach(titles =>{
    console.log(titles['title']);
})

//Write out I recommend reading TitleOfBook if the year is fresher than 1953
//Write out You've probably already read TitleOfBook otherwise
books.forEach(rec =>{
    if (rec['year'] > 1953){
        console.log(`I recommend reading ${rec['title']}.`);
    } else {
        console.log(`You've probably already read ${rec['title']}.`);
    }
})

//Create an array of numbers: 3, 2, 5, 1, 8
//Try to arrange them in ascending order programatically

numbers = [3,2,5,1,8];
function sortNumber(a,b) {
    return a - b;
}
console.log(numbers.sort(sortNumber));