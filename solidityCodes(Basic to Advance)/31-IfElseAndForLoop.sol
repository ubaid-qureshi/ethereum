
pragma solidity ^0.5.0;

contract ControlStructures {

    function forLoop(uint input_) public pure returns(uint) {
        
        uint num = 1;
        for (uint i=input_; i >= 1; i--){
           num = num * i;
        }
        return(num);
    }
    
    function ifElseLoop(uint input_) public pure returns(uint) {
        
        uint num = 1;
        
        if (input_ <= 0)
            return(0);
            
        else if (input_ == 1)
            return(1);
            
        else
            for (uint i=input_; i >= 1; i--){
               num = num * i;
            }
            return(num);
    }
}