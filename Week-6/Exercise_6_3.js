// Count sort 0,1,2
let CountSort = (Arr) => {
  if (Arr.length == 0) {
    return Arr;
  }
  let low = 0;
  let high = Arr.length - 1;
  let mid = 0;
  while (mid <= high) {
    switch (Arr[mid]) {
      case 0:
        [Arr[low], Arr[mid]] = [Arr[mid], Arr[low]];
        mid++;
        low++;
        break;

      case 1:
        mid++;
        break;

      case 2:
        [Arr[mid], Arr[high]] = [Arr[high], Arr[mid]];
        high--;
        break;
    }
  }
  return Arr;
};
// TC is O(n) and SC is O(1)
console.log(CountSort([2, 0, 2, 1, 1, 0]));

// JavaScript native sort but TC is O(nlogn)
/* let sortArray = function (nums) {
    return nums.sort((a, b) => a - b);
}; */
