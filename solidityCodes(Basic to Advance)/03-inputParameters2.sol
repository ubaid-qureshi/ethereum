pragma solidity ^0.5.0;

contract DisplayText {
	
    string public text;
    
    constructor(string memory newText) public {

        text = newText;
    }
}
