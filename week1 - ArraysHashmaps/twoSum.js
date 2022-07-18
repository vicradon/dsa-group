//Input => array nums, int target 
//Output => array indexes
//Examples:
//1. nums = [2,7,11,15], target = 9
//2. nums = [3,3], target = 6
// Possible edge cases:
//

// Brute force
// Steps
// 1. Loop through nums, check curr with next element
// 2. If sum === target, return [indexes]
// 3. Else keep looping

// Scalability:
// Time: O(n^2), n is no of elements in nums - quadratic
// Space: O(2), constant space because output would always be of size 2

function twoSum(nums, target){
  let numsLength = nums.length;
  let result = [];

  for(let currIdx=0; currIdx<numsLength; currIdx++){
    for(let nextIdx = currIdx+1; nextIdx < numsLength; nextIdx++ ){
      if(nums[currIdx] + nums[nextIdx] === target){
        result.push(currIdx);
        result.push(nextIdx);
      }
    }
  }
  return result;
}

//Optimised solution: Hashmaps
//Scalability:
//Time: O(n), n=no of elements in nums; 
//Space: O(n) - linear space, m = no of char in t
//Steps:
// 1. create map to store differences, index
// 2. Loop through array
// 3. If arr el exists in map, 
// 4. push stored index, el index into result, return
// 5. Else, store difference & index

function twoSum2(nums, target){
    let numsMap = new Map();

    for(let i=0; i<nums.length; i++){
      let difference = target - nums[i];
      if(!numsMap.has(difference)){
        numsMap.set(nums[i], i)
      } else {
        return [numsMap.get(difference),i];
      }
    }
    return result;
}