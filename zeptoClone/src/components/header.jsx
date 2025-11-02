import './header.css'
function Header() {
    return (
       
            <header className="header-main">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.31.2/images/header/primary-logo.svg"></img>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Select Location </a>
                            </li>
                            <li>
                                <input type="text" placeholder="Search for products..." style={{width:'500px', height:'35px', borderRadius:'5px', border:'1px solid gray', paddingLeft:'10px'}} />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cart</a>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </header>
     
    );
}

export default Header;