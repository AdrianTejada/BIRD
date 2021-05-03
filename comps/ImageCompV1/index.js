//Full bird Icon for Levi
import React from "react";
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from "react-spring";
import Button from '../Button'



const ImgesCont =styled(animated.div)`
display:flex;
flex-direction:column;
align-items:center;
margin-top:40px;

`;
const ImgCont2 =styled.img`
width:${(props)=>props.width2}px;
height:auto; 
margin-top:50px;
position:absolute;
z-index:5;
opacity:${(props)=>props.opacity2};
`
const ImgCont3 =styled.img`
width:${(props)=>props.width3}px;
height:auto;
margin-top:50px;
position:absolute;
z-index:4;
opacity:${(props)=>props.opacity3};
`
const ImgCont4 =styled.img`
width:${(props)=>props.width4}px;
height:auto;
margin-top:50px;
position:absolute;
z-index:3;
opacity:${(props)=>props.opacity4};
`
const ImgCont5 =styled.img`
width:${(props)=>props.width5}px;
height:auto;
margin-top:50px;
position:absolute;
z-index:2;
opacity:${(props)=>props.opacity5};
`


//props
const ImageCompV1= ({
 width2=150,
 width3=200,
 width4=250,
 width5=250,
 opacity2="1",
 opacity3="0",
 opacity4="0",
 opacity5="0",
 HandleOpacity=()=>{}
 
}) => {
 
  return (
   
  <ImgesCont    >
      <Button text="Next" onClick={HandleOpacity}/>
      <ImgCont2 src="/pfizer.svg"   width2 ={width2 }  opacity2={opacity2}/>
      <ImgCont3 src="/moderna.svg"   width3 ={width3 }  opacity3={opacity3}/>
      <ImgCont4 src="/astrazeneca.svg"   width4 ={width4 }  opacity4={opacity4}/>
      <ImgCont5 src="/Janssen_Logo.jpg"   width5 ={width5 }  opacity5={opacity5}/>
    </ImgesCont>  
    
  )
}


export default ImageCompV1;
