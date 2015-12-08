var numbers = [1,2,3,4,5,6,7,8,9,10];

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
               'o','p','q','r','s','t','u','v','w','x','y','z'];
var vowels=['a','e','i','o','u'];
// Practice Problems:
//-------------------
// Use the higherOrderFunctions to solve the following problems:

// Use filter to return just the vowels from the array letters
filter(letters, function(letter) {
 return['a','e','i','o','u'].indexOf(letter)!== -1;
  
});


// Use each to print the odd numbers to the console
each(numbers, function(number) {
  if(number %2 !==0)
  console.log(number);
});

// Use reduce to return the sum of numbers
reduce(numbers, function(sum, number) {
  return sum+number
  //console.log(sum,number);
  //console.log(numbers);
  //I've tried the above console.log methods, but I am not getting any output, only when I chancge 'reduce' 
  // on the higherOrderFunction page will it work.
  },0);//


// Use map to convert the array letters to all capital letters
map(letters, function(letter) {
  return letter.toUpperCase();
});


// Use filter to return every other letter in letters
filter(letters, function(letter) {
return letters.indexOf(letter) % 2!==0;
});


// Modify the above function to return the other letters
filter(letters, function(letter) {
  return letters.indexOf(letter) % 2===0;
  });


// Use filter to return the string "lmnop" from letters
filter(letters, function(letter) {
return ['l','m','n','o','p'].indexOf(letter) != -1;
  }).join(''); // HINT: more code here


// Return the sum of the even numbers using filter and reduce together
// NO HINTS: All of your code here

