import React, { useEffect, useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

const Landing = () => {
  const [connections, setConnections] = useState(0)

  useEffect(() => {
    try {
      api.get('/connections').then(resp => {
        const response = resp.data.total
        setConnections(response)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  console.log(connections)

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div id="logo-container" className="logo-container">
          <img src={logoImg} alt="logoImg" />
          <h2>Votre plateforme d'études online</h2>
        </div>

        <img src={landingImg} alt="landingImg" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="study icon" />
            Étudier
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="give-classes icon" />
            Donner cours
          </Link>
        </div>

        <span className="total-connexions">
          Total de connexions {connections} <img src={purpleHeartIcon} alt="purpleHeart"></img>
        </span>
      </div>
    </div>
  )
}

export default Landing
