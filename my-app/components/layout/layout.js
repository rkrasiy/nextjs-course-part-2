import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import Head from 'next/head';


function Layout ( props ) {
  return <Fragment>
    <Head>
      <title>My Next Js Course</title>
      <meta name="description" content="" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header pages={props.pages}/>
    <main>{props.children}</main>
    <Footer />
  </Fragment>
}

export default Layout;