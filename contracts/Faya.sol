pragma solidity ^0.4.8;

import './Bounty.sol';

contract Faya {

  address[] activeBounty;
  address[] pastBounty;

  event Log(bytes32 _msg);

  function startBounty(uint due, bytes32 ipfs) {
    address bounty = new Bounty(msg.sender, due, ipfs);
    activeBounty.push(bounty);
  }

  function getActiveBounty() returns (address[]) {
    Log(bytes32(activeBounty.length));
    return activeBounty;
  }

  function getPastBounty() returns (address[]) {
    var result = new address[](20);
    for (uint i = 0; i < pastBounty.length; i++) {
      result[i] = pastBounty[i];
    }
    return result;
  }

  
}
