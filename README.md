# 🫘 senzu-shuffle

A simple, deterministic shuffling utility for arrays using a seed string.

## Installation

Install the package using npm:

```bash
npm install senzu-shuffle
```

## Usage

The `shuffle` function takes a seed string and an array of any type and returns a new, shuffled array. The shuffle is deterministic, meaning the same seed and input array will always produce the same shuffled output.

```typescript
import { shuffle } from 'senzu-shuffle';

const seed = 'your-secret-seed';
const originalArray = [1, 2, 3, 4, 5];

const shuffledArray = shuffle(seed, originalArray);

console.log(shuffledArray);
// => [ 4, 1, 5, 2, 3 ] (Example output, will be consistent for the seed)
```

## API

### `shuffle<T>(seed: string, array: T[]): T[]`

-   **`seed`** (`string`): A string used to seed the random number generator. This ensures the shuffle is deterministic.
-   **`array`** (`T[]`): The array to be shuffled. The function is generic and works with arrays of any type.
-   **Returns**: (`T[]`) A new array containing the same elements as the input array, but in a shuffled order.

## Tests

To run the test suite, use the following command:

```bash
npm test
```
