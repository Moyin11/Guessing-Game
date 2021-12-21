// let meal="jollof rice";
// console.log (meal);

//  let x="hello";
//  console.log (x) ; //the value of x will be 'hello'

//  let x = 'tic';
//  X = 'tac';
// X = 'toe';
// console.log(x) ;//the value of x will be 'tic'

// let x ='Aaron';
// let y = 'zuri';
// let z = y;
// y = x;
// x = z;
// console.log(x); //The value of x will be 'zuri'

// let radius = 15;
// let circumference;
// let area;
//  circumference= 2*3.142*radius;
// area= 3.142*radius*radius
//  console.log('The circumference is '+ circumference);
//  console.log('The area is '+ area);

// let celsius = 32;
// let fahrenheit;
// fahrenheit = (celsius*1.8)+32;
// console.log(celsius+'°C '+ 'is ' + fahrenheit+'°F');

// let fahrenheit = 40;
// let celsius;
// celsius = (fahrenheit-32)/1.8;
// console.log(fahrenheit+'°F '+ 'is ' + celsius+'°C');

// let byear = 2007;
// let fyear = 2032;
// let age;
// age = fyear-byear;
// console.log('My age in 2032 will be '+age);


// //write a function thAT TAKES A STRING AND RETURNS THAT STRING IN LOWERCASE AND UPPERCASE

// function toName() {
//     let name = 'Moyin';
//      console.log(name.toUpperCase());
//  }
//      toName();



//     function toName() {
//        let name = 'Moyin';
//         console.log(name.toLowerCase());
//     }
//         toName();

        
const name='moyin';  
const age=14;

 let moyin =          (age > 0 && age < 12)?       `${name} is a child` 
                   :  (age >= 13 && age <= 19)?    `${name} is a teenager`
                   :  `${name}is an adult`
console.log(moyin);



let race =     ( age < 11 || age > 65 )?   `${name} cannot run a race` : `${name} is eligible for the race`
console.log(race);



const color='yellow';

let colour = ( color === 'red')?     'color is red'
         :   ( color === 'blue')?    'color is blue'
         :   'color is neither red nor blue'
console.log(colour);


const number=200;

//equal
 let equal = (number===209)? 'the number is 200' : 'the number is not 200'
console.log(equal);



//not equal to 
 let notEqual = (number !== 200)?  'the number is not 200' : 'the number is 200'
console.log(notEqual);
 