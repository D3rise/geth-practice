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
    `current user1, user2, contract balance: ${web3.utils.fromWei(
      await web3.eth.getBalance(web3.defaultAccount)
    )}, ${web3.utils.fromWei(
      await web3.eth.getBalance(user2)
    )}, ${web3.utils.fromWei(
      await web3.eth.getBalance(contract.options.address)
    )}`
  );
  // ===========

  await contract.methods
    .deposit()
    .send({
      from: web3.defaultAccount,
      value: web3.utils.toWei("2000", "ether"),
    })
    .on("receipt", () => {
      console.log("Done transaction (deposit #1)");
    });

  // ===========
  console.log(
    `current user1, user2, contract balance: ${web3.utils.fromWei(
      await web3.eth.getBalance(web3.defaultAccount)
    )}, ${web3.utils.fromWei(
      await web3.eth.getBalance(user2)
    )}, ${web3.utils.fromWei(
      await web3.eth.getBalance(contract.options.address)
    )}`
  );
  // ===========

  await contract.methods
    .withdraw()
    .send({ from: web3.defaultAccount })
    .on("receipt", () => console.log("Done transaction (withdraw #1)"));

  // ===========
  console.log(
    `current user1, user2, contract balance: ${web3.utils.fromWei(
      await web3.eth.getBalance(web3.defaultAccount)
    )}, ${web3.utils.fromWei(
      await web3.eth.getBalance(user2)
    )}, ${web3.utils.fromWei(
      await web3.eth.getBalance(contract.options.address)
    )}`
  );
  // ===========

  await contract.methods
    .deposit()
    .send({
      from: web3.defaultAccount,
      value: web3.utils.toWei("1000", "ether"),
    })
    .on("receipt", () => console.log("Done transaction (deposit #2)"));

  // ===========
  console.log(
    `current user1, user2, contract balance: ${web3.utils.fromWei(
      await web3.eth.getBalance(web3.defaultAccount)
    )}, ${web3.utils.fromWei(
      await web3.eth.getBalance(user2)
    )}, ${web3.utils.fromWei(
      await web3.eth.getBalance(contract.options.address)
    )}`
  );
  // ===========

  await contract.methods
    .transfer(user2, web3.utils.toWei("500", "ether"))
    .send({ from: web3.defaultAccount })
    .on("receipt", () => console.log("Done transaction (transfer)"));

  // ===========
  console.log(
    `current user1, user2, contract balance: ${web3.utils.fromWei(
      await web3.eth.getBalance(web3.defaultAccount)
    )}, ${web3.utils.fromWei(
      await web3.eth.getBalance(user2)
    )}, ${web3.utils.fromWei(
      await web3.eth.getBalance(contract.options.address)
    )}`
  );
  // ===========

  await contract.methods
    .withdraw()
    .send({ from: web3.defaultAccount })
    .on("receipt", () => console.log("Done transaction (withdraw #2)"));

  // ===========
  console.log(
    `current user1, user2, contract balance: ${web3.utils.fromWei(
      await web3.eth.getBalance(web3.defaultAccount)
    )}, ${web3.utils.fromWei(
      await web3.eth.getBalance(user2)
    )}, ${web3.utils.fromWei(
      await web3.eth.getBalance(contract.options.address)
    )}`
  );
  // ===========
}

if (require.main == module) {
  main();
}
