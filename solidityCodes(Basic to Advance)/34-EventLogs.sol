pragma solidity ^0.5.0;

contract SimpleAuction {
    event HighestBidIncreased(address bidder, uint amount); // Event

    function bid() public payable {
        emit HighestBidIncreased(msg.sender, msg.value); // Triggering event
    }
}