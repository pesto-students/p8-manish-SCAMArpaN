function vowelCount(str) {
  const vowel = { a: true, e: true, i: true, o: true, u: true };
  const vowelMap = new Map();
  str = str.toLowerCase();
  for (let char of str) {
    if (vowel[char]) {
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
  return vowelMap;
}

console.time();
console.log(vowelCount("this is console"));
console.log(vowelCount("AEIOU"));
console.timeEnd();
