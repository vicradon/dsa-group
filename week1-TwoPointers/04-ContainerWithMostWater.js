//Input => arr height
//Output => int


//Brute force: looping through all possible areas
//Scalability:
//Time: O(n**2) - n= no of el in height
//Space: O(1) -  constant time
//Steps:
//1. Use the left and right pointer to check through all possible areas
//2. return maxArea

function containerWithMostWater(height){
  let maxArea = 0;
  let area=0;
  let minHeight;

  for(let left=0; left<height.length; left++){
    for(let right=left+1; right<height.length; right++){
          minHeight = Math.min(height[left], height[right]);
          area = minHeight * (right - left);
          maxArea = Math.max(area, maxArea);
    }
  }
  return maxArea;
 }

 //Optimized solution:Two pointers
//Scalability:
//Time: O(n/2) - n = no of heights, linear time
//Space: O(1) -  constant time
//Steps:
//1. Use the left and right pointer to calc maxArea
//2. return maxArea

function containerWithMostWater2(height){
  let maxArea = 0;
  let area=0;
  let minHeight;

  let left = 0;
  let right = height.length - 1;
  
  while(left < right){
    minHeight = Math.min(height[left], height[right]);
    area = (right - left) * minHeight;
    maxArea = Math.max(area, maxArea);

    if(height[left] < height[right]){
      left++;
    } else {
      right--;
    }
  }
  
  return maxArea;
 }