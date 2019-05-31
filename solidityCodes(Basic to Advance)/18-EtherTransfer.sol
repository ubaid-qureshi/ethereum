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

    function () external payable {

        //replace address with one from your environment
        address payable recipient = address(0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB);
        recipient.transfer(msg.value);
    }
    
}