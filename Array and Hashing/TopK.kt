class Solution {
    fun topKFrequent(nums: IntArray, k: Int): IntArray {
        val freqMap: MutableMap<Int, Int> = mutableMapOf()
        val freqList: Array<MutableList<Int>> = Array(nums.size + 1) { mutableListOf<Int>() }

        nums.forEach{
            if(freqMap.containsKey(it)){
                freqMap[it] = freqMap.getOrDefault(it, 0) + 1
            } else {
                freqMap[it] = 1
            }
        }

        freqMap.forEach { key, value ->
            freqList[value].add(key)
        }

        val result = mutableListOf<Int>()
        for(i in freqList.size - 1 downTo 0){
            if(freqList[i].isNotEmpty()){
                for (j in 0 until freqList[i].size){
                    if (result.size < k) result.add(freqList[i][j])
                }
            }
        }

        return result.toIntArray()
    }
}