import logo from '../logo.svg';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routes'; 
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> }>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo"/>            
                    <ul>                    
                        {
                            routes.map( route => (
                                <li key={route.to}>
                                    <NavLink 
                                        to={route.to} 
                                        className={({ isActive }) => isActive ? 'nav-active' : ''}
                                    > {route.name}
                                    </NavLink>
                                </li>
                            ))
                        }                    
                    </ul>                
                </nav>

                <Routes>
                    {
                        routes.map(route => (
                            <Route 
                                key={route.path} 
                                path={route.to} 
                                element={ <route.Component/> }
                            />
                        ))
                    }                
                    <Route path="/*" element={<Navigate to="/lazy1" replace/>}/>
                </Routes>
                
            </div>
        </BrowserRouter>
    </Suspense>
  )
}

export default Navigation
