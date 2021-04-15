import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BirdLogo from '../comps/BirdLogo'
import Bird from '../comps/bird'
import Button from '../comps/Button'
import AboutUs from '../comps/aboutUs'
import React, { useState ,useEffect } from "react"
import {useTransition, animated, config } from 'react-spring'
import { render } from 'react-dom'




  const slides = [
    { id: 0, url: "/bird1.svg"  },
    { id: 1, url: "/bird2.svg" },
    { id: 2, url: "/bird3.svg" },
    { id: 3, url: "/bird4.svg" },
    { id: 4, url: "/bird5.svg" },
    { id: 5, url: "/bird6.svg" },

  ]
  
  const App = () => {
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    })
    useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])

  
  return transitions.map(({ item, props, key }) =>  (
    <div className="wrapper">
      <Head>
        <title>Home Page</title>:
      </Head>{" "}
      <div className="page">
      <animated.div className="logo" key={key}
  
      style={{ ...props, backgroundImage: `url("/bird.svg")`}}/> 
     
      <div className="rooter">
      ©2021 Group-7 Design1-Demo MDDD2C BCIT </div>
      <div className="bgc"> </div>
      
      
      
      </div>
      
      
    
   
   
    </div>
  ))
}
render(<App />, document.getElementsByClassName('logo'))
