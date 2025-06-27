import { AutoCompleteSystem } from './solution';

function printTestResults(functionName: string, passed: boolean, details?: string) {
    console.log(`${functionName}: ${passed ? '✅' : '❌'}`);
    if (details) {
        console.log(`  ${details}`);
    }
    console.log('');
}

console.log('🧪 Starting AutoComplete System Tests\n');

// Basic functionality tests
console.log('📋 Basic Functionality Tests:');
let autoCompleteSystem = new AutoCompleteSystem(['washing hands', 'cleaning dishes', 'making dinner with tofu']);
printTestResults('Constructor Test', autoCompleteSystem instanceof AutoCompleteSystem, 
    'AutoCompleteSystem should be instantiated correctly');

autoCompleteSystem.addPhrase('washing machine');
let washingResults = autoCompleteSystem.autoComplete('washing');
printTestResults('Add Phrase Test', washingResults.includes('washing machine'), 
    `Expected: 'washing machine' in results, Got: [${washingResults.join(', ')}]`);

let returnedPhrases = autoCompleteSystem.autoComplete('making dinner');
printTestResults('AutoComplete Basic Test', Array.isArray(returnedPhrases) && returnedPhrases.length > 0, 
    `Expected: non-empty array, Got: [${returnedPhrases.join(', ')}]`);

// Test the specific example from the description
console.log('📝 Specific Example Tests (from problem description):');
let exampleSystem = new AutoCompleteSystem(['washing hands in hot soap']);
let exampleResult = exampleSystem.autoComplete('washing');
printTestResults('Example: "washing" prefix', exampleResult.includes('washing hands in hot soap'), 
    `Expected: 'washing hands in hot soap', Got: [${exampleResult.join(', ')}]`);

// Test that non-prefix matches return empty results (as mentioned in description)
let nonPrefixResult = exampleSystem.autoComplete('hands in');
printTestResults('Non-prefix returns empty', nonPrefixResult.length === 0, 
    `Expected: empty array, Got: [${nonPrefixResult.join(', ')}] (should not match non-prefix)`);

// Test multiple completions for the same prefix
console.log('🔍 Multiple Completions Tests:');
let multiSystem = new AutoCompleteSystem(['cat', 'car', 'card', 'carpet']);
let multiResult = multiSystem.autoComplete('ca');
let expectedMulti = ['cat', 'car', 'card'];
let hasAllExpected = expectedMulti.every(phrase => multiResult.includes(phrase));
printTestResults('Multiple completions for "ca"', hasAllExpected && multiResult.length >= 3, 
    `Expected: ${expectedMulti.join(', ')}, Got: [${multiResult.join(', ')}]`);

// Test single character prefix
let singleCharResult = multiSystem.autoComplete('c');
printTestResults('Single character prefix "c"', singleCharResult.length >= 4, 
    `Expected: 4+ results, Got: [${singleCharResult.join(', ')}] (${singleCharResult.length} items)`);

// Test exact match
let exactResult = multiSystem.autoComplete('cat');
printTestResults('Exact match "cat"', exactResult.includes('cat'), 
    `Expected: 'cat', Got: [${exactResult.join(', ')}]`);

// Test non-existent prefix
let nonExistentResult = multiSystem.autoComplete('xyz');
printTestResults('Non-existent prefix "xyz"', nonExistentResult.length === 0, 
    `Expected: empty array, Got: [${nonExistentResult.join(', ')}]`);

// Test empty prefix
let emptyResult = multiSystem.autoComplete('');
printTestResults('Empty prefix returns all phrases', emptyResult.length >= 4, 
    `Expected: all phrases, Got: [${emptyResult.join(', ')}] (${emptyResult.length} items)`);

// Test with spaces (as mentioned in description)
console.log('🌐 Space Handling Tests:');
let spaceSystem = new AutoCompleteSystem(['hello world', 'hello there', 'goodbye world']);
let spaceResult = spaceSystem.autoComplete('hello ');
let expectedSpace = ['hello world', 'hello there'];
let hasSpaceExpected = expectedSpace.every(phrase => spaceResult.includes(phrase));
printTestResults('Prefix with space "hello "', hasSpaceExpected && spaceResult.length >= 2, 
    `Expected: ${expectedSpace.join(', ')}, Got: [${spaceResult.join(', ')}]`);

// Test adding phrases after construction
spaceSystem.addPhrase('hello friend');
let afterAddResult = spaceSystem.autoComplete('hello');
printTestResults('AutoComplete after addPhrase', afterAddResult.includes('hello friend'), 
    `Expected: 'hello friend' in results, Got: [${afterAddResult.join(', ')}]`);

// Test case sensitivity (should be case sensitive based on implementation)
console.log('🔤 Case Sensitivity Tests:');
let caseSystem = new AutoCompleteSystem(['Hello', 'hello', 'HELLO']);
let caseResult = caseSystem.autoComplete('h');
let hasLowercase = caseResult.includes('hello');
let noUppercase = !caseResult.includes('Hello');
printTestResults('Case sensitive matching "h"', hasLowercase && noUppercase, 
    `Expected: only 'hello', Got: [${caseResult.join(', ')}]`);

// Test with numbers and special characters (though description says only a-z and spaces)
console.log('🔢 Special Characters Tests:');
let specialSystem = new AutoCompleteSystem(['test123', 'test@email.com']);
let specialResult = specialSystem.autoComplete('test');
printTestResults('Special characters in phrases', specialResult.length >= 2, 
    `Expected: 2+ results, Got: [${specialResult.join(', ')}] (${specialResult.length} items)`);

// Test that phrases are not duplicated
console.log('🔄 Duplicate Prevention Tests:');
let duplicateSystem = new AutoCompleteSystem(['test']);
duplicateSystem.addPhrase('test');
let duplicateResult = duplicateSystem.autoComplete('t');
let testCount = duplicateResult.filter(phrase => phrase === 'test').length;
printTestResults('No duplicate phrases', testCount === 1, 
    `Expected: 1 occurrence of 'test', Got: ${testCount} occurrences in [${duplicateResult.join(', ')}]`);

// Additional edge case tests
console.log('⚡ Edge Case Tests:');
let edgeSystem = new AutoCompleteSystem(['a', 'ab', 'abc', 'abcd']);
let singleCharEdge = edgeSystem.autoComplete('a');
printTestResults('Single character phrases', singleCharEdge.includes('a'), 
    `Expected: 'a' in results, Got: [${singleCharEdge.join(', ')}]`);

let longPrefix = edgeSystem.autoComplete('abc');
printTestResults('Long prefix match', longPrefix.includes('abc'), 
    `Expected: 'abc' in results, Got: [${longPrefix.join(', ')}]`);

// Test with mixed case scenarios
let mixedSystem = new AutoCompleteSystem(['Test', 'test', 'TEST']);
let mixedResult = mixedSystem.autoComplete('t');
printTestResults('Mixed case handling', mixedResult.includes('test'), 
    `Expected: 'test' in results, Got: [${mixedResult.join(', ')}]`);

console.log('🎉 All tests completed!');
console.log('\n📊 Summary:');
console.log('- Basic functionality: Constructor, addPhrase, autoComplete');
console.log('- Problem examples: Prefix matching vs non-prefix');
console.log('- Multiple completions: Same prefix, different phrases');
console.log('- Edge cases: Empty prefix, non-existent prefix, exact matches');
console.log('- Character handling: Spaces, case sensitivity, special characters');
console.log('- Dynamic updates: Adding phrases after construction');
console.log('- Data integrity: No duplicate phrases');
