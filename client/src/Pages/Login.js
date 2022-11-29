import React from 'react'
import "./Login.css"

const Login = () => {
    return (
        // <div className='body'>
        //     <div className="container">
        //         <div className="form-box">
        //             <div className="header-form">
        //                 <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
        //                 <div className="image">
        //                 </div>
        //             </div>
        //             <div className="body-form">
        //                 <form>
        //                     <div className="input-group mb-3">

        //                         <input type="text" className="form-control" placeholder="Username" />
        //                     </div>
        //                     <div className="input-group mb-3">

        //                         <input type="text" className="form-control" placeholder="Password" />
        //                     </div>
        //                     <button type="button" className="btn btn-secondary btn-block">LOGIN</button>
        //                     <div className="message">
        //                         <div><input type="checkbox" /> Remember ME</div>
        //                         <div><a href="#">Forgot your password</a></div>
        //                     </div>
        //                 </form>

        //             </div>
        //             <div className="social">
        //                 <a href="#"><i className="fab fa-facebook"></i></a>
        //                 <a href="#"><i className="fab fa-twitter-square"></i></a>
        //                 <a href="#"><i className="fab fa-google"></i></a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <main className="main">
            <div className="container">
                <section className="wrapper">
                    <div className="heading">
                        <h1 className="text text-large">Sign In</h1>
                        <p className="text text-normal">New user? <span><a href="#" className="text text-links">Create an account</a></span>
                        </p>
                    </div>
                    <form name="signin" className="form">
                        <div className="input-control">
                            <label for="email" className="input-label" hidden>Email Address</label>
                            <input type="email" name="email" id="email" className="input-field" placeholder="Email Address" />
                        </div>
                        <div className="input-control">
                            <label for="password" className="input-label" hidden>Password</label>
                            <input type="password" name="password" id="password" className="input-field" placeholder="Password" />
                        </div>
                        <div className="input-control">
                            <a href="#" className="text text-links forgot">Forgot Password</a>
                            <input type="submit" name="submit" className="input-submit" value="Sign In" disabled />
                        </div>
                    </form>
                    <div className="striped">
                        <span className="striped-line"></span>
                        <span className="striped-text">Or</span>
                        <span className="striped-line"></span>
                    </div>
                    <div className="method">
                        <div className="method-control">
                            <a href="#" className="method-action">
                                <i className="ion ion-logo-google"></i>
                                <span>Sign in with Google</span>
                            </a>
                        </div>
                        <div className="method-control">
                            <a href="#" className="method-action">
                                <i className="ion ion-logo-facebook"></i>
                                <span>Sign in with Facebook</span>
                            </a>
                        </div>
                        <div className="method-control">
                            <a href="#" className="method-action">
                                <i className="ion ion-logo-apple"></i>
                                <span>Sign in with Apple</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Login