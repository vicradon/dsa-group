//Input => arr height
//Output => int


//Optimized solution: Using two pointers
//Scalability:
//Time: O(n**2) - n= no of el in height
//Space: O(1) -  constant time
//Steps:
//1. Use the left and right pointer to go through area
//2. return trapArea

function trapArea(height){
  if (!height) {
    return 0
}

let left = 0
let right = height.length - 1

let leftMax = height[left]
let rightMax = height[right]

let totalWater = 0

while (left < right) {
    if (leftMax < rightMax) {
        left++
        leftMax = Math.max(leftMax, height[left])
        totalWater += leftMax - height[left]
    } else {
        right--
        rightMax = Math.max(rightMax, height[right])
        totalWater += rightMax - height[right]
    }
}
return totalWater
 }

