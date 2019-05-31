pragma solidity >=0.4.22 <0.6.0;

contract MyToken {
    mapping (address => uint256) public balanceOf;

    constructor() public {
        balanceOf[msg.sender] = 10;
    }
}
