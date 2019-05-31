pragma solidity ^0.5.0;

contract AbstractGreetings {

	//function without implementation
	function getValue() public view returns (string memory); 

	//function without implementation
	function setValue(string memory _value) public; 

	function returnText() public pure 
	returns (string memory) {

		return "Should be overridden";
	}
}


contract Greetings is AbstractGreetings{

	string private greetingText;

	//function with implementation
	function getValue() public view returns (string memory) { 

		return greetingText;
	}

	//function with implementation
	function setValue(string memory _value) public { 

	 	greetingText = _value;
	 }

	 function returnText() public pure
	 returns (string memory) {

	 	return "The function has been overridden!";
	 }
}