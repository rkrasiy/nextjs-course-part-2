import { useEffect, useState, useContext } from 'react';
import NotificationContext from '../../store/notification-context';
import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import Spinner from '../spinner/spinner';

function Comments( props ) {
  const { eventId } = props
  const [showComments, setShowComments] = useState(false);
  const [ comments, setComments ] = useState([])
  const notificationCtx = useContext( NotificationContext )

  useEffect( () => {
    if(showComments){
      fetch("/api/comments/" + eventId)
      .then( resp => resp.json())
        .then( data => {
          console.log("JSON", data)
          setComments(data.comments)
        })
    }
  },[showComments])

  
  
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {

    notificationCtx.showNotification({
      title: "Pending!",
      message: "Sending your comment",
      status: "pending"
    })

    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if(response.ok){
          return response.json()
        }

        return response.json().then(data=>{
          throw new Error(data.message || "Somthing went wrong")
        })
        
      })
      .then((data) => {
        console.log(data);
        setComments( prevComments => [ data.comment,...prevComments])
        notificationCtx.showNotification({
          title: "Success!",
          message: "Your comment was saved!",
          status: "success"
        })
      })
      .catch(error => {
        notificationCtx.showNotification({
          title: "Error!",
          message:  error.message || "Something went wrong",
          status: "error"
        })
      });
  }
  console.log("Status", notificationCtx)
let content = null
if(showComments && comments.length && !notificationCtx.notification){
  content = <CommentList items={comments}/>
}else if(notificationCtx.notification){
  content = <Spinner text="Waiting..." />
}
  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {content}
      
    </section>
  );
}

export default Comments;