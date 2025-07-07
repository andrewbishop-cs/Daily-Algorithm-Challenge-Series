import recommend from './solution';

// purchase History matrix, viewed Products matrix and expected output
let testCases = [
  {purchaseHistory: [[1, 0, 0], [0, 0, 0], [1, 0, 0]], viewedProducts: [[0, 1, 1], [1, 1, 0], [0, 1, 0]], expected:1},
  {purchaseHistory: [[0, 0, 0], [0, 1, 0], [0, 0, 0]], viewedProducts: [[1, 0, 1], [1, 0, 1], [1, 0, 0]], expected:0},
  {purchaseHistory: [[1, 0, 1], [0, 1, 0], [0, 0, 0]], viewedProducts: [[0, 1, 0], [1, 0, 1], [0, 0, 0]], expected:-1},
  // User has purchased all products, should return -1
  {purchaseHistory: [[1,1,1],[1,1,1],[1,1,1]], viewedProducts: [[1,1,1],[1,1,1],[1,1,1]], expected: -1},
  // User has viewed but not purchased any products, should return the most viewed (0)
  {purchaseHistory: [[0,0,0],[0,0,0],[0,0,0]], viewedProducts: [[1,0,0],[1,0,0],[1,0,0]], expected: 0},
  // User has viewed two products equally, not purchased either, should return either (0 or 1)
  {purchaseHistory: [[0,0],[0,0]], viewedProducts: [[1,0],[0,1]], expected: [0, 1]}, // Accepts 0 or 1
];

for(let i = 0; i < testCases.length; i++) {
  let output = recommend(testCases[i].purchaseHistory, testCases[i].viewedProducts);
  let expected = testCases[i].expected;
  let pass = Array.isArray(expected) ? expected.includes(output) : output === expected;
  let expectedStr = Array.isArray(expected) ? `[${expected.join(', ')}]` : expected;
  console.log(`\nTest case ${i+1}:`);
  console.log(`  Purchase History: ${JSON.stringify(testCases[i].purchaseHistory)}`);
  console.log(`  Viewed Products:  ${JSON.stringify(testCases[i].viewedProducts)}`);
  console.log(`  Output:           ${output}`);
  console.log(`  Expected:         ${expectedStr}`);
  console.log(pass ? `✅ PASS` : `❌ FAIL`);
}
