import { useRouter } from 'next/router';

function specificKitchen (){
  const router = useRouter();

  console.log(router.pathname)
  console.log(router.query)

  return (
    <div>
      <h1>Kitchen "LISA"</h1>
      <div>
        <img src="" />
        <p>Some info</p>
      </div>
    </div>
  )
}

export default specificKitchen;
