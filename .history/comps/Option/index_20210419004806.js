import React from "react";
import styled from "styled-components";

const Avatarcont = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 20px;
    width:${props=>props.width}px;
    height:${props=>props.height}px;
    
    
`;
const Avatarimage  = styled.img`
    src:${props=>props.src};
    margin-bottom: -27px;
    border-radius: 10px 10px 10px 10px;
    margin-bottom:100px;
    
    
`;
const Avatartext = styled.span`
    background-color: rgba(196,196,196,0.8);
    color: #FFF;
    padding:5px;
    justify-content:center;
    align-items:center;
    border-radius:0px 0px 10px 10px;
    text-align: center;
    font-weight: 800;
    overflow:hidden;
`;

const Avatar  = ({
    src = "/1.svg",
    width = 270,
    height= 160,
    text = "General info"
}) =>{
    return <Avatarcont> 
    
    <Avatarimage src = {src} width = {width} height = {height}></Avatarimage>
    <Avatartext>{text}</Avatartext>
    
    </Avatarcont>
}
export default Avatar;