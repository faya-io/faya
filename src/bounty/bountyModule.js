import FayaContract from '../../build/contracts/Faya.json'
import BountyContract from '../../build/contracts/Bounty.json'
import { browserHistory } from 'react-router'
import store from '../store'

const contract = require('truffle-contract')


export const FETCH_BOUNTY = 'FETCH_BOUNTY'
function bountyFetched(bounties) {
  return {
    type: FETCH_BOUNTY,
    payload: bounties,
  }
}

export function fetchBounty() {
  console.log('dddddd', store.getState().web3)
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
      console.log('NININMMAMAM', bountyData)
      // Fake Data
      const bounties = [{
          address: '0xFc305126A2740C12345A8dA11f5E1B7e5E65Bd23',
          ipfsHash: 'abc',
          content: {
            title: 'Next Space Hero Wanted',
            description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.',
            category: 'Marketing',
            purchaseLink: '/xxx',
            image: 'https://ipfs.io/ipfs/QmezV8uyVv6c6NAmwwz4mk7A22NLMBfAzhDxTXEgbeMEKg',
          },
          reward: '1000',
          due: '1503807024',
          initiator: '0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd45',
          claims: [{
            ipfsHash: 'def',
            submitter: '0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd23',
            upVotes: 10,
            downVotes: 1,
            content: {
              data: `Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Nullam id dolor id nibh ultricies vehicula ut id elit.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`,
            },
          }],
        }]

      dispatch(bountyFetched(bountyData))
    }
  }
}
