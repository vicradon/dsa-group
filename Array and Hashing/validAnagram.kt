class Solution {
    fun isAnagram(s: String, t: String): Boolean {
        val characters: MutableMap<Int, Int> = mutableMapOf()
        if(s.length != t.length) return false
        else {
            for(i in 0 until s.length){
                characters[s[i] - 'a'] = characters.getOrDefault((s[i] - 'a'), 0) + 1
                characters[t[i] - 'a'] = characters.getOrDefault((t[i] - 'a'), 0) - 1
            }
            
            characters.values.forEach{
                if (it != 0) return false
            }
            
            return true
        }
    }
}