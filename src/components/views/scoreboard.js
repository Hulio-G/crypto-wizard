import React from 'react'

import { Helmet } from 'react-helmet'

import './scoreboard.css'

const Scoreboard = (props) => {
  return (
    <div className="scoreboard-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="scoreboard-scoreboard">
        <div className="scoreboard-hovering1">
          <span className="scoreboard-text1">Purchase History</span>
        </div>
        <div className="scoreboard-hovering2">
          <span className="scoreboard-text2">Top Promoters</span>
        </div>
        <div className="scoreboard-hovering3">
          <span className="scoreboard-text3">Top Influencers</span>
        </div>
        <div className="scoreboard-hovering4">
          <span className="scoreboard-text4">Top Recruiters</span>
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
