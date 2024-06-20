import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setCategory}) => {
    //<span className='badge bg-light text-dark fs-4'>NewsMag</span>
    //<a className="navbar-brand" href="/"><span><Link to="/homet" className='badge bg-light text-dark fs-4'>Live News Feed</Link></span></a>
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">

                <span className='navbar-brand'><Link to="/homet" className='badge bg-light text-dark fs-4'>ß-Trade</Link></span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

                    <ul className="navbar-nav gap-5">

                        <li className="nav-item">
                            <div className="nav-link btn btn-secondary" aria-current="page" onClick={()=>setCategory("general")}>Home</div>
                        </li>

                        <li className='nav-item'>
                            <div className='nav-link btn btn-secondary' onClick={()=>setCategory("technology")}>Technology</div>
                        </li>

                        <li className='nav-item'>
                            <div className='nav-link btn btn-secondary' onClick={()=>setCategory("business")}>Business</div>
                        </li>

                        <li className='nav-item'>
                            <div className='nav-link btn btn-secondary'onClick={()=>setCategory("health")}>Health</div>
                        </li>

                        <li className='nav-item'>
                            <div className='nav-link btn btn-secondary'onClick={()=>setCategory("sports")}>Sports</div>
                        </li>

                        <li className='nav-item'>
                            <div className='nav-link btn btn-secondary'onClick={()=>setCategory("entertainment")}>Entertainment</div>
                        </li>
                        {/*
                        <li className="nav-item">
                            <a className="nav-link disabled btn btn-secondary" aria-disabled="true">Disabled</a>
                        </li>  */}

                    </ul>

                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
