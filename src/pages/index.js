import { Inter } from 'next/font/google'
import Home from '../pages/Home'

const inter = Inter({ subsets: ['latin'] })
// выбирай как в макете
import Header from '../components/header/header'
// import 'overlayscrollbars/overlayscrollbars.css';
import {Provider} from 'react-redux'
import {store} from '../redux/store'

export default function Index() {
    return (
        <Provider store={store}>
            <div style={inter.style}>
                <header>
                    <Header />
                </header>
                <Home />
                <footer>
                    footer
                </footer>
            </div>
        </Provider>
    )
}
