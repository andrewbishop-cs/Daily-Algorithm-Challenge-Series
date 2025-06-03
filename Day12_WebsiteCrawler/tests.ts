import crawlWebsite from './solution';

let passed = 0;
let failed = 0;

function compareArrays(arr1: string[], arr2: string[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function testScenario(rootURL: string, expectedResult: string[]) {
  let result = crawlWebsite(rootURL);
  if (compareArrays(result, expectedResult)) {
    console.log('✔️ Test passed');
    passed++;
  } else {
    console.log('❌ Test failed');
    failed++;
  }
}

testScenario('http://leetcode.com', ['http://leetcode.com', 'http://problems.leetcode.com', 'http://contest.leetcode.com']);
testScenario('http://google.com', ['http://google.com', 'http://mail.google.com', 'http://drive.google.com', 'http://photos.google.com']);
testScenario('http://emptyPage.com', ['http://emptyPage.com']);

console.log('Total tests passed: ', passed);
console.log('Total tests failed: ', failed);
