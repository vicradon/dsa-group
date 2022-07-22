//Input => string s
//Output => boolean


//Optimised solution: Two pointers
//Scalability:
//Time: O(n/2) - O(n) - linear time , n=no of char in s
//Space: O(1) -  no extra space is used
//Steps:
//1. Create function to check char
//2. Use pointers at left another right and check if values are equal, skip non-alphanumeric
//3. If never false, return true
function validPalindrome(s){
  let l = 0;
    let r = s.length-1
    
    function isAlphanumeric(str){
        return /^[a-z0-9]+$/gi.test(str);
    }
    
    while(l <= r){
        if(isAlphanumeric(s[l])){
            s[l].toLowerCase();
        }else{
            l++;
        }
           
        if(isAlphanumeric(s[r])){
            s[r].toLowerCase();
        } else {
            r--;
        }
        
        if(s[l] === s[r]){
            l++;
            r--;
        } else {
            return false;
        }
        
    }
    
    return true;
 }