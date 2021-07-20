import { useRouter } from 'next/router';

function PortfolioProjectPage(){
  const router = useRouter();

  console.log(router.pathname)
  console.log(router.query)

  //send a request to some backend server
  //to fetch the piece of data an id of router.query.projectid


  return (
    <div>
      <h1>Portfolio project page</h1>
    </div>
  )
}

export default PortfolioProjectPage;
