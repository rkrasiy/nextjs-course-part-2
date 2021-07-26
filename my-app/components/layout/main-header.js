import classes from "./main-header.module.css"
import { useRouter } from 'next/router';
import LinkWrapper from "../linkwrapper/linkwrapper"

function MainHeader () {
  const router = useRouter()
  let pages = [
    {href: "/contact", title: "Contact", active: false},
    {href: "/last-sales", title: "Last Sales", active: false},
    {href: "/user-profile", title: "USER", active: false},
    {href: "/products", title: "Products", active: false},
    {href: "/events", title: "Events", active: false},
    {href: "/furniture/kitchens", title: "Kitchens", active: false},
    {href: "/furniture/wardrobes", title: "Wardrobes", active: false}
  ]

  let mainMenu = pages.map( link => {
    let activeItem = null
    if(router.pathname == link.href) 
      activeItem = "active"
    return (<li key={link.title}>
      <LinkWrapper 
        href={link.href}
        title={link.title}
        className={`item ${activeItem}`}>{link.title}</LinkWrapper>
    </li>)
  })


  return <header>
    <div className={classes.weblogo}>
      <LinkWrapper href="/" className="link-logo" title="Home Page">
        <img src="/logo.svg" className={classes.icon} alt="Web logo"/>
      </LinkWrapper>
    </div>
    <nav>
      <ul>
        { mainMenu }
      </ul>
    </nav>
  </header>
}

export default MainHeader;