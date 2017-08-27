import FayaContract from '../../../../build/contracts/Faya.json'
import BountyContract from '../../../../build/contracts/Bounty.json'
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


  return function(dispatch) {
    // const bounties = []
    // TODO

    // Fake Data
    const bounties = {
      activeBounty: [{
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
      }],
      pastBounty: []
    }

    // web3.dlksdfjdlk().then(() => {
    //
    // })
    //   .then(() => {
    //
    //   })
    //   .then(() => {
    //
    //     dispatch(bountyFetched(bounties))
    //   })
    //
    dispatch(bountyFetched(bounties))
  }
}
