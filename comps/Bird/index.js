//Full bird Icon for Levi
import React from "react";
import styled from 'styled-components';
import {useRouter} from 'next/router';


const BirdCont =styled.div`
width:${(props)=>props.width}px;
height:auto;
`;
const BirdImg = styled.img`

`;

//props
const Bird= ({
 width=300
  
}) => {
const router = useRouter();
// ()=>router.push( routeTo)
  return <BirdCont  width ={width }  >
      
    <BirdImg  src ="/bird1.svg"   />

    </BirdCont>
}


export default Bird;