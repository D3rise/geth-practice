import Web3 from "web3";

import Config from "./config.json";
import Contract from "./contract/contract";
import Account from "./account/account";

import { ABI, Bytecode } from "./contract/contract.data";

const web3 = new Web3("http://localhost:8545");
export default web3;

async function main() {
  const user2 = "0xc56231ff2511148b5a113a6DE265D5CbBcEcC20A";

  web3.defaultAccount = Config.defaultAccount;
  await Account.unlockDefaultAccount(Config.defaultAccountPassword);
  await web3.eth.personal.unlockAccount(user2, "123", 0);

  const contract = await Contract.deployContract(
    ABI,
    Bytecode,
    Account.getDefaultAccount()!
  );

  // ===========
  console.log(
    `current user balance: ${web3.utils.fromWei(
      await web3.eth.getBalance(web3.defaultAccount)
    )}`
  );
  // ===========

  await contract.methods
    .deposit()
    .send({
      from: web3.defaultAccount,
      value: web3.utils.toWei("100", "ether"),
    })
    .on("receipt", () => {
      console.log("Done transaction (deposit)");
    });

  // ===========
  console.log(
    `current user balance: ${web3.utils.fromWei(
      await web3.eth.getBalance(web3.defaultAccount)
    )}`
  );
  // ===========

  await contract.methods
    .withdraw()
    .send({ from: web3.defaultAccount })
    .on("receipt", () => console.log("Done transaction (withdraw)"));

  // ===========
  console.log(
    `current user balance: ${web3.utils.fromWei(
      await web3.eth.getBalance(web3.defaultAccount)
    )}`
  );
  // ===========
}

if (require.main == module) {
  main();
}
