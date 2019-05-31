pragma solidity ^0.5.0;

contract ReturnTypes {
    
    function getSum(uint num1, uint num2) public
    returns (uint){
    
        uint sum =  num1 + num2;
        return sum;
    }
    
    function getProduct(uint num1, uint num2) public
    returns (uint product){
    
        product =  num1 * num2;
    }
    
    function getSquare(uint num) public 
    returns (uint, uint square) {
    
        square = num * num ;
        return (num, square);
    }
}