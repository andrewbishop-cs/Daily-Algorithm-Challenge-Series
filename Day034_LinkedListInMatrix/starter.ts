/*

Here at EvolvePayroll, we are working with the Attendance System. The system marks the user's
attendance by returning a 2D matrix with 'A' for non-attendance and 'O' for attendance.

We are tasked to troubleshoot and improve a key part of our system that identifies the longest
sequence of non-attendance days. This sequence is marked by consecutive 'A's on the diagonal of
the 2D matrix.

Write a function that scans the 2D matrix and returns the count of the longest consecutive
sequence of 'A's on the diagonal. Diagonal sequence starts from the top left and moves down to
the right bottom of the 2D matrix.

Warm-up LeetCode problems:

Easy/Medium: 'Valid Parentheses' (https://leetcode.com/problems/valid-parentheses/)
Medium/Hard: 'Longest Consecutive Sequence' (https://leetcode.com/problems/longest-consecutive-sequence/)

Example:

Input:
[
  ['A', 'O', 'O', 'A'],
  ['O', 'A', 'A', 'O'],
  ['A', 'O', 'A', 'O'],
  ['A', 'A', 'O', 'A']
]

Output: 4 (since the longest sequence of 'A's in the diagonal is 4)

* Note: You can assume that the input 2D matrix is a square matrix.

*/

export function longestDiagonalNonAttendanceSequence(matrix: string[][]): number {
	// TODO: implement code here
	return 0;
}
