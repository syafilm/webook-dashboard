import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WeBook Guides Dashboard</title>
        <meta name="description" content="Manage your trip listings and bookings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  )
}