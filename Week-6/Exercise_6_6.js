// 3Sum Closest
function threeSumClosest(nums, target) {
  let closest_so_far = -Number.MAX_SAFE_INTEGER - 1;
  let sum = 0,
    i = 0,
    j = 1,
    k = 2,
    size = nums.length;
  while (i < size) {
    if (i != j && i != k && j != k && nums[i] && nums[j] && nums[k]) {
      sum = nums[i] + nums[j] + nums[k];
      //console.log(sum, `${i} ${j} ${k}`);
      if (closest_so_far < sum - target) closest_so_far = sum;
    }
    k++;
    if (k >= size) {
      j++;
      k = j + 1;
    }
    if (j >= size) {
      i++;
      j = i + 1;
      k = j + 1;
    }
  }
  return closest_so_far;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
