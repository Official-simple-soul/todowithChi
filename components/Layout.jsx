import Head from 'next/head'
import React from 'react'
import Header from './Header/Header'

function Layout({children}) {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Todo App" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <main className="bg-priBG text-white">{children}</main>
    </>
  );
}

export default Layout