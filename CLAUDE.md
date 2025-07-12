# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is senzu-shuffle, a TypeScript utility library that provides deterministic array shuffling using a seed string. The library exports a single `shuffle` function that implements the Fisher-Yates shuffle algorithm with seedrandom for deterministic results.

## Development Commands

- **Build**: `npm run build` - Compiles TypeScript to JavaScript in the dist/ directory
- **Test**: `npm test` - Runs the test suite using Vitest
- **Test single file**: `npx vitest src/index.test.ts` - Run specific test file

## Architecture

- **src/index.ts**: Main library file containing the `shuffle` function implementation
- **src/index.test.ts**: Comprehensive test suite covering deterministic behavior, edge cases, and type safety
- **dist/**: Build output directory (TypeScript compiled to JS with declarations)
- **Package exports**: Configured for both ESM and CommonJS with proper TypeScript declarations

The library uses:
- **seedrandom**: For deterministic pseudo-random number generation
- **Fisher-Yates algorithm**: For unbiased array shuffling
- **Vitest**: For testing framework
- **TypeScript**: For type safety and compilation

## Key Implementation Details

The shuffle function is generic (`<T>`) and works with arrays of any type. It creates a copy of the input array to avoid mutation and uses seedrandom to ensure the same seed always produces the same shuffle result.