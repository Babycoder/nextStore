import Link from 'next/link';
import Head from 'next/head';
import { Store } from '../utils/Store';
import { useContext } from 'react';

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);

  const { cart } = state;

  return (
    <>
      <Head>
        <title>{title ? title + ' - nextStore' : 'nextStore'}</title>
        <meta name="description" content="Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="px-4 flex h-12 justify-between shadow-md hover:shadow-lg items-center">
            <Link href="/">
              <a className="text-lg font-bold">nextStore</a>
            </Link>
            <div className="text-base">
              <Link href="/cart">
                <a className="p-2">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4">{children}</main>

        <footer className="flex h-10 justify-center items-center shadow-inner">
          Copyright © 2023 nextStore - Aymen GHAZALI
        </footer>
      </div>
    </>
  );
}
