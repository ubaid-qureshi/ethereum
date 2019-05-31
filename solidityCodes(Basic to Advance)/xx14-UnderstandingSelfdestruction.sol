pragma solidity ^0.5.0;

contract TransactionCallSelfDestruct {
    string public message;
    
    function setGreetings(string memory newMessage) public returns(string memory) {
        message = newMessage;
    }

    function destroy() public {
    	selfdestruct(0xf858430f3867613Dd6eDf611b0C661f58a049d39);
    } 
}
