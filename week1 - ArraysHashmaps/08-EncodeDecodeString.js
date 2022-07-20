//Input => matrix
//Output => boolean


//Optimised solution: Using delimeters
//Scalability:
//Time: O(n) - n=no of elements in list of strings
//Space: O(1) - no extra space
//Steps for encode:
//1. Loop thru words in str and append count# to string then push into result
//2. return result
function encode(string){
  let result = "";

  for(let word of string){
    let len = word.length;
    let code = len+"#"+word;
    result += code;
  }
  return result;
}

//1. loop thru string
//check if delimeter condition is true
//If true, store word in array
function decode(string){
  let result = [];
  let current = 0;
  // let len;

  while(current < string.length){
    let next = current;
    while(string[next] !== "#"){
      ++next;
    }
      let len = parseInt(string.slice(current, next));
      result.push(string.slice(++next, next+len))
      current = next+len;
  }

  return result;
}