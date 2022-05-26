import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Contcaractere from './pages/contcaractere'
import CorPrimaria from './pages/corPrimaria'
import Dobro from './pages/dobro'
import Ingresso from './pages/ingresso'
import MaiorNumero from './pages/maiorNumero'
import Media from './pages/media'
import Somar from './pages/somar'
import Tabuada from './pages/tabuada'
import Temperatura from './pages/temperatura'

export default function SiteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} /> 
                <Route path='/contcaractere' element={<Contcaractere />} />
                <Route path='/corprimaria' element={<CorPrimaria />} />
                <Route path='/ingresso' element={<Ingresso />} />
                <Route path='/dobro' element={<Dobro />} />
                <Route path='/maiorNumero' element={<MaiorNumero />} />
                <Route path='/media' element={<Media />} />
                <Route path='/somar' element={<Somar />} />
                <Route path='/tabuada' element={<Tabuada />}/>
                <Route path='/temperatura' element={<Temperatura />} />          
            </Routes>
        </BrowserRouter>
    )
}