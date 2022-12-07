
import React from 'react'

import { Route, Routes, HashRouter as Router } from 'react-router-dom'
import Details from './Details'


import Home from './RandomCharacter'
import List from './List'


import { URLS_LIST } from '../constants/main'





const App = () => {


    return <Router>

        <Routes>

            <Route path={URLS_LIST.HOME} element={<Home />} />

            <Route path={URLS_LIST.LIST} element={<List />} />

            <Route element={<Home />} />

        </Routes>

    </Router>
}



export default App
