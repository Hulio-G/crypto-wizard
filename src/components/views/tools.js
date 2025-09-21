import React from 'react'

import { Helmet } from 'react-helmet'

import './tools.css'

const Tools = (props) => {
  return (
    <div className="tools-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="tools-tools">
        <div className="tools-hovering1">
          <span className="tools-text1">Purchase History</span>
        </div>
        <div className="tools-hovering2">
          <span className="tools-text2">Free Software</span>
        </div>
        <div className="tools-hovering3">
          <span className="tools-text3">Free AI Tools</span>
        </div>
        <div className="tools-hovering4">
          <span className="tools-text4">Software</span>
        </div>
        <div className="tools-hovering5">
          <span className="tools-text5">AI Tools</span>
        </div>
      </div>
    </div>
  )
}

export default Tools
