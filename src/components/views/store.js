import React from 'react'

import { Helmet } from 'react-helmet'

import './store.css'

const Store = (props) => {
  return (
    <div className="store-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="store-store">
        <div className="store-hovering1">
          <span className="store-text1">Crypto Software / Tools</span>
        </div>
        <div className="store-hovering2">
          <span className="store-text2">Crypto Phones</span>
        </div>
        <div className="store-hovering3">
          <span className="store-text3">Crypto Hardware</span>
        </div>
        <div className="store-hovering4">
          <span className="store-text4">Crypto Cards</span>
        </div>
      </div>
    </div>
  )
}

export default Store
