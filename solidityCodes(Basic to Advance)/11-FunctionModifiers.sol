pragma solidity ^0.5.0;

contract FunctionModifiers {
    
    uint public value;
    
    function setValue(uint newValue) public { 

        value = newValue; 
    }

    function getValue () public view returns(uint) {

        return value;
    }
    
    function getSum(uint newVal1, uint newVal2) public pure
    returns (uint){
    
        // If uncommented will throw error
        // value = newVal1 + newVal2;
        // return value;
        uint sum =  newVal1 + newVal2;
        return sum;
    }
}