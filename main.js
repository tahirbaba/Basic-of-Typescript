// TYPESCRIPT  METHOD : Console.log("") / ('') / (``) / = string , (123) = numb
// Primitive Data Type:
//(1) String (2) Number (3) Boolean (4) Symbol (5) Null (6) Undefined (7) Object  
// (01)  String data type:
// For Example: 
console.log("abc"); // in print = abc
console.log('abc'); // in print = abc
console.log("abc"); // in print = abc
// (02)Number data type:
// For Example: 
console.log(123); // in print = 123
console.log(456); // in print = 456
console.log(789); // in print = 789
// (03) Boolean data type:
// For Example: 
var book1 = 50;
var book2 = 50;
console.log(book1 == book2); // in print = True
//  (04) Symbol data type:  
// For Example: 
// let greeting1 = Symbol('Hasni Bro');    
// let greeting2 = Symbol('Hasni Bro');
// console.log(greeting1 == greeting2);      //  with Symbol  // in print ===> boolean = false
var greeting3 = ('Hasni Bro');
var greeting4 = ('Hasni Bro');
console.log(greeting3 == greeting4); //  without Symbol  // in print ===> boolean = True
// to check type of any data method: written by "typeof";
console.log(typeof 'abc'); // in print = String     (in data type)
console.log(typeof 123); // in print = Number          //    //
// Variables:
// Variables Declairation Words:
// (1)  let    =   irredeclariable but ubdateable
var myBag = 'copy';
myBag = 'pencil';
myBag = 'book'; // updation
console.log(myBag); // in print = book
// (2)  const  = irredeclairable & unubdateable
var myBook = 'English'; //  
console.log(myBook); // in print = English
// (3)  var    =  redeclarable & updateable both
var mybox = 'apple'; // Declaration
mybox = 'Banana'; // Updation
mybox = 'Mango'; // Redeclaration
console.log(mybox); // in print = Mango 
var mybox = 'Quran'; // Redeclaration for next console
var box1 = ('Gold');
var cupboard = (5000000);
var locker = ('Daimond');
console.log(box1); // in print = Gold  
console.log(cupboard); // in print = 5000000
console.log(locker); // in print = Daimond
console.log(typeof locker); // in print = String            ("typeof" ==> in Varaibles)
console.log(typeof cupboard); // in print = Number                   //      //     //
// Variable Type Annotions:
var box2 = ('Gold');
var box3 = (5000000);
var inthisright = (true); // Example of Boolean
console.log(box2); // in print = Gold
console.log(box3); // in print = 5000000 
console.log(inthisright); // in print = true
// Variables Naming Conventions:
var myBoxInTheRoom = 'flowers'; // camel case
var MyBoxInTheRoom = 'flowers'; // pascal case
var my_box_in_the_room = 'flowers'; // snake case
//  let    ===>  block scope
//  const  ===>  block scope
//  var    ===>  global scope
// For Example: 
var x = 10;
if (x === 10) {
    var mybox_1 = 'flower';
    var hisbox = 'apple';
    var yourbox = 'Mango';
    console.log(mybox_1); // in print = flower
    console.log(hisbox); // in print = apple
    console.log(yourbox); // in print = Mango
}
console.log(mybox); // in print = Quran 
// Concetination:
var sim1 = 20;
var sim2 = 30;
var sum = (sim1 + sim2);
console.log("the sum of " + sim1 + ' and ' + sim2 + ' will be ' + sum); // in print = the sum of 20 and 30 will be 50
// console.log("the sum of ${sim1} and ${sim2} will be ${sum}");                      ==========================>   in process
console.log("ALHAMDULILLAH", "My 2nd session (part 1) is done", "allmostl"); // in print = ALHAMDULILLAH My 2nd session (part 1) is done almostl
console.log("ALHAMDULILLAH" + "My 2nd session (part 1) is done" + "allmostl"); // in print = // in print = ALHAMDULILLAHMy 2nd session (part 1) is doneallmostl <==> "concatenation" 
var hatPrice = 150; // number
console.log("hat Price = ".concat(hatPrice)); //  in print = 150
var bootPrice = '100'; // string
console.log("boot Price = ".concat(bootPrice)); //  in print = 100
console.log(hatPrice + bootPrice); // then in print result ===> 100100 (because of number + string)
console.log(Number(hatPrice) + Number(bootPrice)); // then in print result ===> 200 (because of number + number)       = its called coercion
// Conditional Statements:   ( if , else if , else)             ===>  Called "Rational Operators": == , === , <  , > 
if (hatPrice == 100) {
    console.log('you are right');
}
else if (hatPrice == 150) {
    console.log('hatPrice is 150');
}
else {
    console.log('you are wrong');
} //  in print = hatPrice is 150
// symbol data type:   (es me data ek jesa hone k bawajood alg alg hota he ye unique k tor pr use hoti he) 
// For Example: 
var greeting1 = Symbol('Hasni Bro');
var greeting2 = Symbol('Hasni Bro');
console.log(greeting1 == greeting2); // in print ===> boolean = false
var greeting3 = ('Hasni Bro');
var greeting4 = ('Hasni Bro');
console.log(greeting3 == greeting4); // in print ===> boolean = True
var ballPrice = '100';
var batPrice = 100;
// Difference of Double equal (==) & Tripple equal (===) 
console.log(ballPrice == batPrice); // in print ===> True  ( according to 100 number is same)  
console.log(ballPrice === batPrice); // in print ===> false  ( according to data type is different)
//  NOTE:
// 1) Reserved name not allow: Example : let let box1 = "apple"; , console etc
// 2) Don't start from number: Example : let 1box = "apple";
// 3) Don't space in a name:   Example : let my box = "apple";
// 4) Don't allow any symbols: Example : let my%box = "apple"; , @ , # etc         ( $ , _ symbols allow) 
