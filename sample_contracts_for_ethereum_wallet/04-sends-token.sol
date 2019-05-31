pragma solidity >=0.4.22 <0.6.0;

contract MyToken {
    mapping (address => uint256) public balanceOf;

    constructor(uint256 initialBalance) public {
        balanceOf[msg.sender] = initialBalance;
    }

    function transfer(address _to, uint256 _value) public {

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
    }
}
