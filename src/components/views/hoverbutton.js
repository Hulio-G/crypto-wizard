import React from 'react'

import { Helmet } from 'react-helmet'

import './hoverbutton.css'

const Hoverbutton = (props) => {
  return (
    <div className="hoverbutton-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="hoverbutton-dummy-container">
        <button className="hoverbutton-hoverbutton"></button>
      </div>
    </div>
  )
}

export default Hoverbutton
