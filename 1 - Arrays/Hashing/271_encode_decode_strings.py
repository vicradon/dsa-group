from typing import List

class Codec:
    def encode(self, strs: List[str]) -> str:
        """Encodes a list of strings to a single string.
        """
        result = []
        for s in strs:
            strLen = len(s)
            st = str(strLen)+"$"+s
            result.append(st)
        print(result)
        return ''.join(result)
        

    def decode(self, s: str) -> List[str]:
        """Decodes a single string to a list of strings.
        """
        result = []
        r = 0
        print(s)
        while r < len(s):
            print(r)
            num = []
            while s[r] != "$":
                num.append(s[r])
                r += 1
            count = int(''.join(num))
            last = count + r + 1
            decoded = s[r+1: last]
            result.append(decoded)
            r = last
        return result