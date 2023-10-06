import React from 'react' //es7 react sniplets
import { Link } from 'react-router-dom'

//auto navbar creation
export default function Navbar() { 
  return (  
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className='m-3'>
    <div className=''>
    <a className="navbar-brand text-6xl">Spring Boot and React</a>
    </div>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <Link className="btn btn-outline-light" to={'/'}> {/* path from the App.js */}
      Home
    </Link>
    
  </div>
</nav>
    

    </div>
  )
}
