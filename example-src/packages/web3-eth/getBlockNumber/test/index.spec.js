import example from '../index.js';

it('get the block number', async () => {
  const res = await example();
  expect(res).not.toBeNaN();
});
