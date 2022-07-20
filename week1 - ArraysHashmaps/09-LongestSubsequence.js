//Input => unsorted array nums
//Output => integer
//Examples:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Possible edge cases = [], [-1,-2,-4,7,0,-2]

// Brute force
// Steps
// 1. Sort elements
// 2. Use sliding windows to count
// 3. return max count
// Scalability:
// Time: O(nlogn), n = no of array els
// Space: O(n), n= max length of window;

function longestSubsequence(nums){
  nums.sort(a,b =>{
    a - b;
  });

  let window = new Set();
  window.add(nums[0]);
  let i = 0;

  let count = window.size;
  let maxCount = count;

  while(i<nums.length){
    if(nums[i+1] === nums[i]+1){
      window.add(nums[i+1]);
      count = window.size;
      maxCount = Math.max(maxCount, count);
      i++;
    } else {
      window = new Set();
      count = window.size;
      i++;
    }
  }
  return maxCount;
}

//Optimised solution
//Scalability:
//Time: O(n)- 
//Space: O(n) - linear space
//Steps:
//1. Create a set to store array
//2. Loop through array, check if number before exists in set
//3. If existing increment count
//4. return max count
function longestSubsequence2(nums){
  let numSet = new Set();
  let count = numSet.size;
  let maxCount = count;

    if(nums.length === 0) return 0;
  nums.forEach(num =>{
    numSet.add(num);
  });

  nums.forEach(num =>{
    if(numSet.has(num-1)){
      count++;
      maxCount=Math.max(count, maxCount);
    }
  });

  return maxCount+1;
}