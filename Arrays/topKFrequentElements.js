const topKFrequentElements = (nums, k) => {
    let freqMap = new Map();
    let result = [];
    let values = [];

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (let [num, freq] of freqMap) {
        values[freq] = (values[freq] || new Set()).add(num);
    }

    for (let i = values.length - 1; i >= 0; i--) {
        if (values[i]) result.push(...values[i])
        if (result.length === k) break;
    }

    return result;
}

// [1, 1, 1, 2, 2, 3, 3] k = 2
let nums = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4];
console.log(topKFrequentElements(nums, 2));