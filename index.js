//problem-1
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

// 🔹 str.split('')
// 👉 এটা একটা string কে ভেঙে character গুলা আলাদা করে একটা array বানায়।
// "hello" ➝ ['h', 'e', 'l', 'l', 'o']

// 🔹 .reverse()
// 👉 এই array টা কে উল্টায়ে ফেলে।
// ['h', 'e', 'l', 'l', 'o'] ➝ ['o', 'l', 'l', 'e', 'h']

// 🔹 .join('')
// 👉 array থেকে আবার string বানায়, কোনো separator না দিয়ে।
// ['o', 'l', 'l', 'e', 'h'] ➝ "olleh"



//problem-2
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

// const vowels = 'aeiouAEIOU';
// 👉 সব ছোটহাত আর বড়হাত vowel গুলা একসাথে একটা string এ রাখছি।

// let count = 0;
// 👉 vowel কয়টা পাইলাম, ওর হিসাব রাখার জন্য একটা কাউন্টার নিচ্ছি।

// for (let char of str)
// 👉 পুরো string এর উপর লুপ চালাইছি — প্রতিটা character এর উপর।

// if (vowels.includes(char))
// 👉 যদি character টা vowel list এর মধ্যে থাকে, তাহলেই count++;

// শেষে return count;
// 👉 সব ঘুইরা বের কইরা vowel এর সংখ্যা রিটার্ন করছে।

//problem-3
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello"));

// str.split('')
// 👉 string টাকে character গুলায় ভাগ করি (array বানাই)।
// Example: "madam" → ['m', 'a', 'd', 'a', 'm']

// .reverse()
// 👉 array টা উল্টায় ফেলি।
// ['m', 'a', 'd', 'a', 'm'] → ['m', 'a', 'd', 'a', 'm'] (এই case এ same 😄)

// .join('')
// 👉 আবার string বানাই।
// Output: "madam"

//problem-4
function findMaxNumber(arr) {
  return Math.max(...arr);
}

console.log(findMaxNumber([5, 1, 9, 3])); // Output: 9

// Math.max()
// 👉 JavaScript-এর built-in function, যেটা multiple number-এর মধ্যে সবচেয়ে বড়টা return করে।
// Example: Math.max(1, 5, 9) ➝ 9

// ...arr
// 👉 এইটা spread operator, যেটা array টাকে ভেঙে দেয় আলাদা আলাদা value-তে।
// [5, 1, 9, 3] ➝ 5, 1, 9, 3

//problem-5
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); 
// Output: [1, 2, 3, 4]
// new Set(arr)
// 👉 JavaScript-এর Set হল এমন একটা জিনিস যেটা same value একাধিক বার রাখে না।
// Example:
// new Set([1, 2, 2, 3]) ➝ Set {1, 2, 3}

// [...new Set(arr)]
// 👉 Set টাকে আবার normal array বানাতে spread operator ব্যবহার করছি।
// So final output: [1, 2, 3]

//problem-6 
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 1️⃣ function sumArray(arr) {...}

// 👉 এটা একটা ফাংশন, নাম sumArray.
// 👉 এটা একটা array নেয় — মানে অনেক সংখ্যা একসাথে (যেমন [1, 2, 3])

// 2️⃣ let sum = 0;

// 👉 একটা খালি খাতা বানাইছে যার নাম sum
// 👉 প্রথমে ওখানে কিছু নাই, মানে 0

// 3️⃣ for (let i = 0; i < arr.length; i++) {...}

// 👉 এটা একটা ঘুর্নিপাক! (loop)
// 👉 array এর প্রতিটা সংখ্যা এক এক করে ঘুরে দেখবে

// 4️⃣ sum += arr[i];

// 👉 প্রতিটা সংখ্যা sum এর সাথে যোগ করে ফেলতেছে

// 5️⃣ return sum;

// 👉 সব যোগ হয়ে গেলে, সেই final total টা দিয়ে দিচ্ছে

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

// একটা ফাংশন বানাবো যেটা একটা অ্যারে নিবে।

// অ্যারে'র প্রতিটা সংখ্যাকে চেক করবো যে সেটা even (জোড়) নাকি না।

// যেই নাম্বারটা even, মানে number % 2 === 0, ওগুলোকে একটা নতুন অ্যারেতে রাখবো।

// শেষে সেই নতুন অ্যারেটা রিটার্ন করে দিবো।
