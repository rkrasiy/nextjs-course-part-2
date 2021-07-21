import Link from "next/link";
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
      <h1>The List of different kitchen type</h1>
      <ul>
        {pages.map( ( page ) => (
          <li key={page.id}><Link href={router.pathname + "/" + page.id + "/" + testPageId}>{page.title}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default kitchenTypesList;