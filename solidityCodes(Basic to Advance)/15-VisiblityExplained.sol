pragma solidity ^0.5.0;

contract FirstContract {

    uint private data;

    function setPublicFuncWithPrivateVariable(uint a) public { 
        
        data = a; 
    }

    function getPublicFuncWithPrivateVariable() public 
    view returns(uint) {
        
        return data; 
    }

    function computePrivateSum(uint a, uint b) private 
    pure returns(uint) { 

        return a + b; 
    }

    function computeInternalSum(uint a, uint b) internal 
    pure returns (uint) { 

        return a+b; 
    }
}

contract SecondContract {
    
    FirstContract first;
    
    constructor() public{
        first = new FirstContract();
        first.setPublicFuncWithPrivateVariable(3);
    }

    function readData() public view returns (uint){

        // error: member `computePrivateSum` is not visible
        //uint local1 = first.computePrivateSum(7,3); 

        uint local2 = first.getPublicFuncWithPrivateVariable();
        
        // error: member `computeInternalSum` is not visible
        //uint local3 = first.computeInternalSum(3, 5); 
        
        return (local2);
    }
}

contract ChildOfFirst is FirstContract {
    
    function readData() public pure returns (uint){

        // access to internal member (from derived to parent contract)
        uint local = computeInternalSum(3, 5); 
        return local;
    }
    
    function setVariable(uint num) public {
        
        setPublicFuncWithPrivateVariable(num);
        
        
    }
    
}





