import FayaContract from '../../build/contracts/Faya.json'
import BountyContract from '../../build/contracts/Bounty.json'
import store from '../store'
import sampleData from './bountySampleData'

const contract = require('truffle-contract')


export const FETCH_BOUNTY = 'FETCH_BOUNTY'
function bountyFetched(bounties) {
  return {
    type: FETCH_BOUNTY,
    payload: bounties,
  }
}

export function fetchBounty() {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {

    return function(dispatch) {

      const faya = contract(FayaContract)
      faya.setProvider(web3.currentProvider)

      const bounty = contract(BountyContract)
      bounty.setProvider(web3.currentProvider)

      const bountyData = {}

      web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.
        if (error) {
          console.error(error);
        }

        faya.deployed().then(function(instance) {
          instance.getBounties.call().then((bounties) => {
            bounties.map((bountyAddr) => {
              const b = bounty.at(bountyAddr)
              b.getBountyDetail.call().then(([ipfs, isActive, due, reward, claimCount]) => {
                bountyData[bountyAddr] = {
                  address: bountyAddr,
                  ipfsHash: ipfs,
                  isActive: isActive,
                  due: due.toNumber(),
                  reward: reward.toNumber(),
                  claims: [],
                }
                for (var i=0; i < claimCount; i++) {
                  b.getClaimDetail.call(i).then(([submitter, ipfsClaim, upVotes, downVotes]) => {
                    bountyData[bountyAddr].claims[i] = {
                      ipfsHash: ipfsClaim,
                      submitter: submitter,
                      upVotes: upVotes.toNumber(),
                      downVotes: downVotes.toNumber(),
                    }
                  })
                }
              })
            })
          })
        })
      })
      // const bounties = []
      // TODO
      // console.log('NININMMAMAM', bountyData)
      // Fake Data
      const bounties = sampleData
      console.log(sampleData)

      dispatch(bountyFetched(bounties))
    }
  }
}
