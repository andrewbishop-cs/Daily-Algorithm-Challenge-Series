import multiProductOptimizer from './solution';

// Test data
const products: Array<[string, number]> = [
  ['apple', 100],
  ['grapes', 200],
  ['orange', 250],
];

const testCases: {
  products: Array<[string, number]>;
  target: number;
  expected: string[][];
}[] = [
  {
    // 350 = 100 + 250 is the highest sum ≤350; no other way to hit 350.
    products,
    target: 350,
    expected: [['apple', 'orange']],
  },
  {
    // 1000 = 10×100 (10 apples) is the highest sum ≤1000,
    // and that also has the maximum item count (10)
    products,
    target: 1000,
    expected: [Array(10).fill('apple')],
  },
  {
    // 200 = 2×100 (2 apples) and 1×200 (1 grape) both reach sum=200,
    // but 2-apples has count=2 vs grape has count=1 → pick ['apple','apple']
    products,
    target: 200,
    expected: [['apple', 'apple']],
  },
];

testCases.forEach(({ products, target, expected }, i) => {
  const res = multiProductOptimizer(products, target);

  const pass = Array.isArray(res)
    && res.length === expected.length
    && res.every((combo) =>
      expected.some((exp) => JSON.stringify(exp) === JSON.stringify(combo))
    );

  if (pass) {
    console.log(`✅ Test case #${i + 1} passed.`);
  } else {
    console.error(
      `❌ Test case #${i + 1} failed.\n`,
      ` target=${target}\n`,
      ` got   = ${JSON.stringify(res)}\n`,
      ` want  = ${JSON.stringify(expected)}`
    );
  }
});
