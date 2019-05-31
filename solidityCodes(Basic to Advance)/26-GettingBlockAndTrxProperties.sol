pragma solidity ^0.5.0;

contract BlockAndTransactionProperties {
    
    function getBlockProperties() view public 
    returns(uint blockNum, uint dificulty, uint timestamp, uint balance){
        
        blockNum = block.number;     
        dificulty = block.difficulty;
        timestamp = block.timestamp;  
        balance = address(this).balance;
    }

    function getTransactionProperties() view public 
    returns(address sender, bytes memory data, uint gasLeft, uint gasPrice){
        
        sender = msg.sender;
        data = msg.data;
        gasLeft = gasleft();
        gasPrice = tx.gasprice;
    }
}
