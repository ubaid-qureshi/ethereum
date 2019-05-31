pragma solidity ^0.5.0;

contract Recipient {
  
    function () external payable {
    }
  
    function getContractBalance() public view returns(uint) {
        return address(this).balance;
    }
}

contract Sender {
    
    function transfer(address payable recipient) public payable{
      
        recipient.transfer(msg.value);
    }
    
    function getAccountBalance(address acc) public view returns(uint) {
        return acc.balance;
    }
    
    function getContractBalance() public view returns(uint) {
        return address(this).balance;
    }
    
}