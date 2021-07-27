function UserIdPage( props ) {
  return <div>
    <h1>Server Side Render (SSR)</h1>
    <h2>{props.id}</h2>
    <p>Use func <strong>getServerSideProps</strong></p>
    <p>for get page params "uid" (user id)</p>
    <p><em>const</em> userId = <strong>params.uid</strong></p>
    </div>
}

export default UserIdPage;

export async function getServerSideProps( context ) {
  const { params } = context;
  const userId = params.uid;

  return {
    props: {
      id: 'userid-'+ userId
    }
  }


}