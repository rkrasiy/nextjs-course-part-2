import Link from 'next/link';


function MainHeader () {
  return <header>
    <div className="Logo">
      <Link href="/">Home Page</Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/furniture/kitchens">Kitchens</Link>
        </li>
        <li>
          <Link href="/furniture/wardrobes">Wardrobes</Link>
        </li>
      </ul>
    </nav>
  </header>
}

export default MainHeader;