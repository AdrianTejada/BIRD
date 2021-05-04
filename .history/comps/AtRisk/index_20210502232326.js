import Button from '../Button';
import react ,{useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    width: 227px;
    height: 259px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self:center;
`

const Patient1 = styled.img`
    width:227px;
    height:auto;
`

const Patient2 = styled.img`
    width:227px;
    height:auto;
`

const Patient3 = styled.img`
    width:227px;
    height:auto;
`

const Risk = () => {


    return <Cont>
        <Button />
        <Patient1 src="patient-elderly.svg"/>
        <Patient2 src="patient-obese.svg"/>
        <Patient3 src="patient.svg"/>
    </Cont>
}

export default Risk;