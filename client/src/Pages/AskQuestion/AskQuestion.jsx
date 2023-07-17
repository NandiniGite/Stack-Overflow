import React from 'react'
import './AskQuestion.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { askQuestion } from "../../actions/question";


const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
  
  const dispatch=useDispatch();
  const User=useSelector((state)=>(state.currentUserReducer));
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(askQuestion({questionTitle,questionBody,questionTags, userPosted: User.result.name,userId:User?.result?._id},navigate));
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };


  return (
    <div className='ask-question'>
        <div className='ask-ques-container'>
         <h1>Ask a Public Question</h1>
         <h1>{questionTitle}</h1>
         <form onSubmit={handleSubmit}>
         <div className='ask-form-container'>
            <label htmlFor='ask-ques-title'>
                <h4>Title</h4>
                <p>Be specific and imagine you are asking question to another person</p>
                <input type="text" name='questionTitle' id='ask-ques-title' placeholder='Is there a R function ?' onChange={(e)=>{setQuestionTitle(e.target.value)}}/>                
            </label>
            <label htmlFor='ask-ques-body'>
                <h4>Body</h4>
                <p>Tell more about this question</p>
                <textarea name='questionTitle' id='ask-ques-body' onChange={(e)=>{setQuestionBody(e.target.value)}} onkeyPress={handleEnter}/>                
            </label>
            <label htmlFor='ask-ques-tags'>
                <h4>Tags</h4>
                <p>Add upto 5 tags to describe the question</p>
                <input type="text" name='questionTags' id='ask-ques-tags' onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}} />
                             
            </label>
         </div>
        

          <input type='submit'value='Review your question' className='review-btn'/>
          </form>
          
        </div>
    </div>
  )
}

export default AskQuestion
