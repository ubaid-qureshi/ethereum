pragma solidity >=0.4.25 <0.6.0;

contract AssetTransfer
{
    enum StateType { Active, OfferPlaced, PendingInspection, Terminated }
    address public AssetOwner;
    string public Description;
    StateType public State;

    address public AssetApplicant;
    address public AssetInspector;

    constructor(string memory description) public
    {
        AssetOwner = msg.sender;
        Description = description;
        State = StateType.Active;
    }

    function Terminate() public
    {
        if (AssetOwner != msg.sender && AssetInspector != msg.sender)
        {
            revert();
        }

        State = StateType.Terminated;
    }

    function Request() public
    {
        if (AssetOwner == msg.sender)
        {
            revert();
        }

        if (State != StateType.Active)
        {
            revert();
        }

        AssetApplicant = msg.sender;
        State = StateType.OfferPlaced;
    }

    function AcceptOffer(address inspector) public
    {
        if (State != StateType.OfferPlaced)
        {
            revert();
        }
        if (AssetOwner != msg.sender)
        {
            revert();
        }

        State = StateType.PendingInspection;
        AssetInspector = inspector;
    }

    function Reject() public
    {
        if (AssetOwner != msg.sender)
        {
            revert();
        }
        if (State == StateType.OfferPlaced )
        {
            State = StateType.Active;
            AssetApplicant = 0x0000000000000000000000000000000000000000;
             
        }

        
    }

    function MarkInspected() public
    {
        if (AssetOwner == msg.sender &&  AssetApplicant == msg.sender)
        {
            revert();
        }

        if (State == StateType.PendingInspection)
        {
            State = StateType.Active;
            AssetInspector = msg.sender;
            AssetOwner = AssetApplicant;
            AssetApplicant = 0x0000000000000000000000000000000000000000;
        }

        else
        {
            revert();
        }
    }
}