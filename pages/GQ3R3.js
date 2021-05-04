import Banner from '../comps/Banner';
import HamburgerMenu from '../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../comps/Page'
import ChatBubble from '../comps/ChatBubble'
import QuizOption from '../comps/QuizOptions'
import Avatar from '../comps/Spaeker'
import Button from '../comps/Button'

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
    console.log(right)
}

const HandleZ = () => {
  setZIndex(!zindex)
}

  const SurveyCont= styled.div`
  position:absolute;
  z-index:1;
  justify-content:center;
  margin-top:150px;
`
const Resoult= styled.div`
  font-size:65px;
  font-weight:400;
  color:orange;
  justify-content:center;
  text-align:center;
  margin:50px;
  
`
const Annousement= styled.div`
  font-size:24px;
  font-weight:400;
  color:#c4c4c4;
  justify-content:center;
  text-align:center;
  
`
const Comment= styled.div`
  font-size:24px;
  font-weight:400;
  color:orange;
  justify-content:center;
`
const Subtitle = styled.div`
font-size:30px;
  font-weight:400;
  color:orange4;
  justify-content:center;
  text-align:center;
  margin:10px;
`
const ButtonBigCont =styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  
  margin-top:50px;
`

  console.log(menustate, right)
  return (<MainCont>
    <UpperLayer>
      <Page right={right}>
        <Banner text="General Information - Quiz" onClick={OpenMenu} />
        
        
        <ChatBubble display="none"/>
        <SurveyCont>
          <Annousement>
            Your result:
          </Annousement>
          <Resoult>
          3/3
          </Resoult>
          <Comment>
           <Subtitle> Awesome!</Subtitle> You do the good job!
          </Comment>
          <ButtonBigCont>
          <Button  text="Read info" routeTo="/items/GovernInfo" />
          <Button text="Retake the Quiz" routeTo =  "/GQ3"/>
          </ButtonBigCont>
         
        
        </SurveyCont>
        <Avatar   src="/R3.svg" width="350"/>

        
        


      </Page>
     
    </UpperLayer>

    <HamburgerMenu z={z}/>

  </MainCont>

  )
}
