// RUBY METHOD
// def say_hi
//   puts "hi"
// end
// say_hi

// JS FUNCTION
// function sayHello() {
//   console.log("Hello!");
// }
// sayHello();

// // RUBY METHOD WITH PARAMS
// def add_two_nums(num_one, num_two)
//   num_one + num_two
// end
// puts add_two_nums(2,5)

// JS FUNCTION WITH PARAMS
// function addTwoNums(numOne, numTwo) {
//   return numOne + numTwo;
// }
// console.log(addTwoNums(100,5));


// RUBY SCOPE
// x = "hi"
// def do_something
//   x = "zebra"
// end
// do_something
// puts x


// JS SCOPE
// var x = "hello";
// function doSomething() {
//   var x = "zebra";
//   console.log("LOCAL SCOPE: " + x);
// }
// doSomething();
// console.log("GLOBAL SCOPE: " + x);

// JS CLASSICAL DEFINITION OF A FUNCTION
// function cool() {
//   console.log("iceberg");
// }
// cool();
// console.log(typeof cool);

// JS FIRST CLASS CITIZEN FUNCTION
// var cool = function() {
//   console.log("a variable can contain a function!");
// };
// cool();
// console.log(typeof cool);

// Functions can be a property of an object
// var car = {
//   model: "Mustang",
//   make: "Ford",
//   year: 2017,
//   miles: 10000,
//   printInfo: function(){
//     console.log("THIS IS: "+ this);
//     return this.model + " has done " + this.miles + " total miles";
//   }
// };

// console.log(car["model"]);
// console.log(car.year);
// console.log(car.printInfo());


// RUBY CLASSES
// class Car
//   attr_accessor :model, :year, :miles

//   def initialize(model, year, miles)
//    @model = model
//    @year = year
//    @miles = miles
//   end

//   def print_info
//     puts "#{model} has done #{miles} total miles"
//   end
// end

// civic = Car.new("Honda Civic", 2012, 50000)
// puts civic.year
// puts civic.print_info

// JS CONSTRUCTORS

function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
  this.printInfo = function(){
    return this.model + " has done " + this.miles + " total miles.";
  };
}

var civic = new Car("Honda Civic", 2012, 50000);
console.log(civic);
console.log(civic.year);
console.log(civic.printInfo());
















