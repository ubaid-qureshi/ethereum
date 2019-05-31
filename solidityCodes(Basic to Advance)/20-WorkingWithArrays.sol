pragma experimental ABIEncoderV2;

contract WorkingWithArrays {
    
    function f(string memory value) public returns(string[] memory){

    	string[] memory arr = new string[](7);
        arr[3] = value;
        
        return (arr);
    }
}