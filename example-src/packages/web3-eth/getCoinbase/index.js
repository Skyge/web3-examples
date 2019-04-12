import Web3 from "web3";

const web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
const web3 = new Web3(web3Provider)

async function main() {
  const coinbase = await web3.eth.getCoinbase().catch(console.error);
  return coinbase;
}
 
export default main;
