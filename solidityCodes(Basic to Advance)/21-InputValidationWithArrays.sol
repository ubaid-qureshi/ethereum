pragma solidity ^0.5.0;

contract WorkingWithArrays {
    

    function f(uint len) public returns(string memory){
        
        string[] memory a = new string[](7);
        bytes memory b = new bytes(len);

        assert(a.length == 7);
        //assert(a.length == 6);
        require(b.length == len);


        return ("Good Transaction");
    }
}