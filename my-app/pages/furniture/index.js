import Link from "next/link";
import { useRouter } from 'next/router';

function FurniturePage () {
  const pages = [
    {id: "kitchens", title: "Kitchens"},
    {id: "wardrobes", title: "Wardrobes"}
  ]

  const router = useRouter();

  console.log(router.pathname)
  console.log(router.query)

  return (
    <div>
      <h1>The Furniture Page</h1>
      <ul>
        { pages.map( page => (
          <li key={page.id}><Link href={router.pathname + "/" + page.id}>{page.title}</Link></li>
        ))}
      </ul>
    </div>
  )

}
export default FurniturePage;
