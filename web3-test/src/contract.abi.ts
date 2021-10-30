import { AbiItem } from "web3-utils";

const contractAbi: AbiItem[] = [
  {
    inputs: [],
    name: "getString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newString",
        type: "string",
      },
    ],
    name: "setString",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export default contractAbi;
