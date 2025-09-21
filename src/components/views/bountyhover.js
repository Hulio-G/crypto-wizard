import React from 'react'

import { Helmet } from 'react-helmet'

import './bountyhover.css'

const Bountyhover = (props) => {
  return (
    <div className="bountyhover-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="bountyhover-bountyhover">
        <div className="bountyhover-hovering1">
          <span className="bountyhover-text1">Purchase History</span>
        </div>
        <div className="bountyhover-hovering2">
          <span className="bountyhover-text2">Bounty Board</span>
        </div>
        <div className="bountyhover-hovering3">
          <span className="bountyhover-text3">My Active Bountys</span>
        </div>
        <div className="bountyhover-hovering4">
          <span className="bountyhover-text4">Completed Bountys</span>
        </div>
        <div className="bountyhover-hovering5">
          <span className="bountyhover-text5">
            Place Bounty
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Bountyhover
