import { Inter } from 'next/font/google'
import Home from '../pages/Home'

const inter = Inter({ subsets: ['latin'] })
// выбирай как в макете
import Header from '../components/header/header'
// import 'overlayscrollbars/overlayscrollbars.css';

export default function Index() {
    return (
        <div style={inter.style}>
            <header>
                <Header />
            </header>
            <Home />
            <footer>
                footer
            </footer>
        </div>
    )
}
