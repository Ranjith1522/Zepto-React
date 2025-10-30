function Header() {
    return (
       
            <header style={{marginleft:'20px'}}>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Zepto</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Super Saver</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Groceries</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Electronics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Beauty</a>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </header>
     
    );
}

export default Header;