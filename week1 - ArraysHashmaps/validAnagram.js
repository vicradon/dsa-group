//Input => strings s, t
//Output => boolean
//Examples:
//1. s = "anagram", t = "nagaram"  output = true
//2. s = "rat", t = "car"  output = false
// Possible edge cases:
//1. s="", t="nn"
//2. s="race." t="crae"
//3. s="an n" t="ann"

// Brute force
// Steps
// 1. Check length equality, return false
// 2. Sort strings characters
// 3. Loop through s and t, check char equality
// 4. Return false, if !true
// 5. Return true if never false
// Scalability:
// Time: O(n^m), n = no of char in s, m = no of char in t - quadratic
// Space: O(1), no extra space is used

function validAnagram(s,t){
  let lenT = t.length;
  let lenS = s.length;
  if(lenS !== lenT) return false;

  let newS = s.split("").sort();
  let newT = t.split("").sort();

  for(let i=0; i<lenS; i++){
      for(let j=0; j<lenT; j++){
          if(newS[i] !== newT[j]){ 
            return false
          };
      }
  }
  return true; 
}

//Optimised solution: Hashmaps
//Scalability:
//Time: O(n+m) - Linear time, n = no of char in s
//Space: O(n+m) - linear space, m = no of char in t
//Steps:
// 1. Check length equality, return false
// 2. create map with t and store char freq
// 3. create map with s and store char freq
// 4. Check equality of map values
// 5. Return false or true

function validAnagram2(s,t){
  if(s.length !== t.length) return false;
  
  let charT = new Map();
  let charS = new Map();

  for(let char of t){
      if(!charT.has(char)){
        charT.set(char, 1);
      } else {
        charT.set(char,charT.get(char)+1);
      }
  }

  for(let char of s){
    if(!charS.has(char)){
      charS.set(char, 1);
    } else {
      charS.set(char,charS.get(char)+1);
    }
}

for(let count in charS){
  if(charS[count] !== charT[count]){
    return false
  }
}
  return true;
}