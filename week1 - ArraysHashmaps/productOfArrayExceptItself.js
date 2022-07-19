//Input => array nums
//Output => array answer
//Examples:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Possible edge cases: -ve elements in nums
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// Best approach
// Steps
// 1. Get prefix product of all elements
// 2. Get postfix products of all elements and multipynby result array
// 3. Return result
// Scalability:
// Time: O(2n), two loops thru n numbers in array
// Space: O(n), extra space for result

function productOfArrayExceptItself(nums){
  let result = new Array(nums.length).fill(1);
    
  //prefix
  let prefix = 1;
  for(let i=0; i<nums.length; i++){
      result[i] = prefix;
      prefix *= nums[i];
  }
  
  let postfix = 1;
  for(let j=nums.length-1; j >= 0; j--){
      result[j] *= postfix;
      postfix *= nums[j];
  }
  return result;
}
