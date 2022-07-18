const containsDuplicate = (nums) => {
    return new Set(nums).size !== nums.length;
}

console.log(containsDuplicate([1, 1, 3]))