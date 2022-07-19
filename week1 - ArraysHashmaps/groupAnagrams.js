//Input => arr of strings
//Output => arr of grouped strs
//Examples:
//Input: strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//Input: strs = ["a"]
//Output: [["a"]]
// Possible edge cases = [[""]];

// Naive approach
// Steps
// 1. Create a map using sorted str as key and matching strs as values
// 2. Loop thru str in strs, sort str and check map
// 3. return map values
// Scalability:
// Time: O(m*nlogn) - m=no of strs, n = no of char in str - Sorting makes it nlogn
// Space: O(n), hashmap
function groupAnagrams(strs){
  let wordStore = new Map();

  //function to sort str chars
  function sortStr(str){
   return str.split("").sort().join("");
  }

  strs.forEach(str =>{
    let sortedStr = sortStr(str);
    if(!wordStore.has(sortedStr)){
      wordStore.set(sortedStr, [])
    }

    wordStore.get(sortedStr).push(str);
  });

  return Array.from(wordStore.values());
}

//Optimised solution: Hashmaps
//Scalability:
//Time: O(n.m.26) - first looping thru n = strings, m = no of char in a str and then looping thru (at most) 26 chars in map(the map for counting frequency) - 
//Space: O(n) - linear space 
//Steps:
//1. Create a map to store strings char count
//2. Loop through array, check and insert into map if not present
//3. Return map values
// Very similar to solution above except that instead of sorting, we use a map to keep track

// function groupAnagrams2(strs){
//   let wordStore = new Map();

//   strs.forEach(word =>{
//     for(let char of word){
//       if(!wordStore.has())
//     }
//   })
// }