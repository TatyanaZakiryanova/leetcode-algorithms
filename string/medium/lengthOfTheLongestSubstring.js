// Length of the longest substring
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// medium

function lengthOfTheLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

console.log(lengthOfTheLongestSubstring('abcabcbb')); //3
