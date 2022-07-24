from typing import List

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        #check cols
        for i in range(9):
            vals = set()
            for j in range(9):
                if (board[j][i] in vals and board[j][i] != '.'):
                    return False
                else:
                    vals.add(board[j][i])
        #Check Rows
        for i in range(9):
            vals = set()
            for j in range(9):
                if (board[i][j] in vals and board[i][j] != '.'):
                    return False
                else:
                    vals.add(board[i][j])
        
        cells = {}
        
        for i in range(9):
            for j in range(9):
                key = (i//3, j//3)
                values = cells.get(key, set())
                if(board[i][j] in values and board[i][j] != '.'):
                    return False
                else:
                    values.add(board[i][j])
                    cells[key] = values

        
        return True