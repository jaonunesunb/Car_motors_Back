import { test } from 'node:test';
import assert from 'node:assert/strict';

import handleError from '../errors/handleError';
import { AppError } from '../errors/AppError';

function createMockResponse() {
  const res: any = {};
  res.status = (code: number) => {
    res.statusCode = code;
    return res;
  };
  res.json = (payload: any) => {
    res.body = payload;
    return res;
  };
  return res;
}

test('handleError formats AppError responses', async () => {
  const res = createMockResponse();
  const error = new AppError('fail', 418);

  await handleError(error, {} as any, res, () => {});

  assert.equal(res.statusCode, 418);
  assert.deepEqual(res.body, { message: 'fail' });
});

test('handleError handles unexpected errors', async () => {
  const res = createMockResponse();
  const error = new Error('oops');

  await handleError(error, {} as any, res, () => {});

  assert.equal(res.statusCode, 500);
  assert.deepEqual(res.body, { message: 'Internal server error' });
});