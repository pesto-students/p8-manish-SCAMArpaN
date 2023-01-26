//With Set API
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

console.log(hasDuplicate([1, 5, -1, 4])); //false
console.log(hasDuplicate([1, 1, -1, 1])); //true

//Without Set API
const hasDuplicateWithoutSet = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) !== index;
  }).length > 0
    ? true
    : false;
};

console.log(hasDuplicateWithoutSet([1, 5, -1, 4])); //false
console.log(hasDuplicateWithoutSet([1, 1, -1, 1])); //true
