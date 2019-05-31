const assert = require('assert');
const ganache = require('ganache-cli');

const Web3 = require('web3');
let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545'));

let output = require('./compile.js')
let contract = JSON.parse(output)['contracts']['greetings']['Greetings'];

let abi = contract.abi;
let evm = contract.evm;

let accounts;
let greetings;

const defaultGreeting = "Hello World"

const deploy = async () => {
	accounts = await web3.eth.getAccounts()

	greetings = await new web3.eth.Contract(abi)
		.deploy({
			data: '0x' + evm.bytecode.object, 
			arguments: [defaultGreeting]
		}) 
		.send({ 
			from: accounts[4], 
			gas: '1000000'
		})
  console.log('Contract deployed to', greetings.options.address);
};
deploy();