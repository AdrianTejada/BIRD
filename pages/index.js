import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BirdLogo from '../comps/BirdLogo'
import Button from '../comps/Button'
import AboutUs from '../comps/aboutUs'
import React, { useState } from "react"
import {useSpring, animated} from 'react-spring'
import {config} from 'react-spring'

const subtext={
  aboutus:{
    title:"Our Goal",
    content:"BIRD is an app designed to educate its users about the COVID-19 Virus. For those who want to take action or test their knowledge, there are also Donation links and quizzes.",
  },
  team:{
    title:"Our Team",
   content: "  Levi Chen, Adrian Tejada ,  Aly Ali ",
  
  }
  }

export default function Home() {

  const mainLogo = useSpring( { config: { duration: 1000 },opacity: 1, from: {opacity: 0}, delay: 1000,})
  const logotext = useSpring({ config:config.wobbly,
   transform: 'translate3d(0,350px,0)',from: { transform: 'translate3d(0,0px,0)'}
  })
  const text = useSpring( { config: { duration: 300 },opacity: 1, from: {opacity: 0}, delay: 2000,})
  const [display,setdisplay] = useState(false);
  const [bgc,setbgc] = useState(false);

  const HandleClick = () => {
    setdisplay(!display);
    setbgc(!bgc);

  }

  const [title, setTittle] =useState("Our Goal " )
    const [content, setContent] =useState("BIRD is an app designed to educated its users about the COVID-19 Virus. For those who want to take action or test their knowlage, there are also Donation links and quizes.")

    const aboutusClick =()=>{
      setTittle(subtext.aboutus.title)
      setContent(subtext.aboutus.content)
      
    }
    const teamClick =()=>{
      setTittle(subtext.team.title)
      setContent(subtext.team.content)
    
    }
  
  
  return (
    <div className="wrapper">
      <Head>
        <title>Home Page</title>:
      </Head>{" "}
      <div className="page">
      <animated.div className="logo"  style={mainLogo} ><BirdLogo Fontdisplay="none"/></animated.div>
      <animated.div className="logotext" style={logotext}><BirdLogo display="none"/></animated.div>
      <animated.div className="Subtext" style={text}><p>Big Issues Ready for Discovery  </p></animated.div>
      
      <div className="aboutUs" > <AboutUs contdisplay ={display ? "block" :"none"} 
      title={title} text={content}
       aboutusClick={aboutusClick}
    teamClick={ teamClick}
     
    /></div>
      <div className="button">
        
      <Button routeTo ="/infoCovidBase"/>
      <Button  text="About us" width="140px" bgcolor={bgc ? "#949494": "#C4C4C4"} onClick={HandleClick}/>
      </div>
      <div className="rooter">
      ©2021 Group-7 Design1-Demo MDDD2C BCIT </div>
      <div className="bgc"> </div>
      
      
      
      </div>
      
      
    
   
   
    </div>
  )
}
