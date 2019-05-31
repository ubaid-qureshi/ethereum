const assert = require('assert');
const ganache = require('ganache-cli');

const Web3 = require('web3');
const web3 = new Web3(ganache.provider()); 

class Car {
	park(){
		return 'stop';
	}

	drive() {
		return 'vroom';
	}
}

let car;

beforeEach(() => {

	car = new Car();
})

describe('car class', 	() => { 

	it('can park', () => {
		assert.equal(car.park(), 'stop');
	});

	it('can drive', () => {
		assert.equal(car.drive(), 'vroom');
	});
});