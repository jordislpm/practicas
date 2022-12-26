import React from 'react';

function MenuBar ({name}){
    return(
    <div>
            <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">{name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="d-flex" id="navbarNav">
      <ul className="navbar-nav">
        <MenuElement name="Home"/>
        <MenuElement name="About"/>
        <MenuElement name="Contact"/>
        <MenuElement name="Services"/>
      </ul>
    </div>
  </div>
</nav>
  
        </div>
    )
}


function MenuElement ({name}){
    return(
        <>
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">{name}</a>
        </li>
        </>
    )
}

export default MenuBar;
