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
