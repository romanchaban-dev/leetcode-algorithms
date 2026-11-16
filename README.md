# Leetcode Algorithms

This repository is my personal collection of algorithmic problem solutions, mainly from LeetCode, written in TypeScript. The goal is to practice data structures, problem-solving patterns, and clean coding habits while preparing for technical interviews and improving my algorithmic thinking.

## What this repo contains

I organize each problem in its own folder under `problems/`, with a single file named `solution.ts` containing the implementation and a short explanation of the approach.

Examples from this repo include:

- Two Sum
- Valid Palindrome
- Longest Substring Without Repeating Characters
- Binary Search
- Search Insert Position
- Fruit Into Baskets
- Merge Sorted Array
- Maximum Average Subarray I

The solutions focus on practical interview-level patterns such as:

- Hash maps and sets
- Two pointers
- Sliding window
- Binary search
- Array manipulation
- Greedy and counting techniques

## Repository structure

```text
leetcode-algorithms/
├── problems/
│   ├── 1-two-sum/
│   │   └── solution.ts
│   ├── 3-longest-substring-without-repeating-characters/
│   │   └── solution.ts
│   ├── 35-search-insert-position/
│   │   └── solution.ts
│   └── ...
├── dist/
├── node_modules/
├── package.json
├── tsconfig.json
├── README.md
├── algorithm.doc
└── .gitignore
```

Each problem folder contains one solution file, and the project compiles TypeScript sources into the `dist/` directory.

## Why this repo is useful

This project helps me:

- practice algorithmic thinking regularly
- review patterns I have already solved
- keep solutions organized by topic and difficulty
- improve TypeScript skills while solving real coding problems
- build a quick reference for later revision

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Build the TypeScript solutions:

```bash
npm run build
```

3. Type-check without emitting files:

```bash
npm run typecheck
```

## Project scripts

The project uses a minimal setup:

- `npm run build` — compiles TypeScript files from `problems/` to `dist/`
- `npm run typecheck` — checks for TypeScript errors without generating output

## How solutions are written

Each solution follows a similar pattern:

```ts
// LeetCode 1: Two Sum
// https://leetcode.com/problems/two-sum/

const twoSum = (numbers: number[], target: number): number[] | undefined => {
  const hashMap = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const needed = target - numbers[i];
    const match = hashMap.get(needed);

    if (match !== undefined) {
      return [match, i];
    }

    hashMap.set(numbers[i], i);
  }
};

// Time: O(n)
// Space: O(n)
```

Typical conventions in this repo:

- one problem = one folder
- file name is always `solution.ts`
- function names match the problem concept
- comments include problem title and LeetCode URL
- time and space complexity are noted at the end

## Adding a new problem

To add a new LeetCode task:

1. Create a folder named like `problems/242-valid-anagram/`
2. Add a file named `solution.ts`
3. Write the implementation and complexity notes
4. Run `npm run build` to verify it compiles

Example:

```text
problems/
└── 242-valid-anagram/
    └── solution.ts
```

## Notes

This repository is intentionally simple and focused on problem-solving practice. It is not a full production app; it is a structured set of algorithmic exercises and reference solutions.

If you are exploring this project, think of it as a personal coding notebook for interview preparation and algorithm mastery.
