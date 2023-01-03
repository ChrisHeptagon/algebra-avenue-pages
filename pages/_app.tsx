import 'public/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/header'
import { Footer } from 'components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="apple-touch-icon" sizes="180x180" href="/meta/apple-touch-icon.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon-16x16.png"></link>
      <link rel="manifest" href="/meta/site.webmanifest"></link> 
    <Header />
  <Component {...pageProps} />
  <Footer />
  </div>)}
