/* global buffer */

import React, { Component } from 'react'
import { Form, Text, Textarea } from 'react-form'
import './publishBounty.scss'
import { publish } from '../../bountyModule'

class PublishBounty extends Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.ipfs = window.IpfsApi('ipfs.zhangguangda.com', 80) // Connect to IPFS
  }

  handleChange(event) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const buf = buffer.Buffer(reader.result) // Convert data into buffer
      this.ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
        if(err) {
          console.error(err)
          return
        }
        let url = `https://ipfs.io/ipfs/${result[0].hash}`
        console.log(`Url --> ${url}`)
        this.setState({
          image: url,
        })
      })
    }
    reader.readAsArrayBuffer(event.target.files[0]); // Read Provided File
  }

  render() {
    const UploadContainer = this.state.image ? (
      <img src={this.state.image} />
    ) : (
      <label className="fileContainer">
        <span>
          Add your bounty image!
        </span>
        <input type="file" onChange={this.handleChange.bind(this)} />
      </label>
    )

    return (
      <main className="container PublishBountyContainer">
        <h1>
          Publish Bounty
        </h1>

        <div className="upload">
          {UploadContainer}
        </div>

        <Form
          onSubmit={(values) => {
            const ipfsData = {
              title: values.title,
              description: values.description,
              image: this.state.image,
              link: values.link,
            }

            const web3Data = {
              reward: parseFloat(values.reward),
              due: (+new Date(values.due) / 1000),
            }

            const buf = Buffer.from(JSON.stringify(ipfsData), 'utf8')

            this.ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
              if(err) {
                console.error(err)
                return
              }
              let url = `https://ipfs.io/ipfs/${result[0].hash}`

              web3Data.ipfsHash = result[0].hash

              publish(web3Data)

            })
          }}
        >
          {({submitForm}) => (
            <form className="form" onSubmit={submitForm}>
              <div className="content pure-g">
                <div className="pure-u-1-2">
                  <h2>Bounty</h2>
                  <div className="formItem">
                    <div className="pure-u-1-3">
                      Name
                    </div>
                    <div className="pure-u-2-3">
                      <Text field='title' />
                    </div>
                  </div>
                  <div className="formItem">
                    <div className="pure-u-1-3">
                      Description
                    </div>
                    <div className="pure-u-2-3">
                      <Textarea field='description' />
                    </div>
                  </div>
                  <div className="formItem">
                    <div className="pure-u-1-3">
                      Link
                    </div>
                    <div className="pure-u-2-3">
                      <Text field='link' />
                    </div>
                  </div>
                </div>
                <div className="pure-u-1-2">
                  <h2>Reward</h2>
                  <div className="formItem">
                    <div className="pure-u-1-3">
                      Total Amount
                    </div>
                    <div className="pure-u-2-3">
                      <Text field='reward' />
                    </div>
                  </div>
                  <div className="formItem">
                    <div className="pure-u-1-3">
                      Due Date
                    </div>
                    <div className="pure-u-2-3">
                      <Text type="date" field='due' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="submitBtnContainer">
                <button type='submit'>Publish</button>
              </div>
            </form>
          )}
        </Form>


      </main>
    )
  }
}

export default PublishBounty
