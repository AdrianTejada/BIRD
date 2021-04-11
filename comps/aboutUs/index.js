import React from "react";
import styled from 'styled-components';
import {useRouter} from 'next/router';
import NavButton from '../NavButton/index.js'

const AboutUsCont=styled.div`
margin: 5px;
width:${props=>props.width};
height:${props=>props.height};
border-radius:${props=>props.radius};
background-color:${props=>props.bgc};
border:none;
opacity:${(props) => props.show};
display:inline-flex;
flex-direction:column;
justify-content:flex-start;
`;
const TitleImput = styled.p`
color:#949494;
font-size:24px;
font-family: 'Archivo', sans-serif;
font-weight:600;
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
padding-left:27.5px ;
width:${props=>props.p2width};
`;
const Content2Imput = styled.p`
color:#949494;
font-size:20px;
font-family: 'Archivo', sans-serif;
font-weight:400;
align-items:center;
text-align:center;
line-height:26px;
width:250px;
padding-left:27.5px ;
width:${props=>props.p2width};
`;
const ButtonCont=styled.div`
position:absolute;
margin-top:375px;
margin-left:45px;
`;
//props
const AboutUs = ({
  title="About us",
  content="BIRD is an app designed to educated its users about the COVID-19 Virus. For those who want to take action or test their knowlage, there are also Donation links and quizes.",
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
  onClick=()=>{},
  onMouseOver=()=>{},
  onMouseOut=()=>{},
  
 
  
}) => {
const router = useRouter();
// ()=>router.push( routeTo)
  return <AboutUsCont     width={width} height={height}  bgc={bgcolor} radius={ radius} show={display} p2width={p2width}>
    {/* <button style ={{
      backgroundColor:"black"
    }}> Test Button</button> */}
    

    <TitleImput  >
      {title}
    </TitleImput >
    <ContentImput  >
      {content} 
    </ContentImput >
    <Content2Imput  >
      {content1}  
    </Content2Imput >
    <Content2Imput  >
      {content2} 
    </Content2Imput >
    <Content2Imput  >
      {content3} 
    </Content2Imput >
    <ButtonCont>
    <NavButton bgcolor5="#FF7A00" display1="none" display2="none" display3="none" display4="none"/>
    </ButtonCont>
   
    </AboutUsCont>



}

export default AboutUs;