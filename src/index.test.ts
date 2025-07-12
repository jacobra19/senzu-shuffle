import { describe, it, expect } from 'vitest';
import { shuffle } from './index';

describe('shuffle', () => {
  it('should return a shuffled array with the same elements', () => {
    const seed = 'test-seed';
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffledArray = shuffle(seed, originalArray);

    expect(shuffledArray).not.toEqual(originalArray);
    expect(shuffledArray).toHaveLength(originalArray.length);
    expect(shuffledArray.sort()).toEqual(originalArray.sort());
  });

  it('should be deterministic, producing the same shuffled array for the same seed', () => {
    const seed = 'another-seed';
    const originalArray = ['a', 'b', 'c', 'd', 'e'];
    const shuffled1 = shuffle(seed, originalArray);
    const shuffled2 = shuffle(seed, originalArray);

    expect(shuffled1).toEqual(shuffled2);
  });

  it('should produce different shuffled arrays for different seeds', () => {
    const seed1 = 'seed-one';
    const seed2 = 'seed-two';
    const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const shuffled1 = shuffle(seed1, originalArray);
    const shuffled2 = shuffle(seed2, originalArray);

    expect(shuffled1).not.toEqual(shuffled2);
  });

  it('should handle an empty array', () => {
    const seed = 'empty-seed';
    const originalArray: any[] = [];
    const shuffledArray = shuffle(seed, originalArray);

    expect(shuffledArray).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const seed = 'single-seed';
    const originalArray = [42];
    const shuffledArray = shuffle(seed, originalArray);

    expect(shuffledArray).toEqual([42]);
  });

  // Error handling tests
  describe('error handling', () => {
    it('should throw error for empty seed', () => {
      expect(() => shuffle('', [1, 2, 3])).toThrow(
        'Seed must be a non-empty string'
      );
    });

    it('should throw error for null seed', () => {
      expect(() => shuffle(null as any, [1, 2, 3])).toThrow(
        'Seed must be a non-empty string'
      );
    });

    it('should throw error for undefined seed', () => {
      expect(() => shuffle(undefined as any, [1, 2, 3])).toThrow(
        'Seed must be a non-empty string'
      );
    });

    it('should throw error for non-string seed', () => {
      expect(() => shuffle(123 as any, [1, 2, 3])).toThrow(
        'Seed must be a non-empty string'
      );
    });

    it('should throw error for non-array input', () => {
      expect(() => shuffle('seed', 'not-array' as any)).toThrow(
        'Second argument must be an array'
      );
    });

    it('should throw error for null array', () => {
      expect(() => shuffle('seed', null as any)).toThrow(
        'Second argument must be an array'
      );
    });

    it('should throw error for undefined array', () => {
      expect(() => shuffle('seed', undefined as any)).toThrow(
        'Second argument must be an array'
      );
    });
  });
});
