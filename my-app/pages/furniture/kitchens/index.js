import LinkWrapper from '../../../components/linkwrapper/linkwrapper';
import { useRouter } from 'next/router';

function kitchenTypesList () {
  const testPageId = "List"
  const pages = [
    {id: "hitech", title: "Hitech"},
    {id: "modern", title: "Modern"},
    {id: "classic", title: "Classic"},
    {id: "designed", title: "Designed"}
  ]
  
  const router = useRouter();

  console.log(router.pathname)
  console.log(router.query)

  return (
    <div>
      <h1>The All Kitchens Types</h1>
    
        {pages.map( ( page ) => (
          <div key={page.id} className="block">
            <h2>{page.title}</h2>
            <LinkWrapper href={router.pathname + "/" + page.id + "/" + testPageId}>See more</LinkWrapper>
          </div>
        ))}

    </div>
  )
}

export default kitchenTypesList;