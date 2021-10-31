import { AbiItem } from "web3-utils";
import web3 from "../index";

export async function deployContract(
  ABI: AbiItem | AbiItem[],
  bin: string,
  fromAddress: string
) {
  const contract = new web3.eth.Contract(ABI);
  const deployedContract = await contract
    .deploy({
      data: bin,
    })
    .send({
      from: fromAddress,
    });

  return deployedContract;
}

export function getContract(ABI: AbiItem | AbiItem[], address: string) {
  return new web3.eth.Contract(ABI, address);
}

export default { deployContract, getContract };
