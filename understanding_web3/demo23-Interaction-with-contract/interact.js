let fs = require('fs');
const Web3 = require('web3');

let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));

let contractAddress = "0x9762f6783a3c471cef4f86ddabc00cb42fe39e26";
let fromAddress = "0x553d100bcf79165C56BB4179e122263AD92686e3";

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

    console.log("Changing Greetings'");
    result = await greeter.methods.setGreetings("Hi There!").send({from: fromAddress});
    console.log(result);
    console.log();

    console.log("Getting greetings'");
    getGreetings = await greeter.methods.getGreetings().call();
    console.log(getGreetings);
    console.log();
}
