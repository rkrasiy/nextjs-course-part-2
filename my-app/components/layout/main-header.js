import Link from 'next/link';
import classes from "./main-header.module.css"

function MainHeader () {
  return <header>
    <div className={classes.weblogo}>
      <Link href="/"><a className="link-logo" title="Home Page"><img src="/logo.svg" className={classes.icon} alt="Web logo"/></a></Link>
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