class MinStack:

    def __init__(self):
        self.values = []
        self.min = (float("inf"), None)
        

    def push(self, val: int) -> None:
        if val < self.min[0]:
            self.min = (val, len(self.values))
        self.values.append(val)
        

    def pop(self) -> None:
        if self.min[1] == len(self.values) - 1:
            minValue = float("inf"), None
            self.values.pop()
            
            for i in range(len(self.values)):
                if self.values[i] < minValue[0]:
                    minValue = self.values[i], i
            self.min = minValue
                    
            return None
            
        self.values.pop()
        
        
    def top(self) -> int:
        return self.values[-1]

    
    def getMin(self) -> int:
        return self.min[0]
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()