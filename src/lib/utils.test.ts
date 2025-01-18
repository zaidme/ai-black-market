jest.config.js:
{
  "testEnvironment": "node",
  "verbose": true
}

src/lib/utils.test.ts:
const { yourUtilityFunction } = require('./utils');

test('hello world!', () => {
  expect(yourUtilityFunction()).toBe('expected value');
});