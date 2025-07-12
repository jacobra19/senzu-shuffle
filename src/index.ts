import seedrandom from 'seedrandom';

/**
 * Deterministically shuffles an array using Fisher-Yates algorithm
 * @param seed - String used to seed the random number generator
 * @param array - Array to shuffle (not mutated)
 * @returns New shuffled array with same elements
 * @throws {Error} When seed is empty or array is invalid
 * @example
 * ```typescript
 * shuffle('my-seed', [1, 2, 3]) // Always returns same order for same seed
 * ```
 */
export const shuffle = <T>(seed: string, array: T[]): T[] => {
  if (!seed || typeof seed !== 'string') {
    throw new Error('Seed must be a non-empty string');
  }
  if (!Array.isArray(array)) {
    throw new Error('Second argument must be an array');
  }

  const newArray = [...array];
  const randomNumberGenerator = seedrandom(seed);

  // Fisher-Yates shuffle algorithm
  for (let i = newArray.length - 1; i > 0; i--) {
    const randomNumber = randomNumberGenerator();
    const j = Math.floor(randomNumber * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};
