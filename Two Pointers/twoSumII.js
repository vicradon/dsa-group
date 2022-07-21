const twoSumII = (nums, target) => {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            return [left + 1, right + 1]
        } else if(sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return -1;
}

const nums = [1, 2, 3, 4, 5, 6];
console.log(twoSumII(nums, 3))