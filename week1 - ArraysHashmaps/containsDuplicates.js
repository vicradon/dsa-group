//Input => arr
//Output => boolean
//Examples:
//1. [1,2,3,1] , false
//2. 
// Possible edge cases = [n]

// Brute force
// Steps
// 1. Use two nested for loops to check every element with the other values in array
// 2. If equal return true
// 3. If false, keep looping
// 4. Return false, if never true
// Scalability:
// Time: O(n^2), n being the number of elements in array
// Space: O(1), no extra space is used

function containsDuplicate(arr){
  let arrayLength = arr.length;
    for(let current=0; current<arrayLength; current++){
      for(let next=i+1; next<arrayLength; next++){
        if(arr[current] === arr[next]){
          return true;
        }
      }
    }
    return false;
}

//Optimised solution: Hashmaps
//Scalability:
//Time: O(n)- Linear time
//Space: O(n) - linear space
//Steps:
//1. Create a map to store element count
//2. Loop through array, check and insert into map if not present
//3. If existing return true
//4. If never true return false
function containsDuplicate2(arr){
  let elementCount = new Map();
  
  for(let i=0; i<arr.length; i++){
    if(elementCount.has(arr[i])){
      return true;
    } else {
      elementCount.set(arr[i], 1)
    }
  }
  return false;
}