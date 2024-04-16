import { Link } from 'react-router-dom';
    const MyNavbar = () => {
        return ( 
        <>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
        
        <div className="container-fluid">
            
            <Link to="#" className="navbar-brand">
                <img className="navbar-brand" src="imgs/logo.png" alt="BuyBest Logo" width="60px"/></Link>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item fw-bold">
                        {/* <!-- <a href="#" className="nav-link active"><i className="bi bi-house"></i></a> --> */}
                        <Link className="nav-link active" to="/" aria-current="page" target="_blank">
                            <i className="fa fa-home" aria-hidden="true"></i>
                            <span className="nav-item-menu">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item fw-bold">
                        <Link className="nav-link" to="about" target="_blank">
                            <span className="nav-item-menu">About Us</span>
                        </Link>
                    </li>
                    <li className="nav-item fw-bold">
                        <a className="nav-link" href="products" target="_blank">
                            <span className="nav-item-menu">Products</span>
                        </a>
                    </li>
                    <li className="nav-item fw-bold">
                        <a className="nav-link" href="contact" target="_blank">
                            <i className="fas fa-address-card"></i>
                            <span className="nav-item-menu">Contact Us</span>
                        </a>
                    </li>
                </ul>
                
            </div>
            
            <span className="navbar-text fw-bold ms-auto">
                <a className="login" data-bs-toggle="modal" data-bs-target="#loginModal">
                    <i className="fa fa-sign-in"></i> 
                    <span className="login-menu">Login</span>
                </a>
            </span> 
                
        </div>
        {/* <!-- <div className="modal fade" id="loginModal" data-bs-toggle="modal" data-bs-target="#loginModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="loginModal">
                            Login
                        </h1>
                        <div className="btn-close" data-bs-dismiss="modal"></div>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name=""
                                id=""
                                aria-describedby="helpId"
                                placeholder="Your Email"
                            />
                        
                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name=""
                                id=""
                                aria-describedby="helpId"
                                placeholder="Your Password"
                            />
                            
                        </div>
                        
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Login</button>
                    </div>
                </div>
            </div>
        </div>  --> */}

        {/* <!-- <button 
        type="button" className="btn btn-primary" data-bs-toggle="modal"
        data-bs-target="#myModal">Button Trigger Modal
        </button> --> */}

        {/* <!-- Modal --> */}
        <div className="modal fade" id="loginModal">           m
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="loginModal">
                            Login
                        </h1>
                        <div className="btn-close" data-bs-dismiss="modal"></div>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                    
                            <input
                                type="email"
                                className="form-control"
                                name=""
                                id=""
                                aria-describedby="emailHelpId"
                                placeholder="your email"
                            />
                        
                        </div>

                        <div className="mb-3">
                        
                            <input
                                type="password"
                                className="form-control"
                                name=""
                                id=""
                                placeholder="your password"
                            />
                        </div>
                        
                        
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Login</button>
                    </div>
                </div>
            </div>
        </div>




    </nav>
    </>
    );
    }
    
    export default MyNavbar;