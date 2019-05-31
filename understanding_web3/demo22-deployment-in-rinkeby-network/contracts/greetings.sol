pragma solidity ^0.5.0;

contract Greetings {
	string message;

	constructor ( string memory initialMessage) public {
		message = initialMessage;
	}

	function setGreetings ( string memory newMessage) public {
		message = newMessage;
	}
	
	function getGreetings () public view returns( string memory) {
		return(message);
	}
	
}