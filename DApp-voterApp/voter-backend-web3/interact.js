let fs = require('fs');
let Web3 = require('web3');

let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

let contractAddress = "0xe7A7205750858a0e8F4739681237c9cd9A2612a0";
let fromAddress = "0xe0b67a093c62e46c38d97f190a7e697833f09299";

let abiStr = fs.readFileSync('abi.json', 'utf8');
let abi = JSON.parse(abiStr);

let voter = new web3.eth.Contract(abi, contractAddress);

sendTransaction()
    .then(function() {
        console.log("Done");
    })
    .catch(function(error) {
        console.log(error);
    })

async function sendTransaction() {
    console.log("Adding option cricket");
    await voter.methods.addOption("cricket").send({from: fromAddress});

    console.log("Adding option football");
    await voter.methods.addOption("football").send({from: fromAddress});

    await voter.methods.startVoting().send({from: fromAddress, gas: 600000});

    console.log("Voting");
    await voter.methods.vote(0).send({from: fromAddress, gas: 600000});

    console.log("Getting votes");
    let votes = await voter.methods.getVotes().call({from: fromAddress});

    console.log(`Votes: ${votes}`)
}

