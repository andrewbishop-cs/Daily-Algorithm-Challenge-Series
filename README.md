# 🔄 Daily Algorithm Challenge Series

Welcome to your **ongoing**, **daily** coding exercise repository—designed to keep your algorithmic skills sharp and your practical engineering instincts honed.

---

## 📘 Overview

Each day you’ll tackle:

1. **Two LeetCode Warm‑Ups**

   * 1 **Easy/Medium** + 1 **Medium/Hard** problems chosen to reinforce common data‑structure and algorithm patterns.
2. **One Practical Challenge**

   * A “day‑job” style task that embeds classic algorithmic thinking in a real‑world scenario (e.g. rate‑limiters, LRU caches, stream mergers).

> **🚫 No AI Allowed!**
> These exercises are meant to be solved **without** generative assistance—treat each as a personal whiteboard session to build intuition and speed.

> Generative AI is permitted for future problem starter code and test code generation

---

## 📂 Repository Structure

Each day's folder is organized as:

```
Day<N>_<Problem_Name>/
  ├── starter.ts        # Stub code and problem description
  ├── solution.ts       # Your completed implementation
  └── tests.ts          # Test harness to validate your solution
```

For example:

```
Day1_NotificationFloodFill/
  ├── starter.ts
  ├── solution.ts
  └── tests.ts
Day2_ConfigCycleDetection/
  ├── starter.ts
  ├── solution.ts
  └── tests.ts
...
Day10_<Name>/
  ├── starter.ts
  ├── solution.ts
  └── tests.ts
```

This structure keeps starter code, your solution, and tests together for each day.

---

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your‑username>/daily-algorithm-challenges.git
   cd daily-algorithm-challenges
   ```

2. **Install dependencies** (if needed)

   ```bash
   npm install
   ```

3. **Pick a day and run its tests**

   ```bash
   cd Day4_EventStreamMerger
   npx ts-node EventStreamMerger.ts
   ```

4. **Implement your solution**

   * Copy over `starter.ts` code into `solution.ts` and begin implementing your solution
   * Run the test harness again to verify correctness.

---

## 📖 How It Works

* **Warm‑Ups**: Solve two LeetCode‑style problems (easy + medium) to reinforce core patterns.
* **Practical Challenge**: Apply those patterns in a real‑world scenario—no copy/paste or AI assistance!
* **Test Harnesses**: Each day’s folder includes self‑contained tests to confirm your implementation.

---

## 🤝 Contributing

* This is your personal challenge, but feel free to share improvements or extra test cases via pull requests.
* Structure new contributions under `Day<N>_YourChallengeName/` with stubs, tests, and a README.

---

## 📜 License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.
