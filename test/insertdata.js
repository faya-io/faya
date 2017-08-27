var Faya = artifacts.require("./Faya.sol");
var Bounty = artifacts.require("./Bounty.sol");


// const bountiesData = [{due: 1506499867, ipfs: "abc"},{due: 1506499867, ipfs: "def"},{due: 1506499867, ipfs: "123"},{due: 1506499867, ipfs: "456"}]

const bountiesData = [
    {
      "address": '0xfc305126a2740c12345a8da11f5e1b7e5e65bd23',
      "ipfsHash": 'abc',
      "content": {
        "title": 'next space hero wanted',
        "description": 'praesent commodo cursus magna, vel scelerisque nisl consectetur et. sed posuere consectetur est at lobortis.',
        "category": 'marketing',
        "image": 'https://ipfs.io/ipfs/QmToRvjeZJjaL6JwoFW76ePGeewFWFad1C9WZAxW31zkfM',
      },
      "reward": '1000',
      "due": '1503807024',
      "initiator": '0xfc305126a2740c48494a8da11f5e1b7e5e65bd45',
      "claims": [{
        "ipfsHash": 'def',
        "submitter": '0xfc305126a2740c48494a8da11f5e1b7e5e65bd23',
        "upVotes": 10,
        "downVotes": 1,
        "content": {
          "data": "aenean lacinia bibendum nulla sed consectetur.\n            praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            nullam id dolor id nibh ultricies vehicula ut id elit.\n            morbi leo risus, porta ac consectetur ac, vestibulum at eros."
        },
      }],
    },
    {
      "address": "0xFc305126A2740C12345A8dA11f5E1B7e5E65Bd23",
      "ipfsHash": "abc",
      "content": {
        "title": "Why is Everyone Talking about NMD?",
        "image": "https://ipfs.io/ipfs/QmQkkHTRhZRChJbu4K6T8d8dhqWrHMibNyxnaB35hdQR9R"
      },
      "reward": "50000",
      "due": "1503807024",
      "initiator": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd45",
      "claims": [
        {
          "ipfsHash": "def",
          "submitter": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd23",
          "upVotes": 10,
          "downVotes": 1,
          "content": {
            "data": "Aenean lacinia bibendum nulla sed consectetur.\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n              Nullam id dolor id nibh ultricies vehicula ut id elit.\n              Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          }
        }
      ]
    },
    {
      "address": "0xFc305126A2740C12345A8dA11f5E1B7e5E65Bd23",
      "ipfsHash": "abc",
      "content": {
        "title": "Promote Srteet Artists. Win Up To $40000",
        "image": "https://ipfs.io/ipfs/QmR1SeocoS2oPa3pTGTcU74aca1b2PEiC4GJAuPcGazFE9",
        "description": "Street Art Galleries (SAG) was initially established to provide a forum for talented artists to express their creativity and showcase their artwork. Our goal at SAG is to highlight the artistic value of street art.  SAG is now accepting submissions for its 2nd Annual Street Art Contest till January 1, 2018. 1st Place Prize is $40,000. For additional details, please see the Contest Rules."
      },
      "reward": "40000",
      "due": "1503807024",
      "initiator": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd45",
      "claims": [
        {
          "ipfsHash": "def",
          "submitter": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd23",
          "upVotes": 10,
          "downVotes": 1,
          "content": {
            "data": "Aenean lacinia bibendum nulla sed consectetur.\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n              Nullam id dolor id nibh ultricies vehicula ut id elit.\n              Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          }
        }
      ]
    },
    {
      "address": "0xFc305126A2740C12345A8dA11f5E1B7e5E65Bd23",
      "ipfsHash": "abc",
      "content": {
        "title": "US Open of Surfing in Huntington Beach",
        "image": "https://ipfs.io/ipfs/QmTUqq629KZibfB9RM1QVYRy5MgiPLbf2GW8exBV5H8d9X"
      },
      "reward": "35000",
      "due": "1503807024",
      "initiator": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd45",
      "claims": [
        {
          "ipfsHash": "def",
          "submitter": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd23",
          "upVotes": 10,
          "downVotes": 1,
          "content": {
            "data": "Aenean lacinia bibendum nulla sed consectetur.\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n              Nullam id dolor id nibh ultricies vehicula ut id elit.\n              Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          }
        }
      ]
    },
    {
      "address": "0xFc305126A2740C12345A8dA11f5E1B7e5E65Bd23",
      "ipfsHash": "abc",
      "content": {
        "title": "365 Days on the Sea",
        "image": "https://ipfs.io/ipfs/QmNti4CcJUP9smdwMZdn8eRUp57FZdGhV5RYihGarRVTdz"
      },
      "reward": "30000",
      "due": "1503807024",
      "initiator": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd45",
      "claims": [
        {
          "ipfsHash": "def",
          "submitter": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd23",
          "upVotes": 10,
          "downVotes": 1,
          "content": {
            "data": "Aenean lacinia bibendum nulla sed consectetur.\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n              Nullam id dolor id nibh ultricies vehicula ut id elit.\n              Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          }
        }
      ]
    },
    {
      "address": "0xFc305126A2740C12345A8dA11f5E1B7e5E65Bd23",
      "ipfsHash": "abc",
      "content": {
        "title": "People say it is a legendary chair for developers",
        "image": "https://ipfs.io/ipfs/QmV61aRFnqeyAVo3MV1jAduRZqR9yVCoXqP9zRNTAmGmgm"
      },
      "reward": "10000",
      "due": "1503807024",
      "initiator": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd45",
      "claims": [
        {
          "ipfsHash": "def",
          "submitter": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd23",
          "upVotes": 10,
          "downVotes": 1,
          "content": {
            "data": "Aenean lacinia bibendum nulla sed consectetur.\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n              Nullam id dolor id nibh ultricies vehicula ut id elit.\n              Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          }
        }
      ]
    },
    {
      "address": "0xFc305126A2740C12345A8dA11f5E1B7e5E65Bd23",
      "ipfsHash": "abc",
      "content": {
        "title": "Bring your Gopro. It’s time for Hawaii",
        "image": "https://ipfs.io/ipfs/Qmb6EDu1CgLcGtPekwcVnRG8KSroY4DLLPjfGNhXVEbTe5"
      },
      "reward": "8000",
      "due": "1503807024",
      "initiator": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd45",
      "claims": [
        {
          "ipfsHash": "def",
          "submitter": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd23",
          "upVotes": 10,
          "downVotes": 1,
          "content": {
            "data": "Aenean lacinia bibendum nulla sed consectetur.\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n              Nullam id dolor id nibh ultricies vehicula ut id elit.\n              Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          }
        }
      ]
    },
    {
      "address": "0xFc305126A2740C12345A8dA11f5E1B7e5E65Bd23",
      "ipfsHash": "abc",
      "content": {
        "title": "Out of stock?Just take my money!",
        "image": "https://ipfs.io/ipfs/Qmc8kYJkk8CDTd2z1EY9z3fYa74i2obhwu4UQDPBudGFr7"
      },
      "reward": "5000",
      "due": "1503807024",
      "initiator": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd45",
      "claims": [
        {
          "ipfsHash": "def",
          "submitter": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd23",
          "upVotes": 10,
          "downVotes": 1,
          "content": {
            "data": "Aenean lacinia bibendum nulla sed consectetur.\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n              Nullam id dolor id nibh ultricies vehicula ut id elit.\n              Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          }
        }
      ]
    },
    {
      "address": "0xFc305126A2740C12345A8dA11f5E1B7e5E65Bd23",
      "ipfsHash": "abc",
      "content": {
        "title": "The Amazing Race. Aspen, CO.",
        "image": "https://ipfs.io/ipfs/QmdXZXkbusARjJuAnPT8Z7zaWbbTU1cY9iXbUYUwAdbuS6"
      },
      "reward": "4000",
      "due": "1503807024",
      "initiator": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd45",
      "claims": [
        {
          "ipfsHash": "def",
          "submitter": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd23",
          "upVotes": 10,
          "downVotes": 1,
          "content": {
            "data": "Aenean lacinia bibendum nulla sed consectetur.\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n              Nullam id dolor id nibh ultricies vehicula ut id elit.\n              Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          }
        }
      ]
    },
    {
      "address": "0xFc305126A2740C12345A8dA11f5E1B7e5E65Bd23",
      "ipfsHash": "abc",
      "content": {
        "title": "The Long Beach Port Container Race.",
        "image": "https://ipfs.io/ipfs/QmXjyZL5tVADiJdamZJAoAjA6C53DfTPAL23e8rbWnPnNR"
      },
      "reward": "3500",
      "due": "1503807024",
      "initiator": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd45",
      "claims": [
        {
          "ipfsHash": "def",
          "submitter": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd23",
          "upVotes": 10,
          "downVotes": 1,
          "content": {
            "data": "Aenean lacinia bibendum nulla sed consectetur.\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n              Nullam id dolor id nibh ultricies vehicula ut id elit.\n              Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          }
        }
      ]
    },
    {
      "address": "0xFc305126A2740C12345A8dA11f5E1B7e5E65Bd23",
      "ipfsHash": "abc",
      "content": {
        "title": "One Way Ticket to Mars!",
        "image": "https://ipfs.io/ipfs/QmQDtPacQoUHa16Z3NhPGD2E1foX1b4qyjmEfimai2qssh"
      },
      "reward": "2000",
      "due": "1503807024",
      "initiator": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd45",
      "claims": [
        {
          "ipfsHash": "def",
          "submitter": "0xFc305126A2740C48494A8dA11f5E1B7e5E65Bd23",
          "upVotes": 10,
          "downVotes": 1,
          "content": {
            "data": "Aenean lacinia bibendum nulla sed consectetur.\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n              Nullam id dolor id nibh ultricies vehicula ut id elit.\n              Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          }
        }
      ]
    }
  ]

contract('Faya', function(accounts){
    it("should create bounty", function() {
        const faya = Faya.at('0x98263ec5bbd683973132f9e0ba0530bf9dab2b52')
            bountiesData.map((b) => {
                console.log(faya.address)
                faya.submitBounty(b.due, b.ipfsHash)
            })

            faya.getBounties.call().then((bounties) => {
                console.log(bounties)
                bounties.map((bountyAddr) => {
                    const b = Bounty.at(bountyAddr)
                    for (let i = 0; i< 10; i++) { 
                        b.submitClaim(Math.random().toString(36).substring(10))
                    }
                })
                
            })
    })
})