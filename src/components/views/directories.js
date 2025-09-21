import React from 'react'

import { Helmet } from 'react-helmet'

import './directories.css'

const Directories = (props) => {
  return (
    <div className="directories-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="directories-directories">
        <div className="directories-hovering1">
          <span className="directories-text1">Influencer Directory</span>
        </div>
        <div className="directories-hovering2">
          <span className="directories-text2">Discord Server Directory</span>
        </div>
        <div className="directories-hovering3">
          <span className="directories-text3">Telegram Groups Directory</span>
        </div>
        <div className="directories-hovering4">
          <span className="directories-text4">Onion Sites Directory</span>
        </div>
        <div className="directories-hovering5">
          <span className="directories-text5">Websites Directory</span>
        </div>
      </div>
    </div>
  )
}

export default Directories
