/*
	Our organization relies on a system that collects a wide array of statistics and we need 
	to analyze some of this data further. The data comes in the form of a 2D matrix, with each 
	cell representing a different statistic. We want to generate a frequency distribution of the 
	statistics, showing how frequently each statistic appears across the entire matrix.

	In order to do this, we need to design a function `generateFrequencyDistribution(matrix)`. 
	This function takes a 2D matrix as input and outputs a Map where each key is a distinct 
	statistic from the matrix and each value is the count of that statistic in the matrix. 

	This function should handle matrices of varying sizes and the statistics in the matrix can 
	be any non-negative integer. If the matrix is empty, the function should return an empty 
	Map. 

	Warm-up Challenges:

	1. (Easy/Medium) - https://leetcode.com/problems/count-servers-that-communicate/
	2. (Medium/Hard) - https://leetcode.com/problems/pacific-atlantic-water-flow/ 
*/

export function generateFrequencyDistribution(matrix: number[][]): Map<number, number> {
  	// TODO: implement code here
  	let statCounts: Map<number, number> = new Map();
  	return statCounts;
}
