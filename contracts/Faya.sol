pragma solidity ^0.4.8;

import './Bounty.sol';

contract Faya {

  address[] activeBounty;
  address[] pastBounty;

  function startBounty(uint due, bytes32 ipfs) {
    var bounty = new Bounty(msg.sender, due, ipfs);
    activeBounty.push(bounty);
  }

  function getActiveBounty() returns (address[]) {
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
