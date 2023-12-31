import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ logo } alt="React Logo"/>
            </nav>
            <ul>
                <li>
                    <NavLink to='/home' className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/users' className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="home" element={<h1>Home Route</h1>}/>
                <Route path="about" element={<h1>About Route</h1>}/>
                <Route path="users" element={<h1>Users Route</h1>}/>

                <Route path="/*" element={<Navigate to="/home" replace/>}/>

            </Routes>

        </div>
    </BrowserRouter>
  )
}

export default Navigation
