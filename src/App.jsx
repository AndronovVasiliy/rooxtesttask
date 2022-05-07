import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Users from './components/Users/Users'
import Profile from './components/Profile/Profile'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
    return (
        <div className='app'>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='main'>
                <Routes>
                    <Route path='/' element={<Users />} />
                    <Route path='/profile/:id' element={<Profile />} >
                        {/* <Route path=':id' element={<Profile />} /> */}
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default App