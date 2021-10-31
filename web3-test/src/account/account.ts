import web3 from "../index";

export async function unlockDefaultAccount(password: string) {
  return await web3.eth.personal.unlockAccount(
    web3.defaultAccount!,
    password,
    0
  );
}

export function getDefaultAccount() {
  return web3.defaultAccount;
}

export default { unlockDefaultAccount, getDefaultAccount };
