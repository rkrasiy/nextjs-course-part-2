import { Fragment } from "react";
import LinkWrapper from "../../components/linkwrapper/linkwrapper"

function UserProfilePage ( props ) {
  return (
    <Fragment>
      <h1>Server Side Render (SSR)</h1>
      <h2>{props.username}</h2>
      <LinkWrapper href={`/user-profile/${props.username}`}>Read more</LinkWrapper>
      <p>Link to "/user-profile/" + props.username</p>
      <p>Use func <strong>getServerSideProps</strong></p>
      <p>Object: props - username("Rus") </p>
    </Fragment>
  
  )
}

export default UserProfilePage;

export async function getServerSideProps( context ) {
  const { params, req, res } = context;
  console.log("Server side Params")

  return {
    props: {
      username: "Rus"
    }
  }
}