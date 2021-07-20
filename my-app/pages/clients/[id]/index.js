import { useRouter } from 'next/router'

function ClientsProjectPage(){
  const router = useRouter()

  console.log(router.query)
  function loadProjectHandler(){
    //Load data
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { 
        id: "rus",
        clientprojectid: "projectA"
      }
    })
  }
  return (
    <div>
      <h1>The Project of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}

export default ClientsProjectPage;