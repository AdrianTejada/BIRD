import React from "react";
import { useState } from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import NavButton from '../comps/NavButton/index.js'


const AboutusCont=styled.div`
width:${props=>props.width};
height:${props=>props.height};
border-radius:${props=>props.radius};
background-color:${props=>props.bgc};
border:none;
opacity:${(props) => props.show};
display:${(props) => props.contdisplay};
`;
const ContentBox=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`;
const TitleImput = styled.p`
color:#949494;
font-size:24px;
font-family: 'Archivo', sans-serif;
font-weight:800;
align-items:center;
justify-content:center;
text-align:center;
`;
const ContentImput = styled.p`
color:#949494;
font-size:20px;
font-family: 'Archivo', sans-serif;
font-weight:400;
align-items:center;
line-height:26px;
width:250px;
// padding-left:27.5px ;
width:${props=>props.p2width};
`;
const ButtonCont=styled.div`
// position:absolute;
margin-top:50px;
// margin-left:45px;
`;

//props
const AboutUs = ({
  subtitle="tittle",
  text="text",
  content1="Levi Chen",
  content2="Adrian Tejada",
  content3="Ali, Aly",
  bgcolor="#C4C4C4",
  width="300px",
  height="425px",
  radius="10px",
  routeTo="/home",
  display="block",
  p2width="200px",
  contdisplay="block",
  onClick=()=>{},
  
  
}) => {

// ()=>router.push( routeTo)
  return <AboutusCont   width={width} height={height} bgc={bgcolor} radius={ radius} contdisplay={contdisplay}>
  < ContentBox     show={display} p2width={p2width}>
    
    <TitleImput  >
      {subtitle}
    </TitleImput >
    <ContentImput  >
      {text} 
    </ContentImput >
    <ButtonCont>
    <NavButton bgcolor5="#FF7A00" display1="none" display2="none" display3="none" display4="none" 
    onaboutusClick={()=>router.push("/items/aboutus")}
    onteamClick={()=>router.push("/items/team")}/>
    </ButtonCont>
    </ ContentBox>
    </AboutusCont>

}
