// Best time to buy and sell stock

let maxProfit = function (prices) {
  let maxint = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < maxint) {
      maxint = prices[i];
    } else if (profit < prices[i] - maxint) {
      profit = prices[i] - maxint;
    }
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
