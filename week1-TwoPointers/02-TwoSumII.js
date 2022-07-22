//Input => arr, int
//Output => arr


//Optimised solution: Two pointers
//Scalability:
//Time: O(n/2) - O(n) - linear time , n=no of char in s
//Space: O(1) -  no extra space is used
//Steps:
//1. Use a pointer at left and right to check if equal to target
//2. Return array
function twoSum(arr, target){
  let l = 1;
  let r = s.length;
    
  while(l<=r){
    let sum =l+r;
    if(sum === target){
      return [l+1, r+1];
    } else if(sum < target){
      l++;
    } else {
      r--;
    }
  }
    
 }