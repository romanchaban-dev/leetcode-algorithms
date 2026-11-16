# TypeScript Algorithms & LeetCode Solutions

A focused collection of algorithm and data-structure solutions written in TypeScript. This repository documents my ongoing practice with common technical-interview problem patterns, with an emphasis on readable implementations, explicit types, and time/space complexity.

## What you'll find

- Solutions to LeetCode problems, organized by problem number and name
- Practice implementations of fundamental algorithms
- TypeScript types for function inputs, outputs, and data structures
- Complexity notes alongside solutions
- A strict TypeScript configuration and simple build/type-check scripts

## Topics

- Arrays and strings
- Hash maps and sets
- Two pointers
- Sliding window
- Binary search
- In-place array manipulation

## Selected solutions

| Problem | Main pattern |
| --- | --- |
| [Two Sum](problems/1-two-sum/solution.ts) | Hash map |
| [Longest Substring Without Repeating Characters](problems/3-longest-substring-without-repeating-characters/solution.ts) | Sliding window |
| [Merge Sorted Array](problems/88-merge-sorted-array/solution.ts) | Two pointers |
| [Group Anagrams](problems/49-group-anagrams/solution.ts) | Hash map |
| [Maximum Average Subarray I](problems/643-maximum-average-subarray-i/solution.ts) | Fixed-size sliding window |
| [Binary Search](problems/704-binary-search/solution.ts) | Binary search |
| [Fruit Into Baskets](problems/904-fruit-into-baskets/solution.ts) | Sliding window |

## Project structure

```text
problems/
├── 1-two-sum/
│   └── solution.ts
├── 3-longest-substring-without-repeating-characters/
│   └── solution.ts
├── ...
└── practice/
    └── solutions.ts
```

Each numbered directory contains a standalone `solution.ts` file. The `practice/` directory contains additional algorithm exercises.

## Getting started

Requirements: Node.js and npm.

```bash
npm ci
npm run typecheck
npm run build
```

`npm run typecheck` checks the TypeScript sources without emitting files. `npm run build` compiles them into `dist/`.

## Adding a solution

1. Create a directory under `problems/` named with the problem number and a short title.
2. Add a `solution.ts` file with the implementation.
3. Include the problem link and time/space complexity in the source comments.
4. Run `npm run typecheck` to check the project.

This is an evolving practice repository, not a production application. Solutions may be refined as I revisit problems and explore alternative approaches.
