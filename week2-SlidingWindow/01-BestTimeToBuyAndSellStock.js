//Input => arr prices
//Output => int


//Brute force: Nested for loops
//Scalability:
//Time: O(n**2) - n= no of days, quadratic time
//Space: O(1) -  constant time
//Steps:
//1. compare all days
//2. return max

function maxProfit(prices){
  let maxProfit = Math.min(...prices);
  for(let i=0; i<prices.length; i++){
    for(let j=0; j<prices.length; j++){
      let diff = prices[j] - prices[i];
      maxProfit = Math.max(maxProfit, diff);
    }
  }
  return maxProfit;
 }

 //Optimized solution:Two pointers
//Scalability:
//Time: O(n) - n = no of days, linear time
//Space: O(1) -  constant time
//Steps:
//1. Use the left and right pointer to calc maxprofit
//2. return maxProfit

function maxProfit(stocks){
  let maxProfit = 0;
  let buy = stocks[0];

  for(let i=0; i<stocks.length; i++){
      if(stocks[i] < buy){
        buy = stocks[i];
      } else {
        maxProfit = Math.max(maxProfit, stocks[i] - buy);
      }
  }
  return maxProfit;
}