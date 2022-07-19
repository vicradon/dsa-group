class Solution {
    fun containsDuplicate(nums: IntArray): Boolean {
        val record: MutableMap<Int, Int> = mutableMapOf()
        nums.forEach {
            record[it] = record.getOrDefault(it, 0) + 1
            if (record.getOrDefault(it, 0) > 1) return true
        }
        return false
    }
}