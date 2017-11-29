//Factorialize a Number

function factorialize(num) {
  var myVar = 1;
  for (var i = 1; i < num+1; i++) {
    myVar *= i;
    console.log(i);
    console.log(myVar);
    }
  return myVar;
}

factorialize(5);



//Check for Palindromes

function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

