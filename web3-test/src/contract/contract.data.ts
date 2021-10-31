import { AbiItem } from "web3-utils";

export const ABI: AbiItem[] = [
  { inputs: [], stateMutability: "payable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address payable", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address payable", name: "_to", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const Bytecode =
  "6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506104fd806100536000396000f3fe60806040526004361061004a5760003560e01c806312065fe01461004f5780633ccfd60b1461007a5780638da5cb5b14610091578063a9059cbb146100bc578063d0e30db0146100e5575b600080fd5b34801561005b57600080fd5b506100646100ef565b60405161007191906102ca565b60405180910390f35b34801561008657600080fd5b5061008f6100f7565b005b34801561009d57600080fd5b506100a6610193565b6040516100b39190610326565b60405180910390f35b3480156100c857600080fd5b506100e360048036038101906100de919061039e565b6101b7565b005b6100ed610278565b005b600047905090565b600047905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050610190576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101879061043b565b60405180910390fd5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000479050808211156101ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f6906104a7565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050610273576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026a9061043b565b60405180910390fd5b505050565b7fa8142743f8f70a4c26f3691cf4ed59718381fb2f18070ec52be1f1022d855557346040516102a791906102ca565b60405180910390a1565b6000819050919050565b6102c4816102b1565b82525050565b60006020820190506102df60008301846102bb565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610310826102e5565b9050919050565b61032081610305565b82525050565b600060208201905061033b6000830184610317565b92915050565b600080fd5b61034f81610305565b811461035a57600080fd5b50565b60008135905061036c81610346565b92915050565b61037b816102b1565b811461038657600080fd5b50565b60008135905061039881610372565b92915050565b600080604083850312156103b5576103b4610341565b5b60006103c38582860161035d565b92505060206103d485828601610389565b9150509250929050565b600082825260208201905092915050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b60006104256014836103de565b9150610430826103ef565b602082019050919050565b6000602082019050818103600083015261045481610418565b9050919050565b7f4e6f7420656e6f75676820457468657200000000000000000000000000000000600082015250565b60006104916010836103de565b915061049c8261045b565b602082019050919050565b600060208201905081810360008301526104c081610484565b905091905056fea2646970667358221220ee433742c32517d56515699603ebb70a7aeafe46d3f45ad29d1835c85550753264736f6c63430008090033";
