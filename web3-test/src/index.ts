import Web3 from "web3";
import contractAbi from "./contract.abi";
import contractBytecode from "./contract.byte";

const web3 = new Web3("http://localhost:8545");

async function main() {
  const firstAccount = (await web3.eth.getAccounts())[0];
  web3.eth.defaultAccount = firstAccount;

  await web3.eth.personal.unlockAccount(firstAccount, "123", 0);

  const stringHolder = new web3.eth.Contract(
    contractAbi,
    "0x99FEA622Cc14B41498F02EF2e400c063d82e4539"
  );

  // to deploy new contract to blockchain:
  /*
  const stringHolderContract = new web3.eth.Contract(contractAbi);
  const stringHolder = await stringHolderContract
    .deploy({
      data: contractBytecode,
    })
    .send({ from: web3.eth.defaultAccount });
  */

  const ourString = stringHolder.methods.getString().call().then(console.log);
}

if (require.main == module) {
  main();
}
