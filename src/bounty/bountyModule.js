import FayaContract from '../../build/contracts/Faya.json'
import BountyContract from '../../build/contracts/Bounty.json'
import store from '../store'
import sampleData from './bountySampleData'
import { browserHistory } from 'react-router'

const bs58 = require('bs58')

const contract = require('truffle-contract')


export const FETCH_BOUNTY = 'FETCH_BOUNTY'
function bountyFetched(bounties) {
  return {
    type: FETCH_BOUNTY,
    payload: bounties,
  }
}

function arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}

function base64toHEX(base64) {
  var raw = atob(base64);
  var HEX = '';
  for (let i = 0; i < raw.length; i++ ) {
    var _hex = raw.charCodeAt(i).toString(16)
    HEX += (_hex.length==2?_hex:'0'+_hex);
  }
  return HEX.toUpperCase();
}


// Not following redux any more, no time
export function publish(data) {
  const web3 = store.getState().web3.web3Instance

  const faya = contract(FayaContract)
  faya.setProvider(web3.currentProvider)

  const bounty = contract(BountyContract)
  bounty.setProvider(web3.currentProvider)

  const bytes = bs58.decode(data.ipfsHash)
  const ipfsHash = arrayBufferToBase64(bytes).slice(2)

  web3.eth.getCoinbase((err, coinbase) => {
    // Log errors, if any.
    if (err) {
      console.error(err);
    }

    faya.deployed().then(function(instance) {
      console.log('submitBounty', coinbase, instance, data.due, data.ipfsHash)
      window.fayaInstance = instance
      instance.submitBounty(data.due, ipfsHash, {from: coinbase}).then(() => {
        instance.getBounties.call().then((bounties) => {
          const bountyAddress = bounties[bounties.length - 1]
          bounty.at(bountyAddress).then((bountyInstance) => {
            console.log(bountyInstance)
            bountyInstance.contribute({from: coinbase, value: data.reward*Math.pow(10, 18)}).then(() => {
              console.log(arguments)
              bountyInstance.getBountyDetail.call().then(console.log)

              setTimeout(() => {
                browserHistory.push('/')
              }, 3000)
            })
          })

        })
      })
    })
  })

  console.log(data, store.dispatch)
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
                // const base64 = `Ei${arrayBufferToBase64(Buffer.from(ipfs.slice(2), 'hex'))}`
                // const hex = base64toHEX(base64)
                // const ipfsHash = bs58.encode(Buffer.from(hex, 'hex'))
                // console.log(ipfsHash)

                bountyData[bountyAddr] = {
                  address: bountyAddr,
                  ipfsHash: web3.toAscii(ipfs),
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

      const realData = []
      const keys = Object.keys(bountyData)
      // Promise.all(keys.map(k => {
      //   return new Promise((resolve, reject) => {
      //
      //   })
      // }))


      for (let addr in bountyData) {
      }
      console.log(bountyData)

      dispatch(bountyFetched(bounties))
    }
  }
}
