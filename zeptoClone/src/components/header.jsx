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
                            <input type="text" placeholder="Search for products..." style={{ width: '500px', height: '35px', borderRadius: '5px', border: '1px solid gray', paddingLeft: '10px' }} />
                        </li>
                        <div className="nav-right">
                            <div className="col">
                                <div className="row-6">
                                    <img style={{ height: "15px", width: "58px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAZlBMVEX///8AAAD7+/v09PTt7e3o6Oh7e3vw8PD4+Pi6urrl5eXV1dXLy8unp6fHx8dxcXHe3t6fn59CQkKWlpY3NzdKSkpnZ2ePj48wMDBWVlZsbGxeXl4bGxsjIyM8PDwLCwuHh4ewsLDtbEHFAAAETElEQVRoge1Y2ZaiMBA17GE1LCKLAv//k1OJrUKqCGDPnHnxntMPHcqiuLXndPriiy+++J8I00QUhUjS8K+qtSOeXdkM14xH9l9RHYpLzxD6i/j1F1jRZQBVw73xpti3AH48eU2pDtvI+o3uKJNW5gX3l+cOF5V8kkWf6/ZuoKCLHeqZE3fw8OZ9qJqD6sE7rwucPWDnyj/RXYBhVWqWSRsQKg6rdiTbYtNhlgDjM5I3g+5m2+wHYvBsdUi7C8667/yFcwenH9DugjXZfvHskO0t6D6Q3nZ2wBaIk4o4tgLbdeyAcnK+O2Y4+ZXnpJM5z4ZLgkPfAR73xXvPhlg/C8byXbTKMdCfxwO77dENBCb6WapKTFsLUbe5NB9FabKL9rhnHfolEFJx9/GPy0F9j97fsR59r47ggoW4zPFZ9PiyMugUg1EXxJYuw9ioHUU9UgWv6/VqOzK2ZTqkvbs8gW/BTgCKdTtDxhqz7gj7BawkiraHiYFIMPeOGgvc0bdIuBA92LDapBuKYad1NPjaCyV6Qe/0O9aYSgy4U2hHYuVjI+yJNdEfJDgOR5IVxcuoHaU99vwMDcv1uuSxnG7QOfJzkBvjheDXY41PifoNDiLww7pum6ic3kojICyXtXq9DUB9QhVpZAPN+cDGPb9/AfIOUZDsj5aTQ5zNrGSoz7grtTQjosgypZFHKJctjJhnQ6oVWmSleFuDlac4oB92YHqPKw9anLYyGVtcvS1TOyJpoer5BPMt4Waj5ZRDT48OOu9EtuxEVMxZJIM/ECtJMN3kqPzj1pDDfnSbKDmfIPAFvlbWIrlv5Zns/pns/ldaLDZNL+e1Nzt8mG9bA6frtlipoA/Q3g7rkmkoa2qXa02FC1oakRmJ5KSvROoqpEUlV8drgn1fodY3R4EjTI7qrJkWjvYTua50OgXRzTiOQtBpYXCWK6G+KYJ6OShV2kQ6mYoisJuzbJF4Z3BkSzcLIHhYEG9fWG7cqiFH5+a4EHf1ypAWwBiSz5k5m1JIgi+KpgXv8lY3Ov1pvTmjwwj0tnQiy9MLsqS9XRTgMUnHNM+jnizlb0BR71//iO3lws5Z+WS9MHUtheRtClSIanNJe8+dMNvdN8Tt+2vwICZTjKB5RmtqqnE/EDPhZmv2P6mIuqkII9IV4ZmU7m3DPU8Uj8E+qFizebEA3ykNlgvCvkU0yFQ22Kae9UKm+gsQnu0gRUJeFQhytsNQE5zYfw2hpikmHFTEKEAwOvC3sbAstYN/ul0bN1eC255faFf9Zp/yY3Yr7cD7Vn5KSEruhy8AXahKbNyI3RAmHdYamvIa7FqOE0bjEzlm1J/d6qoWx0RIppIVCka0uv2wk1LdenLETsjVbWk5/eYy2hfqbvvajFxdE6urYj42j1NBdtcjmF535/21LK/P6+6rtyPFtmGdubeY5uA1Hv+YawJ2Ksa2A7SjiHfWqC+++OKLf4I/7zcuolu7r6kAAAAASUVORK5CYII=" alt='logo'></img>
                                </div>
                                <div className='row-6'>
                                    <a className="nav-link" href="#">Login</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row-6">
                                    <img style={{ height: "15px", width: "58px" }} src='data:image/png;base64,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'></img>
                                </div>
                                <div className="row-6">
                                    <a className="nav-link" href="#">Cart</a>
                                </div>

                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>

    );
}

export default Header;