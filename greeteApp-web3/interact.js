let fs = require('fs');
const Web3 = require('web3');

let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('HTTP://127.0.0.1:8545'));

let contractAddress = "0x1B1d66a7f45746e6057b620E86D2a716457C4859";
let fromAddress = "0xd6348e5b9a2ccc470ab194e374740898d5d50efb";

let abiStr = fs.readFileSync('Greetings.abi', 'utf8');
let abi = JSON.parse(abiStr);

let greeter = new web3.eth.Contract(abi, contractAddress);

sendTransaction()
    .then(function() {
        console.log("Done");
    })
    .catch(function(error) {
        console.log(error);
    })

async function sendTransaction() {
    console.log("Getting greetings'");
    getGreetings = await greeter.methods.getGreetings().call();
    console.log(getGreetings);
    console.log();

    console.log("Changing Greetings");
    result = await greeter.methods.setGreetings("Hello").send({from: fromAddress});
    console.log(result);
    console.log();

    console.log("Getting greetings'");
    getGreetings = await greeter.methods.getGreetings().call();
    console.log(getGreetings);
    console.log();
}
