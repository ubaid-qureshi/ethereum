pragma solidity ^0.5.0;

contract Recipient {
  
    function () external payable {
    }
  
    function getContractBalance() public view returns(uint) {
        return address(this).balance;
    }
}
