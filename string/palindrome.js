// Palindrome
// https://leetcode.com/problems/valid-palindrome/
// Проверить, является ли строка палиндромом, игнорировать пробелы и регистр

function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const len = clean.length;

  for (let i = 0; i < len / 2; i++) {
    if (clean[i] !== clean[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
