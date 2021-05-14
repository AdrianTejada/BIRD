import React from "react";
import styled from "styled-components";
import {useRouter} from 'next/router';

const Option1cont = styled.div`
    display:inline-flex;
    flex-direction: column;
    width:${props=>props.width}px;
    height:${props=>props.height}px;
    overflow:hidden;
    position: absolute;
    left:5px;
    
    
`;
const Option1image  = styled.img`
    src:${props=>props.src};
    border-radius: 10px;
    overflow: hidden;
    
    
`;
const Option1text = styled.span`
    background-color: rgba(196,196,196,0.7);
    color: #FFF;
    padding:10px;
    font-size:20px;
    font-weight: 800;
    border-radius: 0px 0px 10px 10px;
    justify-content:center;
    text-align: center;
    position:absolute;
    top: 139px;
    overflow: hidden;
    
`;


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
    <Option1text>{text}</Option1text>
    
    </Option1cont>
}
export default Image;
