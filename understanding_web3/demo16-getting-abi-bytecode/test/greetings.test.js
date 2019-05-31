const assert = require('assert');
const ganache = require('ganache-cli');

const Web3 = require('web3');
const web3 = new Web3(ganache.provider()); 

// Compile the contract
let output = require('../compile.js')

// Get compiled contract
let contract = JSON.parse(output)['contracts']['greetings']['Greetings'];

let abi = contract.abi;
let evm = contract.evm;

let accounts;
let greetings;

beforeEach(async () => {
	accounts = await web3.eth.getAccounts()
	
	// console.log(accounts);
	// console.log("--------------abi-----------");
	// console.log(abi);
	// console.log("--------------evm-----------");
	// console.log(evm);

// constructor in greetings.sol take one string argument
	greetings = await new web3.eth.Contract(abi)
		.deploy({
			data: '0x' + evm.bytecode.object, 
			arguments: ["hello"]
		}) 
		.send({ 
			from: accounts[0], 
			gas: '1000000'
		})
});


describe('greetings', () => {
	it('Deploy a contract', () => {
		console.log(greetings.options.adress)
		assert.ok(greetings.options.adress);
	});
});