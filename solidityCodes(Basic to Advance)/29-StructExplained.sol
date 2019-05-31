pragma solidity ^0.5.0;

contract UnderstandingStructs {

    struct  Funder { 
        string name;
        uint amount;
    }
    
    Funder public funder_primary;
    Funder public funder_secondary;
    
    constructor(string memory name, uint amount) public {
        
        funder_primary  = Funder("Alice", 100);
        funder_secondary = Funder(name, amount);
    }
    
    function getPrimaryFunder () public view 
    returns(string memory, uint)  {
        return(funder_primary.name, funder_primary.amount);
    }   
    
    function getSecondaryFunder () public view 
    returns(string memory, uint)  {
        return(funder_secondary.name, funder_secondary.amount);
    }   
    
}