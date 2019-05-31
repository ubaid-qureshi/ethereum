pragma solidity ^0.5.0;

contract SimpleBank {

    uint8 private clientCount;
    mapping (address => uint) private balances;
    mapping (address => bool) private enrollments;
    address payable public owner;

    event LogEvent(string eventType, address indexed accountAddress, uint amount);

    constructor() public payable {

        require(msg.value >= 30 ether, "Minimum 30 ether initial funding required");
        owner = msg.sender;
        clientCount = 0;
    }

    function enroll() public returns (uint) {

        require(enrollments[msg.sender] == false);
        
        if (clientCount < 3) {
            balances[msg.sender] = 10 ether;
            emit LogEvent("Enrollment with Bonus", msg.sender, 10);
        }
        else{
            emit LogEvent("Enrollment", msg.sender, 0);
        }

        clientCount++;
        enrollments[msg.sender] = true;
        
        return balances[msg.sender];
    }

    function withdraw(uint withdrawAmount) public returns (uint remainingBal) {
        
        if (withdrawAmount <= balances[msg.sender]) {
            balances[msg.sender] -= withdrawAmount;
            msg.sender.transfer(withdrawAmount);
            emit LogEvent("Withdrawal", msg.sender, withdrawAmount);
        }
        else{
            emit LogEvent("Invalid Withdrawal Amount", msg.sender, withdrawAmount);
        }

        return balances[msg.sender];
    }

    function deposit() public payable returns (uint remainingBal) {
        
        require(enrollments[msg.sender] == true);
        
        if(msg.value > 0){
            balances[msg.sender] += msg.value; 
            emit LogEvent("Deposit", msg.sender, msg.value);
        }
        else{
            emit LogEvent("Invalid Deposit Amount", msg.sender, msg.value);
        }

        return balances[msg.sender];

    }

    function getMyAccountBalance() public view returns (uint) {
        return balances[msg.sender];
    }

    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }
    
    function destroy() public {
        require(msg.sender == owner);
        selfdestruct(owner);
    } 
}








