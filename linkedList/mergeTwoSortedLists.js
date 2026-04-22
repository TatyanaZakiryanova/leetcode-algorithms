// Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/
// easy

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// list1: 1 → 2 → 4
let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

// list2: 1 → 3 → 4
let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

function mergeTwoLists(list1, list2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;
}

console.log(mergeTwoLists(list1, list2));
