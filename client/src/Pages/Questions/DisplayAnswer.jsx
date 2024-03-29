import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {deleteAnswer } from '../../actions/question'

const DisplayAnswer = ({question,handleShare}) => {
   const{id}=useParams();
  const dispatch = useDispatch();
  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };

  const User = useSelector((state) => state.currentUserReducer);

  return (
    <div>
      {question.answer.map((ans)=>(
        <div className='display-ans' key={ans._id}>
           <p>{ans.answerBody}</p>
           <div className='question-actions-user'>
            <div>
                <button type="button" onClick={handleShare}>Share</button>
                
                <button
                  type="button"
                  onClick={() => handleDelete(ans._id, question.noOfAnswers)}
                >
                  Delete
                </button>
             
            </div>
            <div>
                <p> answer {moment(ans.answeredOn).fromNow()}</p>
                <Link to={`/`} className='user-link' style={{color:"#0086d8"}}><Avatar backgroundColor="green" px="8px" py="5px" >{ans.userAnswered.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>
                                {ans.userPosted}
                            </div>
                            </Link>
            </div>
        </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayAnswer
