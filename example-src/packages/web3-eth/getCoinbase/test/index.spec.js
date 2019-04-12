import main from '../index';

it('get the coinbase address', async () => {
  const res = await main();
  expect(res).not.toBeNaN();
});
