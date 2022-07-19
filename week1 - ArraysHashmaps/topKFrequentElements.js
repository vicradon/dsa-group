//Input => array nums, int k
//Output => array 
//Examples:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Possible edge cases:


// Naive approach
// Steps
// 1. Create map to track element count
// 2. Sort descending based on map values
// 3. Return k-1 elements in array by using for loop
// Scalability:
// Time: O(K*nlogn), sorting takes nlogn time
// Space: O(k+n), n is the no of arr elements for creating numCount

function topKFrequentElements(nums, k){
  let numCount = new Map();  //S: O(n), n=size of nums
  let numCountArr = []; // S: O(n)
  let result = []; //S: O(k), value of k

  for(let i=0; i<nums.length; i++){  //T: O(n)
    if(!numCount.has(nums[i])){
      numCount.set(nums[i], 1);
    } else {
      numCount.set(nums[i], numCount.get(nums[i])+1);
    }
  }

  for(let [num, freq] of numCount){ //T: O(n)
    numCountArr.push([num, freq]);
  }

  numCountArr.sort((a,b) => b[1] - a[1]); //T: O(nlogn)

  for(let i=0; i<k; i++){  //T: O(k)
    result.push(numCountArr[i][0]); 
  }
  
  return result;
}

//Optimised solution: Hashmaps & Max heap
//Scalability:
//Time: O(n) - Linear time, n = no of el in nums
//Space: O(n) - linear space, m = no of char in t
//Steps:
// 1. Create map to track element count
// 2. Use a max heap to sort
// 3. Pop heap k times
// 4. return result

function topKFrequentElements2(nums, k){

}