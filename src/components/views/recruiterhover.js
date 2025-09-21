import React from 'react'

import { Helmet } from 'react-helmet'

import './recruiterhover.css'

const Recruiterhover = (props) => {
  return (
    <div className="recruiterhover-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="recruiterhover-recruiterhover">
        <div className="recruiterhover-hovering1">
          <span className="recruiterhover-text1">Purchase History</span>
        </div>
        <div className="recruiterhover-hovering2">
          <span className="recruiterhover-text2">Stats</span>
        </div>
        <div className="recruiterhover-hovering3">
          <span className="recruiterhover-text3">Earnings</span>
        </div>
        <div className="recruiterhover-hovering4">
          <span className="recruiterhover-text4">Referral Link + QR</span>
        </div>
      </div>
    </div>
  )
}

export default Recruiterhover
