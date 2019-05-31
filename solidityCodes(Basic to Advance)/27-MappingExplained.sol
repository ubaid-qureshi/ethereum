pragma solidity ^0.5.0;

contract Mapping {

    mapping (string => uint) myMapping;

    constructor(uint amount1, uint amount2) public {
        myMapping["Alice"] = amount1 ;
        myMapping["Bob"] = amount2 ;
    }
    
    function returnFirstoption () public view returns(uint)  {
        uint amount = myMapping["Alice"];
        return(amount);
    }   

    function returnSecondoption () public view returns(uint)  {
        uint amount = myMapping["Bob"];
        return(amount);
    }

    function returnNonExistentoption () public view returns(uint)  {
        uint nonExistentOption = myMapping["nonExistentOption"];
        return(nonExistentOption);
    }       
}