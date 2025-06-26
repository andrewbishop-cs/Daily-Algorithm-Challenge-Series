import {floodFill} from './solution';

const testCases: { matrix: number[][], x: number, y: number, newColor: number, expectation: number[][], description: string }[] = [
  {
    matrix: [[0, 0, 0], [0, 1, 1]],
    x: 1,
    y: 1,
    newColor: 1,
    expectation: [[0, 0, 0], [0, 1, 1]],
    description: 'No fill needed (already newColor)'
  },
  {
    matrix: [[1,1,1],[1,1,0],[1,0,1]],
    x: 1,
    y: 1,
    newColor: 2,
    expectation: [[2,2,2],[2,2,0],[2,0,1]],
    description: 'Fill center region with new color'
  },
  {
    matrix: [[1]],
    x: 0,
    y: 0,
    newColor: 2,
    expectation: [[2]],
    description: 'Single pixel matrix'
  },
  {
    matrix: [[1,1],[1,1]],
    x: 0,
    y: 0,
    newColor: 3,
    expectation: [[3,3],[3,3]],
    description: 'All pixels same color, fill all'
  },
  {
    matrix: [[1,2,2],[2,2,2],[2,2,1]],
    x: 0,
    y: 0,
    newColor: 9,
    expectation: [[9,2,2],[2,2,2],[2,2,1]],
    description: 'Fill only one pixel (unique color)'
  },
  {
    matrix: [[1,1,1],[1,1,1],[1,1,1]],
    x: 2,
    y: 2,
    newColor: 1,
    expectation: [[1,1,1],[1,1,1],[1,1,1]],
    description: 'No fill needed, all already newColor'
  },
  {
    matrix: [[0,0,0],[0,1,1],[0,1,1]],
    x: 0,
    y: 0,
    newColor: 5,
    expectation: [[5,5,5],[5,1,1],[5,1,1]],
    description: 'Fill border region only'
  },
  {
    matrix: [[1,2,3],[4,5,6],[7,8,9]],
    x: 1,
    y: 1,
    newColor: 0,
    expectation: [[1,2,3],[4,0,6],[7,8,9]],
    description: 'Fill a single cell in the middle (unique color)'
  },
  {
    matrix: [[1,1,1],[1,2,1],[1,1,1]],
    x: 1,
    y: 1,
    newColor: 3,
    expectation: [[1,1,1],[1,3,1],[1,1,1]],
    description: 'Fill a single cell surrounded by different color'
  },
];

for(const {matrix, x, y, newColor, expectation, description} of testCases){
  let result;
  let pass = false;
  try{
    // Deep copy matrix to avoid mutation between tests
    const inputMatrix = matrix.map(row => [...row]);
    result = floodFill(inputMatrix, x, y, newColor);
    pass = JSON.stringify(result) === JSON.stringify(expectation);
    console.log(`${pass ? '✅' : '❌'} ${description}`);
    console.log('   Input matrix:', JSON.stringify(matrix));
    console.log(`   Start: (${x},${y}), newColor: ${newColor}`);
    console.log('   Expected:', JSON.stringify(expectation));
    console.log('   Got     :', JSON.stringify(result));
    console.log('');
  } catch(e){
    console.log('❌ Test failed due to an uncaught error', e);
    console.log('   Input matrix:', JSON.stringify(matrix));
    console.log(`   Start: (${x},${y}), newColor: ${newColor}`);
    console.log('   Expected:', JSON.stringify(expectation));
    console.log('');
  }
}
