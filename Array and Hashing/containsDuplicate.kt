class Solution {
    fun containsDuplicate(nums: IntArray): Boolean {
        val record: MutableSet<Int> = mutableSetOf()
        nums.forEach {
            if(record.contains(it)) return true
            record.add(it)
        }
        return false
    }
}