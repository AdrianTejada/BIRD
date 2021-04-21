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
   content: "  Levi Chen,  ",
   content2: "Adrian Tejada",
   content3: "Aly Ali ",
  
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
    const [content2, setContent2] =useState("")
    const [content3, setContent3] =useState("")
    const [bgc5,setbgc5] = useState(false);
    const [bgc6,setbgc6] = useState(false);
    const aboutusClick =()=>{
      setTittle(subtext.aboutus.title);
      setContent(subtext.aboutus.content);
      setContent2(subtext.aboutus.content2);
      setContent3(subtext.aboutus.content3);
      setbgc5(!bgc5);
     
      
    }
    const teamClick =()=>{
      setTittle(subtext.team.title);
      setContent(subtext.team.content);
      setContent2(subtext.team.content2);
      setContent3(subtext.team.content3);
      setbgc6(!bgc6);
     
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
      
      <div className="aboutUs" > 
      <AboutUs contdisplay ={display ? "block" :"none"} 
      title={title} text={content} text2={content2} text3={content3}
      bgcolor5={bgc5 ? "#9A9999": "#FF7A00"}  
      bgcolor6={bgc6 ? "#FF7A00": "#9A9999"}
      
      aboutusClick={aboutusClick}
      teamClick={ teamClick} />
     </div>
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
