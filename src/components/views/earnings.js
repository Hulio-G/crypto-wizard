import React from 'react'

import { Helmet } from 'react-helmet'

import './earnings.css'

const Earnings = (props) => {
  return (
    <div className="earnings-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="earnings-earnings">
        <div className="earnings-hovering1">
          <span className="earnings-text1">Purchase History</span>
        </div>
        <div className="earnings-hovering2">
          <span className="earnings-text2">Current balance</span>
        </div>
        <div className="earnings-hovering3">
          <span className="earnings-text3">Lifetime earnings</span>
        </div>
        <div className="earnings-hovering4">
          <span className="earnings-text4">Pending payouts (es. date)</span>
        </div>
        <div className="earnings-hovering5">
          <span className="earnings-text5">Withdraw/ p-o method settings</span>
        </div>
      </div>
    </div>
  )
}

export default Earnings
