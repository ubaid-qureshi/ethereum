pragma solidity ^0.5.0;

contract Greeter {

    string public greeting = "Hello!!";
    
    function getGreeting() public returns (string memory) {

        return greeting;
    }
}