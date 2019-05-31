const assert = require('assert');
const ganache = require('ganache-cli');

const Web3 = require('web3');
const web3 = new Web3(ganache.provider()); 

let output = require('../compile.js')
let contract = JSON.parse(output)['contracts']['greetings']['Greetings'];

let abi = contract.abi;
let evm = contract.evm;

let accounts;
let greetings;

const defaultGreeting = "Hello World"

beforeEach(async () => {
	accounts = await web3.eth.getAccounts()

	greetings = await new web3.eth.Contract(abi)
		.deploy({
			data: '0x' + evm.bytecode.object, 
			arguments: [defaultGreeting]
		}) 
		.send({ 
			from: accounts[0], 
			gas: '1000000'
		})
});


describe('greetings', () => {
	it('Deploy a contract', () => {
		assert.ok(greetings.options.adress);
	});

	it('has a default argument', async () => {
		const getGreetings = await greetings.methods.getGreetings().call();
		assert.equal(getGreetings, defaultGreeting);
		console.log(getGreetings)
	});

	it('can change greetings (Transaction)', async () => {
		await greetings.methods.setGreetings('Hi there!')
							   .send({from:accounts[0]})

		const message = await greetings.methods.getGreetings().call();
		assert.equal(message,'Hi there!')
		console.log(message)
	});
});