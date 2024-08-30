import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { Fragment } from 'react'

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
