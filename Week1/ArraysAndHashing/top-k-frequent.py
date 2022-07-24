class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequency_dict = dict()
        bucket = [[]]
        output = set()
        
        for i in range(len(nums)):
            bucket.append([])
            frequency_dict[nums[i]] = frequency_dict.get(nums[i], 0) + 1
        
        for i in range(len(nums)):
            bucket[frequency_dict[nums[i]]].append(nums[i])
            
        print(bucket)
        

        for i in range(len(bucket)-1, 0, -1):
            if bucket[i]:
                for num in bucket[i]:
                    if len(output) == k:
                        break
                    output.add(num)
                    

            if len(output) == k:
                break

        return output
            
            
        '''
        # alternate solution, O(nlog(n))
        found = 0
        for number, frequency in sorted(frequency_dict.items(), key=lambda val:val[1], reverse=True):
            output.append(number)
            found += 1
            
            if found == k:
                break
                
        return output
        '''
        
            
        