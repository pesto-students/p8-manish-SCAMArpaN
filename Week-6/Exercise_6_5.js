// Pair a given difference
function pairDiff(arr, n) {
  let size = arr.length;
  let i = 0,
    output = 0;
  let j = 1;

  while (i < size && j < size) {
    if (arr[i] - arr[j] == n && j != i) {
      console.log(`Pair Found: ${arr[i]} ${arr[j]}`);
      output++;
    }
    j++;
    if (j === size) {
      i++;
      j = 0;
    }
  }
  return output;
}

console.log(pairDiff([5, 10, 3, 2, 50, 80], 78));
