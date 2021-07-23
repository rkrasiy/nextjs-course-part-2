import classes from "./main-header.module.css"
import { useRouter } from 'next/router';
import LinkWrapper from "../linkwrapper/linkwrapper"

function MainHeader () {
  const router = useRouter()
  console.log(router.pathname)
  const active = router.pathname;

  let pages = [
    {href: "/contact", title: "Contact", active: false},
    {href: "/events", title: "Events", active: false},
    {href: "/furniture/kitchen", title: "Kitchens", active: false},
    {href: "/furniture/wardrobes", title: "Wardrobes", active: false}
  ]

  let links = pages.map( link => {})


  return <header>
    <div className={classes.weblogo}>
      <LinkWrapper href="/" className="link-logo" title="Home Page"><img src="/logo.svg" className={classes.icon} alt="Web logo"/></LinkWrapper>
    </div>
    <nav>
      <ul>
        <li>
          <LinkWrapper href="/furniture/wardrobes" className={ active === "/furniture/wardrobes" ? "active" : ""}>Wardrobes</LinkWrapper>
        </li>
      </ul>
    </nav>
  </header>
}

export default MainHeader;