import '../styles/globals.css'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  const pages = [
    {href: "/", title: "Home"},
    {href: "/last-sales", title: "SSR & React HOOKs"},
    {href: "/user-profile", title: "SSR"},
    {href: "/products", title: "Static Generate"},
    {href: "/events", title: "Events"},
    {href: "/furniture/kitchens", title: "Kitchens"},
    {href: "/furniture/wardrobes", title: "Wardrobes"},
    {href: "/contact", title: "Contact"}
  ]
  return <Layout pages={pages}>
            <Component {...pageProps} />
          </Layout>
  
}

export default MyApp
