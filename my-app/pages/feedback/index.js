//import { buildFeedbackPath, extractFeedback } from '../api/feedback'

function FeedbackPage( props ){
  return <p>feedback</p>
  // return <ul>
  //   { props.feedbackItems.map( item => (<li key={item.id}>{item.text}</li>))}
  // </ul>
}
/*
export async function getStaticProps(){
  //NEVER USE fetch() method inside this function

  const filePath = buildFeedbackPath();
  const data = extractFeedback( filePath );

  return {
    props: {
      feedbackItems: data
    }
  }
}
*/
export default FeedbackPage;