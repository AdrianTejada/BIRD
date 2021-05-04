import Button from '../Button';
import styled from 'styled-components';

const Cont = styled.div`
    align-self: center;
    width:100%;
    height:100px;
    display:flex;
    flex-direction:column;

`

const Last = ({
    QuizRoute
}) => {
    return <Cont>
        <Button text="Back to Home" routeTo="../infoCovidBase"/>
        <Button text="Take Quiz" routeTo={QuizRoute}/>
    </Cont>
}

export default Last;