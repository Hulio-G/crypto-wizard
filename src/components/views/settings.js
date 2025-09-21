import React from 'react'

import { Helmet } from 'react-helmet'

import './settings.css'

const Settings = (props) => {
  return (
    <div className="settings-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="settings-settings">
        <div className="settings-hovering1">
          <span className="settings-text1">Purchase History</span>
        </div>
        <div className="settings-hovering2">
          <span className="settings-text2">Personal info</span>
        </div>
        <div className="settings-hovering3">
          <span className="settings-text3">Payout methods</span>
        </div>
        <div className="settings-hovering4">
          <span className="settings-text4">Linked acts (YouTube API, etc)</span>
        </div>
        <div className="settings-hovering5">
          <span className="settings-text5">Notifications</span>
        </div>
      </div>
    </div>
  )
}

export default Settings
