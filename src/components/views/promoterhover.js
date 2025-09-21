import React from 'react'

import { Helmet } from 'react-helmet'

import './promoterhover.css'

const Promoterhover = (props) => {
  return (
    <div className="promoterhover-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="promoterhover-promoterhover">
        <div className="promoterhover-hovering1">
          <span className="promoterhover-text1">Purchase History</span>
        </div>
        <div className="promoterhover-hovering2">
          <span className="promoterhover-text2">Stats</span>
        </div>
        <div className="promoterhover-hovering3">
          <span className="promoterhover-text3">Influencer Directory</span>
        </div>
        <div className="promoterhover-hovering4">
          <span className="promoterhover-text4">Rate/Terms</span>
        </div>
        <div className="promoterhover-hovering5">
          <span className="promoterhover-text5">Purchase History</span>
        </div>
      </div>
    </div>
  )
}

export default Promoterhover
