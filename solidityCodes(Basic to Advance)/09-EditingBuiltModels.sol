pragma solidity ^0.5.0;

contract Setter {
	
    uint public num;
    string public text;
    
    function setValues(uint newNum, string memory newText) public {

        uint updatedNum = num + newNum + 1;
        num = updatedNum ;
        text = newText;
    }
}
