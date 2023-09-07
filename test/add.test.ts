import { add } from '../src';
import { expect, test } from 'vitest';

test('adds 2+2', () => {
  expect(add(2, 2)).toBe(4);
});
