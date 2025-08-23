import { test } from 'node:test';
import assert from 'node:assert/strict';

import ensureUUIDIsValid from '../middleware/ensureUUIDIsValid.middleware';
import { AppError } from '../errors/AppError';

test('ensureUUIDIsValid calls next for valid uuid', () => {
  const req = { params: { id: '123e4567-e89b-12d3-a456-426614174000' } } as any;
  const res = {} as any;
  let called = false;
  const next = () => {
    called = true;
  };

  ensureUUIDIsValid(req, res, next);
  assert.equal(called, true);
});

test('ensureUUIDIsValid throws AppError for invalid uuid', () => {
  const req = { params: { id: 'invalid-uuid' } } as any;
  const res = {} as any;
  const next = () => {};

  assert.throws(() => ensureUUIDIsValid(req, res, next), AppError);
});