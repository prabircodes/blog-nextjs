import Header from "./header"
import Footer from "./Footer"
import Head from "next/head"

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
