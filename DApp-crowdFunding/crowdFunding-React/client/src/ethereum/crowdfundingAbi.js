const crowdfundingAbi = [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x06fdde03"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "beneficiary",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x38af3eed"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "amounts",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x55a3b2c1"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "fundingDeadline",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x796b23bb"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "collected",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x84bcefd4"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8da5cb5b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "targetAmount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x953b8fb8"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "state",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc19d93fb"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalCollected",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xe29eb836"
    },
    {
      "inputs": [
        {
          "name": "contractName",
          "type": "string"
        },
        {
          "name": "targetAmountEth",
          "type": "uint256"
        },
        {
          "name": "durationInMin",
          "type": "uint256"
        },
        {
          "name": "beneficiaryAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "addr",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "totalCollected",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "succeeded",
          "type": "bool"
        }
      ],
      "name": "CampaignFinished",
      "type": "event",
      "signature": "0x6fa7e87ebbd87ed4f1c40bba63144f68fd2bb022fb748ab3b61b5411c39bd474"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "addr",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "contribution",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "state",
          "type": "string"
        }
      ],
      "name": "Contribution",
      "type": "event",
      "signature": "0xd7604d21739444d3bc2717034eb90601f2cf2e5987c372af627911341e6ae625"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "totalcollection",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "state",
          "type": "string"
        }
      ],
      "name": "Collection",
      "type": "event",
      "signature": "0xbd545cf89f1d03bcb9c8a717c49fd16f73d796f5883a7754252b716697ab3239"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "addr",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "state",
          "type": "string"
        }
      ],
      "name": "Withdrawn",
      "type": "event",
      "signature": "0xb80d46a1fcb96f3896e038df66c1242504a8e49effecd0bf2473574707ca0121"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "contribute",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function",
      "signature": "0xd7bb99ba"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finishCrowdFunding",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x083dca11"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "collect",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xe5225381"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x3ccfd60b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "beforeDeadline",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x68bc0041"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getTotalCollected",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xfbe5d87e"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "inProgress",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x87351813"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isSuccessful",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xec4cd0cf"
    }
  ]

export default crowdfundingAbi