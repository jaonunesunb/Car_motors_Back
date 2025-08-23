import { test } from "node:test";
import assert from "node:assert/strict";
import AppDataSource from "../data-source";

test("Data source initializes", async () => {
  const dataSource = await AppDataSource.initialize();
  assert.equal(dataSource.isInitialized, true);
  await AppDataSource.destroy();
});