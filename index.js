//problem-1 Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));





//problem-2 Count Vowels
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("programming")); 




//problem-3 Palindrome Check
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello"));



//problem-4 Find Maximum Number
function findMaxNumber(arr) {
  return Math.max(...arr);
}

console.log(findMaxNumber([5, 1, 9, 3])); 




//problem-5 Remove Duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); 







//problem-6 
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


//problem-7
function findEvenNumbers(arr) {
  const evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }

  return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findEvenNumbers(numbers));


//problem-8
function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Example:
const input = "hello world from javascript";
const result = capitalizeWords(input);
console.log(result); 


//problem-9
function factorial(n) {
  let result = 1; 

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Test examples
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1 (by definition, 0! = 1)


//problem-10
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

pingPong();


