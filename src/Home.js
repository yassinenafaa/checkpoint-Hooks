import React from 'react'
import App from './App'
import { Route, Routes } from 'react-router-dom'
import DescriptionMv from './Components/DescriptionMv'


const Home = () => {
    return (
        <div>
            <Routes>
                <Route index element={<App />} />
                <Route path='movie/:id' element={(<DescriptionMv />)} />


            </Routes>
        </div>
    )
}

export default Home