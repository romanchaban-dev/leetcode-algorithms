# Return to Sky

## TypeScript solutions

Install dependencies with `npm install`. Save TypeScript solutions as
`solution.ts` inside a task folder, then run `npm run build` to type-check and
compile every TypeScript solution from `tasks/` into `dist/`.

For example:

```ts
function twoSum(numbers: number[], target: number): number[] | undefined {
  const indices = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const needed = target - numbers[i];
    const match = indices.get(needed);

    if (match !== undefined) return [match, i];
    indices.set(numbers[i], i);
  }
}
```

Existing JavaScript solutions can remain as `.js` files; the TypeScript build
only checks and compiles `.ts` files.
