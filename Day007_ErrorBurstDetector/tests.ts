import { hasErrorBurst } from './solution';

function testBurst(
  name: string,
  timestamps: number[],
  windowSeconds: number,
  maxErrors: number,
  expected: boolean
) {
  const result = hasErrorBurst(timestamps, windowSeconds, maxErrors);
  const pass = result === expected;
  console.log(
    `[${name}]`,
    pass ? '✔' : '✘',
    `=> got ${result}, expected ${expected}`
  );
}

// 1) Empty log: never a burst
testBurst('Empty', [], 5, 1, false);

// 2) Sparse events: no window exceeds 1 error
testBurst('NoBurst', [1, 4, 7, 10], 2, 1, false);

// 3) Exactly at limit (no burst)
testBurst('ExactLimit', [1, 3], 2, 2, false);

// 4) Three in a 2s window → burst
//    Window at t=3 covers [1,3] → events at 1,2,3 => 3 > 2
testBurst('BurstAtT3', [1, 2, 3], 2, 2, true);

// 5) Later burst
//    [4,5,6] are within 2s window at t=6 → 3 > 2
testBurst('BurstLater', [1, 4, 5, 6, 10], 2, 2, true);

// 6) Zero window: any event is immediately outside older ones
//    But if maxErrors=0, first event itself > 0 → burst
testBurst('ZeroWindowNoErrorsAllowed', [5], 0, 0, true);
