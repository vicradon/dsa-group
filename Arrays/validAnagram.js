const validAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    let counts = {};
    for (let char of s) {
        counts[char] = (counts[char] || 0) + 1;
    }
    for (let char of t) {
        if (!counts[char]) return false;
        counts[char]--;
    }
    return true;
}

console.log(validAnagram("anagram", "nagaram"))