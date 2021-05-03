//Full bird Icon for Levi
import React from "react";
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from "react-spring";
import Button from '../Button'


const show = keyframes`
0%{
  opacity: 0; 
}
33% {
  opacity: 1; 
}
66% {
  opacity: 0; 
}
100% {
  opacity: 0; 
}


`;
const show2 = keyframes`
0%{
  opacity: 0; 
}
33% {
  opacity: 0; 
}
66% {
  opacity: 1; 
}
100% {
  opacity: 0; 
}

`;
const show3 = keyframes`
0%{
  opacity: 0; 
}
33% {
  opacity: 0; 
}
66% {
  opacity: 0; 
}
100% {
  opacity: 1; 
}

`;
const ImgesCont =styled(animated.div)`
display:flex;
flex-direction:column;
align-items:center;
margin-top:-30px;

`;
const ImgCont2 =styled.img`
width:${(props)=>props.width2}px;
height:auto; 
margin-top:50px;
position:absolute;
animation: 8s ${show}   step-start infinite;


`
const ImgCont3 =styled.img`
width:${(props)=>props.width3}px;
height:auto;
margin-top:50px;
position:absolute;
animation: 8s ${show2}   step-start infinite;


`
const ImgCont4 =styled.img`
width:${(props)=>props.width4}px;
height:auto;
margin-top:50px;
position:absolute;
animation: 8s ${show3}   step-start infinite;


`


//props
const ImageCompV2= ({
 width2=310,
 width3=330,
 width4=310,
 
 
}) => {
 
  return (
   
  <ImgesCont    >
      <ImgCont2 src="/Quarantine-1.svg"   width2 ={width2 } />
      <ImgCont3 src="/Quarantine-2.svg"   width3 ={width3 } />
      <ImgCont4 src="/Quarantine-3.svg"   width4 ={width4 } />
    </ImgesCont>  
    
  )
}


export default ImageCompV2;
