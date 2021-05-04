import Button from '../Button';
import styled from 'styled-components';

const Cont = styled.div`
    
    width:178px;
    height:100px;
    display:flex;
    flex-direction:column;
    position:relative;
    bottom: 200px;
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