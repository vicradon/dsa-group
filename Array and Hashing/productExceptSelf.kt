class Solution {
    fun productExceptSelf(nums: IntArray): IntArray {
        val resultArray = Array<Int>(nums.size) {1}
        
        var product = 1
        nums.forEachIndexed{ index, value ->
            resultArray[index]*=product
            product*=value
        }
        
        product = 1
        for(i in nums.lastIndex downTo 0) {
            resultArray[i] *= product
            product *= nums[i]
        }
        return resultArray.toIntArray()
    }
}