pragma solidity ^0.5.0;

contract ControlStructures {

    function whileLoop(uint input_) public pure returns(uint) {
        
        uint num = 1;
        while (input_ > 0){
           num = num * input_;
           input_--;
        }
        return(num);
    }
    
    function doWhileLoop(uint input_) public pure returns(uint) {
        
        uint num = 1;
        
        if (input_ == 0)
            return(num);
        
        do{
            num = num * input_;
            input_--;
        } while (input_ > 0);
        
        return(num);
    }
}