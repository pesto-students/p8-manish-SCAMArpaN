// Max Sum Contiguous Subarray
function maxSubArraySum(nums) {
  let maxint = Number.MAX_SAFE_INTEGER;
  let max_so_far = -maxint - 1;
  let max_ending_here = 0;

  for (let i = 0; i < nums.length; i++) {
    max_ending_here = max_ending_here + nums[i];
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;

    if (max_ending_here < 0) max_ending_here = 0;
  }
  return max_so_far;
}

console.log("Maximum contiguous sum is", maxSubArraySum([1, 2, 3, 4, -10]));
console.log(
  "Maximum contiguous sum is",
  maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);
