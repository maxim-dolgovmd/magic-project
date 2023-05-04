import { Inter } from 'next/font/google'
import Home from '../pages/Home'

const inter = Inter({ subsets: ['latin'] })
// выбирай как в макете
import Header from '../components/header/header'

export default function Index() {
    return (
        <div style={inter.style}>
            <Header />
            <Home />
            <footer>
                footer
            </footer>
        </div>
    )
}
