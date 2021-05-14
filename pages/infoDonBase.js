import Banner from '../comps/Banner';
import HamburgerMenu from '../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../comps/Page';
import ChatBubble from '../comps/ChatBubble';
import NavButton from '../comps/NavButton';
import Option from '../comps/Option';
import {useRouter} from 'next/router';

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

        <Banner text="Make Donation" onClick={OpenMenu} routeTo="/infoOptionsBase" />
        
       <Optioncont>
           <div><Option src = "/20.svg" text = "Canada Help's" routeTo="/infoDonLayBase"/></div> 
           <div><Option src = "/19.svg" text = "Food Bank"  routeTo="/infoDon2LayBase"/></div> 
           <div><Option src = "/18.svg" text = "Charity Nav" routeTo="/infoDon3LayBase"/></div> 
           <div><Option src = "/17.svg" text = "WHO" routeTo="/infoDon4LayBase"/></div> 
           <div><Option src = "/16.svg" text = "VCH UBC" routeTo="/infoDon5LayBase"/></div> 
           <div><Option src = "/21.svg" text = "Red Cross" routeTo="/infoDon6LayBase"/></div> 
        </Optioncont> 
      </Page>

    </UpperLayer>

        <HamburgerMenu z={z}/>


  </MainCont>

  )
}
