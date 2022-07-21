const groupAnagrams = (strs) => {
    let map = {};
    for (let str of strs) {
        const key = [...str].sort();
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(str);
    }
    return Object.values(map);
}

const strs = ["tea", "ate", "bat", "nat", "tan"]
console.log(groupAnagrams(strs))