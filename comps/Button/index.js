// Button for Levi 
//Height and width editable
import React from "react";
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {useState} from 'react';

const ButtonCont=styled.span`
margin: 5px;
`;
const ButtonImput = styled.button`
background-color:${props=>props.bgc};
color:#545454;
width:${props=>props.width};
height:${props=>props.height};
border-radius:${props=>props.radius};
border:none;
font-size:22px;
font-family: 'Archivo', sans-serif;
font-weight:700;
opacity:${(props) => props.hover};
align-items:center;
outline: none;
margin-bottom:20px;

`;

//props
const Button = ({
  text="Let's start",
  bgcolor="#C4C4C4",
  width="180px",
  height="40px",
  radius="10px",
  routeTo="/home",
  opacity="1",
  onClick=()=>{},
  onaboutUsClick=()=>{},
  onMouseOver=()=>{},
  onMouseOut=()=>{},
  
 
  
}) => {



  return <ButtonCont   >
    {/* <button style ={{
      backgroundColor:"black"
    }}> Test Button</button> */}
    

    <ButtonImput bgc={bgcolor} width={width} height={height}radius={radius} hover={opacity} onClick={onClick} onMouseOver={ onMouseOver}  onMouseOut={ onMouseOut} >
      {text}
    </ButtonImput>


    </ButtonCont>
}

export default Button;