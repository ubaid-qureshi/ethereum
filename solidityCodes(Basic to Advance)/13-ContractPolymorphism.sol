pragma solidity ^0.5.0;

contract ParentContract {

	uint internal simpleInteger;

	function setInteger(uint _value) public {
		simpleInteger = _value;
	}

	function getInteger() public view returns (uint) {
		return simpleInteger;
	}
}


contract ChildContract is ParentContract {

	function getInteger() public view returns (uint) {

		return 2 * simpleInteger;
	}
}