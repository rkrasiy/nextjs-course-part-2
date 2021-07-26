import { Fragment } from "react";
import LinkWrapper from "../../components/linkwrapper/linkwrapper"

function UserProfilePage ( props ) {
  return (
    <Fragment>
      <h1>{props.username}</h1>
      <LinkWrapper href={`/user-profile/${props.username}`}>Read more</LinkWrapper>
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