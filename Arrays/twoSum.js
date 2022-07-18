const twoSum = (nums, target) => {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map[diff] !== undefined) {
            return [map[diff], i]
        } else {
            map[nums[i]] = i;
        }
    }
    return -1;
}

console.log(twoSum([1, 2, 3, 4], 3))