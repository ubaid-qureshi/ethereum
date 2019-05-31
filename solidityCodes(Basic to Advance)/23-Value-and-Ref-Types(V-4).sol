pragma solidity ^0.4.0;

contract Types {

    uint num1 = 10;
    uint[] arr1 = [1,2,3];
    
    function valueType (uint newNum) public returns(uint,uint){
        
        uint num2 = num1;
        num1 += newNum;
        return(num1,num2);
    }
    
    function refType (uint newNum) public 
    returns(uint[] ,uint[] ){
        
        uint[] arr2 = arr1;
        arr1[0] = newNum;
        return(arr1,arr2);
    }   
}