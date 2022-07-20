//Input => matrix
//Output => boolean


//Optimised solution: Using Hashmaps
//Scalability:
//Time: O(m*n) - m=no of colEl, n=no of rowEl, but n=m=9; O(9*9) in worst case - constant time
//Space: O(n+m+l) - n=no of el in rows, m=no of el in cols, l=no of el in box , but n cannot go beyond 9, O(9+9+9) - constant space
//Steps:
//1. Create a map to store row, col and box elements
//2. Loop through matrix, check and insert into map if not present
//3. If existing return false
//4. If never false, return true
function validSoduko(board){
 let rowElements = new Map();
 let colElements = new Map();
 let boxElements = new Map();

 let boardLength = board.length;

 for(let row=0; row<boardLength; row++){
  for(let col=0; col<boardLength; col++){
    let cell = board[row][col];
    let boxCell = board[Math.floor(row/3)][Math.floor(col/3)];
    if(cell === ".") continue;

    if((Object.values(rowElements).includes(cell)) ||
    (Object.values(colElements).includes(cell)) || 
    (Object.values(boxElements).includes(boxCell))){
      return false;
    } else {
      rowElements.set([row], cell);
      colElements.set([col], cell);
      boxElements.set([box], boxCell);
    }
  }
 }
 return true;
}