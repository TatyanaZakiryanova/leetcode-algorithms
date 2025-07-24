// Valid parentheses

// https://leetcode.com/problems/valid-parentheses/
// easy

// Solution: stack
// O(n)
function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid('()[]{}')); //true
console.log(isValid('(]')); //false
