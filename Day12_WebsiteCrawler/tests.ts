import { crawlWebsite } from './solution';

// Mock website structure with deeper relationships
const mockWebsites: { [key: string]: string[] } = {
    // LeetCode domain with deeper structure
    'http://leetcode.com': [
        'http://problems.leetcode.com',
        'http://contest.leetcode.com',
        'http://discuss.leetcode.com'
    ],
    'http://problems.leetcode.com': [
        'http://problems.leetcode.com/easy',
        'http://problems.leetcode.com/medium',
        'http://problems.leetcode.com/hard'
    ],
    'http://problems.leetcode.com/easy': [
        'http://problems.leetcode.com/easy/two-sum',
        'http://problems.leetcode.com/easy/palindrome'
    ],
    'http://problems.leetcode.com/medium': [
        'http://problems.leetcode.com/medium/add-numbers',
        'http://problems.leetcode.com/medium/merge-sort'
    ],
    'http://problems.leetcode.com/hard': [
        'http://problems.leetcode.com/hard/sudoku',
        'http://problems.leetcode.com/hard/n-queens'
    ],
    'http://contest.leetcode.com': [
        'http://contest.leetcode.com/weekly',
        'http://contest.leetcode.com/biweekly'
    ],
    'http://discuss.leetcode.com': [
        'http://discuss.leetcode.com/problems',
        'http://discuss.leetcode.com/interview'
    ],

    // Google domain with deeper structure
    'http://google.com': [
        'http://mail.google.com',
        'http://drive.google.com',
        'http://photos.google.com',
        'http://docs.google.com'
    ],
    'http://mail.google.com': [
        'http://mail.google.com/inbox',
        'http://mail.google.com/sent',
        'http://mail.google.com/drafts'
    ],
    'http://drive.google.com': [
        'http://drive.google.com/my-drive',
        'http://drive.google.com/shared',
        'http://drive.google.com/recent'
    ],
    'http://docs.google.com': [
        'http://docs.google.com/document',
        'http://docs.google.com/spreadsheet',
        'http://docs.google.com/presentation'
    ],

    // A website with circular references
    'http://circular.com': [
        'http://circular.com/page1',
        'http://circular.com/page2'
    ],
    'http://circular.com/page1': [
        'http://circular.com/page2',
        'http://circular.com/page3'
    ],
    'http://circular.com/page2': [
        'http://circular.com/page1',
        'http://circular.com/page3'
    ],
    'http://circular.com/page3': [
        'http://circular.com/page1',
        'http://circular.com/page2'
    ],

    // Empty page (no links)
    'http://emptyPage.com': []
};

/**
 * Mock function that simulates fetching URLs from a webpage.
 * @param url The URL to fetch links from
 * @returns Array of URLs found on the page
 */
export function getLinks(url: string): string[] {
    return mockWebsites[url] || [];
}

let passed = 0;
let failed = 0;

function compareArrays(arr1: string[], arr2: string[]): boolean {
    // Sort arrays to ensure order doesn't matter
    const sorted1 = [...arr1].sort();
    const sorted2 = [...arr2].sort();
    
    if (sorted1.length !== sorted2.length) {
        return false;
    }
    for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i] !== sorted2[i]) {
            return false;
        }
    }
    return true;
}

function testScenario(rootURL: string, expectedResult: string[]) {
    const result = crawlWebsite(rootURL);
    const testPassed = compareArrays(result, expectedResult);
    
    console.log(`Test case: ${rootURL}`);
    console.log(`Expected URLs: ${JSON.stringify(expectedResult.sort())}`);
    console.log(`Got URLs: ${JSON.stringify(result.sort())}`);
    console.log(`Result: ${testPassed ? '✅ PASSED' : '❌ FAILED'}\n`);
    
    if (testPassed) {
        passed++;
    } else {
        failed++;
    }
}

// Test cases
console.log('Running website crawler tests...\n');

// Test LeetCode domain (deep structure)
testScenario('http://leetcode.com', [
    'http://leetcode.com',
    'http://problems.leetcode.com',
    'http://problems.leetcode.com/easy',
    'http://problems.leetcode.com/easy/two-sum',
    'http://problems.leetcode.com/easy/palindrome',
    'http://problems.leetcode.com/medium',
    'http://problems.leetcode.com/medium/add-numbers',
    'http://problems.leetcode.com/medium/merge-sort',
    'http://problems.leetcode.com/hard',
    'http://problems.leetcode.com/hard/sudoku',
    'http://problems.leetcode.com/hard/n-queens',
    'http://contest.leetcode.com',
    'http://contest.leetcode.com/weekly',
    'http://contest.leetcode.com/biweekly',
    'http://discuss.leetcode.com',
    'http://discuss.leetcode.com/problems',
    'http://discuss.leetcode.com/interview'
]);

// Test Google domain (deep structure)
testScenario('http://google.com', [
    'http://google.com',
    'http://mail.google.com',
    'http://mail.google.com/inbox',
    'http://mail.google.com/sent',
    'http://mail.google.com/drafts',
    'http://drive.google.com',
    'http://drive.google.com/my-drive',
    'http://drive.google.com/shared',
    'http://drive.google.com/recent',
    'http://photos.google.com',
    'http://docs.google.com',
    'http://docs.google.com/document',
    'http://docs.google.com/spreadsheet',
    'http://docs.google.com/presentation'
]);

// Test circular references
testScenario('http://circular.com', [
    'http://circular.com',
    'http://circular.com/page1',
    'http://circular.com/page2',
    'http://circular.com/page3'
]);

// Test empty page
testScenario('http://emptyPage.com', ['http://emptyPage.com']);

console.log('Test Summary:');
console.log(`Total tests passed: ${passed}`);
console.log(`Total tests failed: ${failed}`);
