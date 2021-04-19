import React,{useState} from 'react';
import styled from 'styled-components';
import Banner from '../Banner'
import QuizOption from '../QuizOptions'


const ChatContainer = styled.div `
    display:flex;
    flex-direction:column;
`

const Bubble = styled.div `
    width:376px;
    height:480px;
    border-radius: 20px;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    background-color:white;
    margin-top:20px;
    
`

const Triangle = styled.div`
    background: url("/chat-triangle.svg");
    width:84px;
    height:50px;
    position:relative;
    left: 18px;
    overflow:hidden;
`

const Content = styled.div`
    width: 85%;
    height 85%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top:-100px;
`
const Question = styled.div`
    display:inline-flex;
    align-items:center;
   
    
`
const QuestionText = styled.div`
   margin-left:20px; 
   font-size:20px;
`


const ChatBubble = ({
    head="Heading",
    text1="Answer1",
    text2="Answer2",
    text3="Answer3",
    RadioCheck=()=>{}
   
    
}) => {
    return <ChatContainer>
        <Bubble>
            <Content>
               {/* <h2> {head}</h2>
               <Question> <QuizOption onClick={RadioCheck}  /> <QuestionText>{text1}</QuestionText></Question> 
               <Question> <QuizOption onClick={RadioCheck}  />  <QuestionText>{text2}</QuestionText> </Question> 
               <Question> <QuizOption onClick={RadioCheck}  />  <QuestionText>{text3}</QuestionText> </Question>  */}
               
            </Content>
        </Bubble>

        <Triangle />
    </ChatContainer>
}

export default ChatBubble;