import { maxNonOverlappingEvents, Event } from './solution';

function testMaxEvents(
  name: string,
  input: Event[],
  expected: Event[]
) {
  const result = maxNonOverlappingEvents(input).map(e => ({ start: e.start, end: e.end }));
  const pass =
    result.length === expected.length &&
    result.every((e, i) => e.start === expected[i].start && e.end === expected[i].end);
  console.log(
    `[${name}]`,
    pass ? '✅' : '❌',
    '\n  result:   ', result,
    '\n  expected: ', expected,
    '\n'
  );
}

// 1) Simple non-overlapping
testMaxEvents(
  'NonOverlapping',
  [ {start: 1,end:2}, {start:3,end:4}, {start:5,end:6} ],
  [ {start:1,end:2}, {start:3,end:4}, {start:5,end:6} ]
);

// 2) All overlapping, pick the one that ends earliest
testMaxEvents(
  'AllOverlap',
  [ {start:1,end:10}, {start:2,end:5}, {start:3,end:4} ],
  [ {start:3,end:4} ]
);

// 3) Mixed overlaps
testMaxEvents(
  'Mixed',
  [ {start:1,end:3}, {start:2,end:4}, {start:3,end:5}, {start:6,end:7} ],
  [ {start:1,end:3}, {start:3,end:5}, {start:6,end:7} ]
);

// 4) Back‑to‑back events allowed
testMaxEvents(
  'BackToBack',
  [ {start:1,end:3}, {start:3,end:6}, {start:6,end:8} ],
  [ {start:1,end:3}, {start:3,end:6}, {start:6,end:8} ]
);

// 5) Empty list
testMaxEvents(
  'Empty',
  [],
  []
);
