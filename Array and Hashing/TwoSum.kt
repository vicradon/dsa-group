class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val record: MutableMap<Int, Int> = mutableMapOf()
        nums.forEachIndexed { index, value ->
            val remainder = target - value
            
            if (record.containsKey(value)){
                return intArrayOf(record.get(value)!!, index)
            }
            
            record[remainder] = index
        }
        return intArrayOf()
    }
}