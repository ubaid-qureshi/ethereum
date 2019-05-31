pragma solidity ^0.5.0;

contract Fruits {

    string[] fruits;
    
    constructor () public {
        
        fruits.push('apple');
        fruits.push('orange');
        //Start with memory then switch to storage and redeploy
        //string[] storage newFruits = fruits;
        string[] memory newFruits = fruits;
        newFruits[1] = 'mango';
    }
    
    function getFruits () view public returns (string memory, string memory){
        return(fruits[0], fruits[1]);
    }
}
