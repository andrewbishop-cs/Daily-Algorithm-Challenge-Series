import balanceNodes from './solution';

function compareMaps(actual: Map<string, string[]>, expected: Map<string, string[]>): { passed: boolean; message: string } {
    if (actual.size !== expected.size) {
        return {
            passed: false,
            message: `Expected ${expected.size} nodes but got ${actual.size} nodes`
        };
    }

    for (const [key, expectedValue] of expected) {
        const actualValue = actual.get(key);
        if (!actualValue) {
            return {
                passed: false,
                message: `Expected node '${key}' not found in result`
            };
        }

        const sortedExpected = expectedValue.sort();
        const sortedActual = actualValue.sort();
        
        if (JSON.stringify(sortedExpected) !== JSON.stringify(sortedActual)) {
            return {
                passed: false,
                message: `Node '${key}' mismatch:\nExpected: [${sortedExpected.join(', ')}]\nGot: [${sortedActual.join(', ')}]`
            };
        }
    }

    return { passed: true, message: 'All nodes match' };
}

const tests: { nodes: Map<string, string[]>, expected: Map<string, string[]> }[] = [
    {
        nodes: new Map([['A', ['B', 'C']], ['B', ['A', 'C']], ['C', ['A']]]),
        expected: new Map([['A', ['B', 'C']], ['B', ['A', 'C']], ['C', ['A', 'B']]])
    },
    {
        nodes: new Map([['A', ['B']], ['B', ['A']], ['C', ['A']]]),
        expected: new Map([['A', ['B', 'C']], ['B', ['A']], ['C', ['A']]])
    },
    {
        nodes: new Map([['A', ['A']]]),
        expected: new Map([['A', ['A']]])
    }
];

console.log('🧪 Running Node Balancing Tests\n');

tests.forEach((test, idx) => {
    console.log(`Test ${idx + 1}:`);
    console.log('Input nodes:');
    for (const [node, connections] of test.nodes) {
        console.log(`  ${node} -> [${connections.join(', ')}]`);
    }
    
    const res = balanceNodes(test.nodes);
    const testResult = compareMaps(res, test.expected);
    
    if (testResult.passed) {
        console.log('✅ Test passed\n');
    } else {
        console.log('❌ Test failed');
        console.log(testResult.message);
        console.log('Expected result:');
        for (const [node, connections] of test.expected) {
            console.log(`  ${node} -> [${connections.join(', ')}]`);
        }
        console.log('Actual result:');
        for (const [node, connections] of res) {
            console.log(`  ${node} -> [${connections.join(', ')}]`);
        }
        console.log('');
    }
});
