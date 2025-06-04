import { DeploymentScheduler } from './solution';

let scheduler = new DeploymentScheduler();

function runTest(testName: string, expected: string, actual: string) {
    if (expected === actual) {
        console.log(`✅ ${testName} passed.`);
    } else {
        console.log(`❌ ${testName} failed.`);
        console.log(`   Expected: "${expected}"`);
        console.log(`   Got:      "${actual}"`);
    }
}

// test case 1
scheduler.addTask('server1', 'task1');
let result = scheduler.scheduleDeployment('server1', 'deployment1');
runTest('Test case 1', 'Server server1 is busy. Current task: task1', result);

// test case 2
scheduler.addTask('server1', 'task2');
result = scheduler.scheduleDeployment('server1', 'deployment1');
runTest('Test case 2', 'Server server1 is busy. Current task: task2', result);

// test case 3
scheduler.addTask('server2', 'task1');
result = scheduler.scheduleDeployment('server2', 'deployment2');
runTest('Test case 3', 'Server server2 is busy. Current task: task1', result);

// test case 4
scheduler.addTask('server2', 'task2');
result = scheduler.scheduleDeployment('server2', 'deployment2');
runTest('Test case 4', 'Server server2 is busy. Current task: task2', result);

// fixed edge case 1: no prior tasks, should succeed
result = scheduler.scheduleDeployment('server3', 'deployment3');
runTest('Test case 5', 'Deployment deployment3 scheduled on server server3', result);

// fixed edge case 2: no prior tasks, should succeed
result = scheduler.scheduleDeployment('server4', 'deployment4');
runTest('Test case 6', 'Deployment deployment4 scheduled on server server4', result);

// edge case 3
result = scheduler.scheduleDeployment('', 'deployment5');
runTest('Test case 7', 'No server name provided', result);

// edge case 4
result = scheduler.scheduleDeployment('', 'deployment6');
runTest('Test case 8', 'No server name provided', result);
