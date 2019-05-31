pragma solidity ^0.5.0;

contract FunctionPloymorphism {

	function getData(string memory data) public pure 
	returns(string memory) {

		return (data);
	}

	function getData(int16 data) public pure 
	returns(int16 output) {

		return (data);
	}
}