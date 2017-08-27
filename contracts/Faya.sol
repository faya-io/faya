pragma solidity ^0.4.8;

import './Bounty.sol';

contract Faya {

  address[] bounties;

  // event Log(bytes32 _msg);

  function submitBounty(uint due, bytes32 ipfs) {
    address bounty = new Bounty(msg.sender, due, ipfs);
    bounties.push(bounty);
  }

  function getBounties() constant returns (address[]) {
    // Log(bytes32(activeBounty.length));
    return bounties;
  }
  
}
