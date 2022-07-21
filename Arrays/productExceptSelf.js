const productExceptSelf = (nums) => {
    let result = [];
    let left = 1;
    let right = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = right;
        right = right * nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        result[i] *= left;
        left *= nums[i];
    }

    return result;
}

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums))

//[24, 12, 8, 6]
// [ 1, 1, 2, 6 ]
// [ 24, 12, 4, 1 ]