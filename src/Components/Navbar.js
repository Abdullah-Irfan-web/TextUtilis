import React  from 'react'
const Navbar = (props) => {

 
 
 
   
  return (
    <div>
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand titl text-${props.mode==='light'?'dark':'light'}`} href="#">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active fs-14 text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link fs-14 text-${props.mode==='light'?'dark':'light'}`} href="#">About</a>
        </li>
       

        
      </ul>
      <div class={`form-check form-switch text-${props.mode== 'light'?'dark':'light'}`}>
  <input onChange={props.toggle} class="form-check-input swit" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
</div>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar