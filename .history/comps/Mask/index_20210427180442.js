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
`

const Patient1 = styled.img`
    width: 227px;
    height:auto;
`

const Patient2 = styled.img`

`


const Mask = () => {
    return <Cont>
        <Button
        text="Click for Mask!"
        />
        <Patient1 />
        
    </Cont>
}

export default Mask;