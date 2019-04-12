import example from '../index.js';

it('get the block data', async () => {
  const res = await example();
  expect(res).toHaveProperty('number');
});
