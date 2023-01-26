import React from "react"
import Head from 'next/head'


export default function Layout({title, children}) {
  return (
    <>
        <Head>
            <title>{title ? title + 'Store' : 'nextStore'}</title>
            <meta name="description" content="Ecommerce website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div className="flex min-h-screen flex-col justify-between">
            <header>
                header
            </header>
            
            <main>
                {children}
            </main>
            
            <footer>
                footer
            </footer>
        </div>
    </>
  )
}
