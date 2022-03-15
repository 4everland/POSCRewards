/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RewardPool, RewardPoolInterface } from "../RewardPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rewardPerBlock_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "Close",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "Open",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "node",
        type: "string",
      },
    ],
    name: "SetNode",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardPerBlock",
        type: "uint256",
      },
    ],
    name: "SetRewardPerBlock",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "accumulatedReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "claimed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "close",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "closed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "holder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder_",
        type: "address",
      },
    ],
    name: "holderExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "holders",
    outputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "node",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "isClosed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder_",
        type: "address",
      },
    ],
    name: "node",
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
    inputs: [],
    name: "nodeList",
    outputs: [
      {
        internalType: "string[]",
        name: "nodes_",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder_",
        type: "address",
      },
      {
        internalType: "string",
        name: "node_",
        type: "string",
      },
    ],
    name: "open",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "opened",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "opens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pools",
    outputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "open",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "close",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdated",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "realised",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimed",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "reward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "node_",
        type: "string",
      },
    ],
    name: "setNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rewardPerBlock_",
        type: "uint256",
      },
    ],
    name: "setRewardPerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "unrealised",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001f3138038062001f3183398101604081905262000034916200015a565b6200003f336200007d565b6200004a836200007d565b6200005581620000cd565b50600180546001600160a01b0319166001600160a01b039290921691909117905550620001ba565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b806200011f5760405162461bcd60e51b815260206004820152601b60248201527f526577617264506f6f6c3a20696e76616c696420706172616d732e0000000000604482015260640160405180910390fd5b60038190556040518181527f22c0456177178fec69cb519ce05c0f0b39708187e616a82ceea49f84e19169cd9060200160405180910390a150565b6000806000606084860312156200016f578283fd5b83516200017c81620001a1565b60208501519093506200018f81620001a1565b80925050604084015190509250925092565b6001600160a01b0381168114620001b757600080fd5b50565b611d6780620001ca6000396000f3fe608060405234801561001057600080fd5b50600436106101a85760003560e01c80639f9b1048116100f9578063d5c78a2811610097578063f1ea5cd311610071578063f1ea5cd3146103b4578063f2fde38b146103c7578063f3fef3a3146103da578063fc0c546a146103ed576101a8565b8063d5c78a281461037b578063dbe7e3bd1461038e578063e6a2016e146103a1576101a8565b8063ba899a2e116100d3578063ba899a2e1461032c578063bb872b4a1461033f578063bffbe61c14610352578063c96dc2a214610372576101a8565b80639f9b1048146102ac578063a9fb763c146102cf578063ac4afa38146102e2576101a8565b80634c9b268c11610166578063715018a611610140578063715018a6146102635780638ae39cac1461026b5780638da5cb5b146102745780639506834f14610299576101a8565b80634c9b268c1461023557806357770bee146102485780635c959b6214610250576101a8565b8062c4c106146101ad578063081e3eda146101c25780630aebeb4e146101d957806318a5bbdc146101ec5780631e83409a1461020d57806339db45f614610220575b600080fd5b6101c06101bb3660046119a2565b610400565b005b6002545b6040519081526020015b60405180910390f35b6101c06101e7366004611aa8565b61055b565b6101ff6101fa366004611988565b610692565b6040516101d0929190611be7565b6101c061021b366004611988565b610737565b6102286107fc565b6040516101d09190611b08565b6101c6610243366004611aa8565b610966565b6101c0610a26565b6101c661025e366004611aa8565b610b16565b6101c0610b7a565b6101c660035481565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016101d0565b6101c06102a73660046119a2565b610bb0565b6102bf6102ba366004611988565b610efb565b60405190151581526020016101d0565b6101c66102dd366004611aa8565b610f2e565b6102f56102f0366004611aa8565b610f63565b604080516001600160a01b0390971687526020870195909552938501929092526060840152608083015260a082015260c0016101d0565b61028161033a366004611aa8565b610fb3565b6101c061034d366004611aa8565b61101d565b610365610360366004611988565b611058565b6040516101d09190611b68565b6101c660045481565b6102bf610389366004611aa8565b611107565b6101c661039c366004611aa8565b61116e565b6101c66103af366004611aa8565b6111aa565b6101c66103c2366004611aa8565b611226565b6101c06103d5366004611988565b611289565b6101c06103e8366004611a5f565b611321565b600154610281906001600160a01b031681565b6000546001600160a01b031633146104335760405162461bcd60e51b815260040161042a90611bb2565b60405180910390fd5b61043c82610efb565b6104885760405162461bcd60e51b815260206004820152601f60248201527f526577617264506f6f6c3a206e6f6e6578697374656e7420686f6c6465722e00604482015260640161042a565b60008151116104d55760405162461bcd60e51b81526020600482015260196024820152782932bbb0b9322837b7b61d1034b73b30b634b2103737b2329760391b604482015260640161042a565b6001600160a01b03821660009081526005602090815260409091208251610504926001909201918401906118e1565b506001600160a01b038216600081815260056020526040908190205490517f92f01d2ace5c0ed4c388e5fd7792f9d66dc73028d82f3b6ed4382359a8511d939061054f908590611b68565b60405180910390a35050565b6000546001600160a01b031633146105855760405162461bcd60e51b815260040161042a90611bb2565b8061058f816113a9565b6105ab5760405162461bcd60e51b815260040161042a90611b7b565b6105b482611107565b156105fc5760405162461bcd60e51b81526020600482015260186024820152772932bbb0b9322837b7b61d103837b7b61031b637b9b2b21760411b604482015260640161042a565b436002838154811061061e57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060060201600201819055506106458261064084610fb3565b6113bc565b506004805490600061065683611c9e565b9190505550610663610a26565b60405182907fbf67515a38ee520223d32c1266d52101c30d936ed1f3e436c8caeb0a43cb06bf90600090a25050565b600560205260009081526040902080546001820180549192916106b490611cb5565b80601f01602080910402602001604051908101604052809291908181526020018280546106e090611cb5565b801561072d5780601f106107025761010080835404028352916020019161072d565b820191906000526020600020905b81548152906001019060200180831161071057829003601f168201915b5050505050905082565b61074033610efb565b61078c5760405162461bcd60e51b815260206004820152601f60248201527f526577617264506f6f6c3a206e6f6e6578697374656e7420686f6c6465722e00604482015260640161042a565b336000908152600560205260409020546107a581611107565b156107ed5760405162461bcd60e51b81526020600482015260186024820152772932bbb0b9322837b7b61d103837b7b61031b637b9b2b21760411b604482015260640161042a565b6107f781836113bc565b505050565b606061080760025490565b67ffffffffffffffff81111561082d57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561086057816020015b606081526020019060019003908161084b5790505b50905060005b60025481101561096257600061087b82610fb3565b6001600160a01b03811660009081526005602052604090206001018054919250906108a590611cb5565b80601f01602080910402602001604051908101604052809291908181526020018280546108d190611cb5565b801561091e5780601f106108f35761010080835404028352916020019161091e565b820191906000526020600020905b81548152906001019060200180831161090157829003601f168201915b505050505083838151811061094357634e487b7160e01b600052603260045260246000fd5b602002602001018190525050808061095a90611cea565b915050610866565b5090565b60008061097283611107565b61097c57436109b0565b6002838154811061099d57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060060201600201545b905060006109f9600285815481106109d857634e487b7160e01b600052603260045260246000fd5b9060005260206000209060060201600301548361154b90919063ffffffff16565b9050610a1c600454610a168360035461155790919063ffffffff16565b90611563565b925050505b919050565b60005b600254811015610b1357610a3c81611107565b15610a4657610b01565b610a93610a5282610966565b60028381548110610a7357634e487b7160e01b600052603260045260246000fd5b90600052602060002090600602016004015461156f90919063ffffffff16565b60028281548110610ab457634e487b7160e01b600052603260045260246000fd5b9060005260206000209060060201600401819055504360028281548110610aeb57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060060201600301819055505b80610b0b81611cea565b915050610a29565b50565b600081610b22816113a9565b610b3e5760405162461bcd60e51b815260040161042a90611b7b565b60028381548110610b5f57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600602016002015491505b50919050565b6000546001600160a01b03163314610ba45760405162461bcd60e51b815260040161042a90611bb2565b610bae600061157b565b565b6000546001600160a01b03163314610bda5760405162461bcd60e51b815260040161042a90611bb2565b6001600160a01b038216610c305760405162461bcd60e51b815260206004820152601b60248201527f526577617264506f6f6c3a20696e76616c696420686f6c6465722e0000000000604482015260640161042a565b6000815111610c7d5760405162461bcd60e51b81526020600482015260196024820152782932bbb0b9322837b7b61d1034b73b30b634b2103737b2329760391b604482015260640161042a565b610c8682610efb565b15610cd35760405162461bcd60e51b815260206004820152601a60248201527f526577617264506f6f6c3a20686f6c646572206578697374732e000000000000604482015260640161042a565b6000610cde60025490565b60408051808201825282815260208082018681526001600160a01b0388166000908152600583529390932082518155925180519495509193610d2692600185019201906118e1565b50506040805160c0810182526001600160a01b03868116825243602083018181526000948401858152606085019283526080850186815260a086018781526002805460018101825590895296517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace600690980297880180546001600160a01b031916919097161790955591517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf860155517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad085015590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad1840155517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad2830155517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad39091015560048054925090610e7c83611cea565b9190505550610e89610a26565b60405181907f9648cf7f2eb86b564ae3c4a466bc03e87267933667490eb8737a5a3f2a9b284d90600090a2826001600160a01b0316817f92f01d2ace5c0ed4c388e5fd7792f9d66dc73028d82f3b6ed4382359a8511d9384604051610eee9190611b68565b60405180910390a3505050565b6001600160a01b03811660009081526005602052604081206001018054829190610f2490611cb5565b9050119050919050565b6000610f5d610f3c83610966565b60028481548110610a7357634e487b7160e01b600052603260045260246000fd5b92915050565b60028181548110610f7357600080fd5b60009182526020909120600690910201805460018201546002830154600384015460048501546005909501546001600160a01b0390941695509193909286565b600081610fbf816113a9565b610fdb5760405162461bcd60e51b815260040161042a90611b7b565b60028381548110610ffc57634e487b7160e01b600052603260045260246000fd5b60009182526020909120600690910201546001600160a01b03169392505050565b6000546001600160a01b031633146110475760405162461bcd60e51b815260040161042a90611bb2565b61104f610a26565b610b13816115cb565b6001600160a01b038116600090815260056020526040902060010180546060919061108290611cb5565b80601f01602080910402602001604051908101604052809291908181526020018280546110ae90611cb5565b80156110fb5780601f106110d0576101008083540402835291602001916110fb565b820191906000526020600020905b8154815290600101906020018083116110de57829003601f168201915b50505050509050919050565b600081611113816113a9565b61112f5760405162461bcd60e51b815260040161042a90611b7b565b6002838154811061115057634e487b7160e01b600052603260045260246000fd5b90600052602060002090600602016002015460001415915050919050565b60006002828154811061119157634e487b7160e01b600052603260045260246000fd5b9060005260206000209060060201600501549050919050565b6000816111b6816113a9565b6111d25760405162461bcd60e51b815260040161042a90611b7b565b61121f6111de84610f2e565b600285815481106111ff57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600602016005015461156f90919063ffffffff16565b9392505050565b600081611232816113a9565b61124e5760405162461bcd60e51b815260040161042a90611b7b565b6002838154811061126f57634e487b7160e01b600052603260045260246000fd5b906000526020600020906006020160010154915050919050565b6000546001600160a01b031633146112b35760405162461bcd60e51b815260040161042a90611bb2565b6001600160a01b0381166113185760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161042a565b610b138161157b565b6000546001600160a01b0316331461134b5760405162461bcd60e51b815260040161042a90611bb2565b600154611362906001600160a01b03168383611653565b816001600160a01b03167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b658260405161139d91815260200190565b60405180910390a25050565b60006113b460025490565b909110919050565b60006113c783610f2e565b9050600081116114195760405162461bcd60e51b815260206004820152601f60248201527f526577617264506f6f6c3a206e6f2072657761726420746f20636c61696d2e00604482015260640161042a565b61143e81600285815481106111ff57634e487b7160e01b600052603260045260246000fd5b6002848154811061145f57634e487b7160e01b600052603260045260246000fd5b906000526020600020906006020160050181905550436002848154811061149657634e487b7160e01b600052603260045260246000fd5b9060005260206000209060060201600301819055506000600284815481106114ce57634e487b7160e01b600052603260045260246000fd5b60009182526020909120600460069092020101556001546114f9906001600160a01b03168383611653565b61150283610fb3565b6001600160a01b0316837f3ed1528b0fdc7c5207c1bf935e34a667e13656b9ed165260c522be0bc544f3038360405161153d91815260200190565b60405180910390a392915050565b600061121f8284611c57565b600061121f8284611c38565b600061121f8284611c18565b600061121f8284611c00565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b806116185760405162461bcd60e51b815260206004820152601b60248201527f526577617264506f6f6c3a20696e76616c696420706172616d732e0000000000604482015260640161042a565b60038190556040518181527f22c0456177178fec69cb519ce05c0f0b39708187e616a82ceea49f84e19169cd9060200160405180910390a150565b604080516001600160a01b03848116602483015260448083018590528351808403909101815260649092018352602080830180516001600160e01b031663a9059cbb60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564908401526107f7928692916000916116e3918516908490611760565b8051909150156107f757808060200190518101906117019190611a88565b6107f75760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161042a565b606061176f8484600085611777565b949350505050565b6060824710156117d85760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161042a565b6001600160a01b0385163b61182f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161042a565b600080866001600160a01b0316858760405161184b9190611aec565b60006040518083038185875af1925050503d8060008114611888576040519150601f19603f3d011682016040523d82523d6000602084013e61188d565b606091505b509150915061189d8282866118a8565b979650505050505050565b606083156118b757508161121f565b8251156118c75782518084602001fd5b8160405162461bcd60e51b815260040161042a9190611b68565b8280546118ed90611cb5565b90600052602060002090601f01602090048101928261190f5760008555611955565b82601f1061192857805160ff1916838001178555611955565b82800160010185558215611955579182015b8281111561195557825182559160200191906001019061193a565b506109629291505b80821115610962576000815560010161195d565b80356001600160a01b0381168114610a2157600080fd5b600060208284031215611999578081fd5b61121f82611971565b600080604083850312156119b4578081fd5b6119bd83611971565b9150602083013567ffffffffffffffff808211156119d9578283fd5b818501915085601f8301126119ec578283fd5b8135818111156119fe576119fe611d1b565b604051601f8201601f19908116603f01168101908382118183101715611a2657611a26611d1b565b81604052828152886020848701011115611a3e578586fd5b82602086016020830137856020848301015280955050505050509250929050565b60008060408385031215611a71578182fd5b611a7a83611971565b946020939093013593505050565b600060208284031215611a99578081fd5b8151801515811461121f578182fd5b600060208284031215611ab9578081fd5b5035919050565b60008151808452611ad8816020860160208601611c6e565b601f01601f19169290920160200192915050565b60008251611afe818460208701611c6e565b9190910192915050565b6000602080830181845280855180835260408601915060408482028701019250838701855b82811015611b5b57603f19888603018452611b49858351611ac0565b94509285019290850190600101611b2d565b5092979650505050505050565b60006020825261121f6020830184611ac0565b6020808252601d908201527f526577617264506f6f6c3a206e6f6e6578697374656e7420706f6f6c2e000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008382526040602083015261176f6040830184611ac0565b60008219821115611c1357611c13611d05565b500190565b600082611c3357634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611c5257611c52611d05565b500290565b600082821015611c6957611c69611d05565b500390565b60005b83811015611c89578181015183820152602001611c71565b83811115611c98576000848401525b50505050565b600081611cad57611cad611d05565b506000190190565b600281046001821680611cc957607f821691505b60208210811415610b7457634e487b7160e01b600052602260045260246000fd5b6000600019821415611cfe57611cfe611d05565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220f60c7751b745dcab9b06c2fcaffa6e991a5adfaec82038a43cf628f603321aae64736f6c63430008020033";

export class RewardPool__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    admin: string,
    token_: string,
    rewardPerBlock_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardPool> {
    return super.deploy(
      admin,
      token_,
      rewardPerBlock_,
      overrides || {}
    ) as Promise<RewardPool>;
  }
  getDeployTransaction(
    admin: string,
    token_: string,
    rewardPerBlock_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      admin,
      token_,
      rewardPerBlock_,
      overrides || {}
    );
  }
  attach(address: string): RewardPool {
    return super.attach(address) as RewardPool;
  }
  connect(signer: Signer): RewardPool__factory {
    return super.connect(signer) as RewardPool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardPoolInterface {
    return new utils.Interface(_abi) as RewardPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardPool {
    return new Contract(address, _abi, signerOrProvider) as RewardPool;
  }
}