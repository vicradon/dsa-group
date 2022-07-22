//Input => string s
//Output => boolean


//Brute force: Two pointers
//Scalability:
//Time: O(n^3 + nlogn) - n=no of el in nums
//Space: O(1) -  constant time
//Steps:
//1. Sort nums
//2. Loop through nums, use two pointers at each loop to check validity

function threeSum(nums){
  let result = [];
  nums.sort((a,b) => a-b );
  let l=0;
  let r=nums.length-1;
  
  for(let i=0; i<nums.length; i++){
      
      let l = i+1;
      let r= nums.length - 1;
      let sum = 0;
      while(l <= r){
          sum = nums[i] + nums[l] + nums[r];
          
      if(sum === 0){
          result.push([nums[i], nums[l], nums[r]]);
          numSum = [];
          l++;
          r--;
          while(nums[l] == nums[l-1]){
                l++;
                }
          while(nums[r] == nums[r+1]){
              r--;
          }
      } else if(sum < 0){
          l++;
      } else {
          r--;
      }
  }
  }
  return result;
 }