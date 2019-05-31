let fs = require('fs');
let solc = require('solc')
let Web3 = require('web3');

let contract = compileContract();
let web3 = createWeb3();
let sender = '0xe0b67a093c62e46c38d97f190a7e697833f09299';

deployContract(web3, contract, sender)
    .then(function () {
        console.log('Deployment finished')
    })
    .catch(function (error) {
        console.log(`Failed to deploy contract: ${error}`)
    })

function compileContract() {
    let compilerInput = {
        language: 'Solidity',
        sources: {
            'Voter.sol': {
                content: fs.readFileSync('Voter.sol', 'utf8')
            }
        },
        settings: {
            outputSelection: {
                '*': {
                    '*': [ '*' ]
                }
            }
        }
    };

    console.log('Compiling the contract')
    // Compile the contract
    let output = JSON.parse(solc.compile(JSON.stringify(compilerInput)));
    // Get compiled contract
    let contract = output.contracts['Voter.sol']['Voter']

    // Save contract's ABI
    let abi = contract.abi;
    fs.writeFileSync('abi.json', JSON.stringify(abi));

    return contract;
}

function createWeb3() {
    let web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545'));

    return web3;
}

async function deployContract(web3, contract, sender) {
    let Voter = new web3.eth.Contract(contract.abi);
    let bytecode = '0x' + contract.evm.bytecode.object;
    let gasEstimate = await web3.eth.estimateGas({data: bytecode});

    console.log('Deploying the contract');
    const contractInstance = await Voter.deploy({
        data: bytecode
    })
    .send({
        from: sender,
        gas: gasEstimate
    })
    .on('transactionHash', function(transactionHash) {
        console.log(`Transaction hash: ${transactionHash}`);
    })

    console.log(`Contract address: ${contractInstance.options.address}`);
}
