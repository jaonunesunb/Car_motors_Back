import { test } from 'node:test';
import assert from 'node:assert/strict';

import { AppError } from '../errors/AppError';

test('AppError stores message and status code', () => {
  const error = new AppError('example', 418);
  assert.equal(error.message, 'example');
  assert.equal(error.statusCode, 418);
});

test('AppError defaults status code to 400', () => {
  const error = new AppError('default');
  assert.equal(error.statusCode, 400);
});
