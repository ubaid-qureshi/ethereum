pragma solidity ^0.5.0;

// https://www.codementor.io/rogargon/exercise-simple-solidity-smart-contract-for-ethereum-blockchain-m736khtby

contract SimpleBank {

    uint8 private clientCount;
    mapping (address => uint) private balances;
    address public owner;

  // Log the event about a deposit being made by an address and its amount
    event LogDepositMade(address indexed accountAddress, uint amount);

    constructor() public payable {
        require(msg.value > 30 ether, "Minimum 30 ether initial funding required");
        owner = msg.sender;
        clientCount = 0;
    }

    /// giving the first 3 Enrollers 10 ether as reward
    function enroll() public returns (uint) {
        if (clientCount < 3) {
            clientCount++;
            balances[msg.sender] = 10 ether;
        }
        return balances[msg.sender];
    }

    /// Withdraw ether from bank, It return The balance remaining for the user
    function withdraw(uint withdrawAmount) public returns (uint remainingBal) {
        // Check enough balance available, otherwise just return balance
        if (withdrawAmount <= balances[msg.sender]) {
            balances[msg.sender] -= withdrawAmount;
            msg.sender.transfer(withdrawAmount);
        }
        return balances[msg.sender];
    }

    /// Just reads balance of the account requesting
    function balance() public view returns (uint) {
        return balances[msg.sender];
    }

    /// @return The balance of the Simple Bank contract
    function depositsBalance() public view returns (uint) {
        return address(this).balance;
    }
}