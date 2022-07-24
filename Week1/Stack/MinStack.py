class MinStack:
    def __init__(self):
        self.values = [] # (value, min_at_value)
        self.min = float("inf")
        
    def push(self, val: int) -> None:
        if not(self.values) or val < self.values[-1][1]:
            self.values.append((val, val))
        else:
            self.values.append((val, self.values[-1][1]))
        
    def pop(self) -> None:            
        self.values.pop()
          
    def top(self) -> int:
        return self.values[-1][0]

    def getMin(self) -> int:
        return self.values[-1][1]
        
