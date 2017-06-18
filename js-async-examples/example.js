// function firstTask(){
//   console.log('First task done!');
// }

// function secondTask(){
//   console.log('Second task done!');
// }

// setTimeout(function(){
//   console.log('First task done!');
// }, 2000);
// console.log('Second task done!');

// setTimeout(function(){
//   console.log("first task done");
// }, 2000);

// setTimeout(function(){
//   console.log("second task done");
// }, 4000);

// setTimeout(function(){
//   console.log("third task done");
// }, 6000);

setTimeout(function(){
  console.log("First task done!");
  setTimeout(function(){
    console.log("Second task done!");
    setTimeout(function(){
      console.log("Third task done!");
    }, 2000);
  }, 2000);
}, 2000);













