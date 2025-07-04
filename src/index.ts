import seedrandom from 'seedrandom';

export const shuffle = <T>(seed: string, array: T[]): T[] => {
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
