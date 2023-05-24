import '@/components/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
// выбирай как в макете
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
// import 'overlayscrollbars/overlayscrollbars.css';
import {Provider} from 'react-redux'
import {store} from '../redux/store'
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';

export default function App({ Component, pageProps }: AppProps) { 
  return (<Provider store={store}>
  <div style={inter.style}>
      <header>
        <Header />
      </header>
      <Component {...pageProps} />
      <footer style={{flex: '0 1 auto'}}>
        <Footer/>
      </footer>
  </div>
  </Provider>)
}
