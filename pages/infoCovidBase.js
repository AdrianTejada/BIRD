import Banner from '../comps/Banner';
import HamburgerMenu from '../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../comps/Page';
import ChatBubble from '../comps/ChatBubble';
import NavButton from '../comps/NavButton';
import Option from '../comps/Option';

//custom tags for base page
const MainCont = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UpperLayer = styled.div `
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  position: relative;
`

// for speaker only
const SpeakerContainer = styled.div`
  width: 276px;
  height:221px;
  overflow:hidden;
`

const Speaker = styled.img`
  width: 100%;
  height:100%;

  position:relative;
`

const NavContainer = styled.div`
  position:absolute;
  bottom:255px;
`
const Optioncont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    margin-top: 130px;
`





export default function Home() {
  const [menustate, setMenuState] = useState(false);
  const [zindex, setZIndex] = useState(false)
  var right=0;
  var z=-1
  if (menustate === true)
  {
    right=178;
    var z = 0;
  }

  if (zindex === true)
  {
    z=2
  }


const OpenMenu = () => {
    setMenuState(!menustate);
    if (menustate === false)
    {
      setTimeout(HandleZ, 500)
    }
    else
    {
      setTimeout(HandleZ, 1)
    }
}

const HandleZ = () => {
  setZIndex(!zindex)
}

  return (<MainCont>
    <UpperLayer>
      <Page right={right}>

        <Banner text="Covid-19" onClick={OpenMenu} routeTo="/" />
        
       <Optioncont>
           <div><Option src = "/1.svg" text = "General info" routeTo="/items/GInfo" /></div> 
           <div><Option src = "/2.svg" text = "Vaccineinfo"  routeTo="/items/VInfo"/></div> 
           <div><Option src = "/4.svg" text = "Government Policies" routeTo="/items/GovernInfo"/></div> 
           <div><Option src = "/3.svg" text = "Take Action" routeTo="/infoOptionsBase"/></div> 
        </Optioncont> 
      </Page>

    </UpperLayer>

    <HamburgerMenu  z={z}/>

  </MainCont>

  )
}
