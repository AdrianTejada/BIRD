import React from "react";
import styled from "styled-components";
import {useRouter} from 'next/router';

const Option1cont = styled.div`
    display:flex;
    flex-direction: column;
    width:${props=>props.width}px;
    height:${props=>props.height}px;
    overflow:hidden;
    
    
`;
const Option1image  = styled.img`
    src:${props=>props.src};
    border-radius: 10px;
    overflow: hidden;
    
    
`;
const Option1text = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-text:center;
    background-color: rgba(196,196,196,0.7);
    color: #FFF;
    font-size:20px;
    font-weight: 800;
    border-radius: 0px 0px 10px 10px;
    height:64px;
    position:relative;
    width:350px;
    bottom:64px;
`;

const Textcont = styled.div`
    align-self:center;
`

const Image  = ({
    src = "/12.svg",
    width = 350,
    height= 200,
    text = "Make An Appointment For PCR Test",
    routeTo = "/",
}) =>{
    const router = useRouter();
    return <Option1cont onClick ={()=>router.push(routeTo)} > 
    
    <Option1image src = {src} width = {width} height = {height}></Option1image>
    <Option1text><Textcont>{text}</Textcont></Option1text>
    
    </Option1cont>
}

export default Image;
