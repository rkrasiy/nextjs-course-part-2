import Link from "next/link";

function HomePage() {
  const pages = [
    {id: "contact", title: "Contact"},
    {id: "furniture", title: "Furniture"},
    {id: "events", title: "Events"}
  ]

  return (
    <div>
      <h1>The Furniture Page</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        { pages.map( page => (
          <li key={page.id}><Link href={"/" + page.id}>{page.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
