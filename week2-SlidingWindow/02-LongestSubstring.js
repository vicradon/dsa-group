//Input => string s
//Output => int


//Optimised solution: Sliding Window
//Scalability:
//Time: O(n) - n= no of chars,linear time
//Space: O(j+k) -  k - size of window, j - size of set

function longestSubstring(s){
   //create variables to store count of substring and maxcount
   let maxCount = s.length === 0 ? 0 : 1;
   let charSet = new Set(s[0]);
   
   //use sliding window to check and form substrings, store every character in a set 
   //at every iteration, check if element exists in set, if it exists, remove 
   
   //create a window
   let window = [s[0]];
   let charCount = window.length;
   
   let l = 0;
   let r = l+1;
   //add next element
   while(r < s.length){
       if(!charSet.has(s[r])){
           window.push(s[r]);
           charSet.add(s[r]);
           charCount = window.length;
           maxCount= Math.max(charCount, maxCount);
           r++;
       } else {
           let remove = window.shift();
           charSet.delete(remove);
           l++;
       }
   }
   //check if window is valid, that is, (1)no repitition, if repitition remove index 0 element, until no repition
   // if no repitition increment count
   
   return maxCount;
 }