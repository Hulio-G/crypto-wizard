import React from 'react'

import { Helmet } from 'react-helmet'

import './influencerhover.css'

const Influencerhover = (props) => {
  return (
    <div className="influencerhover-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="influencerhover-influencerhover">
        <div className="influencerhover-hovering1">
          <span className="influencerhover-text1">Purchase History</span>
        </div>
        <div className="influencerhover-hovering2">
          <span className="influencerhover-text2">Stats</span>
        </div>
        <div className="influencerhover-hovering3">
          <span className="influencerhover-text3">Social Media Links</span>
        </div>
        <div className="influencerhover-hovering4">
          <span className="influencerhover-text4">Rate/Terms</span>
        </div>
        <div className="influencerhover-hovering5">
          <span className="influencerhover-text5">Work History</span>
        </div>
        <div className="influencerhover-hovering6">
          <span className="influencerhover-text6">Recruiter Info</span>
        </div>
      </div>
    </div>
  )
}

export default Influencerhover
