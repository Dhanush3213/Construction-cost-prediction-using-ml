
// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';
// // import "./Login.css"
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../context/AppContext"


// const Wrapper = styled.section`
// :root {
//          --color-white: #ffffff;
//          --color-light: #f1f5f9;
//          --color-black: #121212;
//          --color-night: #001632;
//          --color-red: #f44336;
//          --color-blue: #1a73e8;
//          --color-gray: #80868b;
//          --color-grayish: #dadce0;
//          --shadow-normal: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
//                 0 1px 2px 0 rgba(0, 0, 0, 0.06);
//          --shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//                 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//          --shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
//                 0 4px 6px -2px rgba(0, 0, 0, 0.05);
//       }     

//     body{
//         font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//         font-size: 1rem;
//         font-weight: normal;
//         line-height: 1.5;
//         color: #121212; 
//         background: #f1f5f9;
//       }      

// a,
// button {
//     font-family: inherit;
//     font-size: inherit;
//     line-height: inherit;
//     cursor: pointer;
//     border: none;
//     outline: none;
//     background: none;
//     text-decoration: none;
// }

// img {
//     display: block;
//     width: 100%;
//     height: auto;
//     -o-object-fit: cover;
//     object-fit: cover;
// }

// .container-login {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     /* min-height: 60vh; */
//     width: 100%;
//     max-width: 90rem;
//     padding: 0 2rem;
//     margin: 8rem auto 0rem auto;
// }

// .ion-logo-apple {
//     font-size: 2.0rem;
//     line-height: inherit;
//     margin-right: 0.6rem;
//     color: #121212;
// }

// .ion-logo-google {
//     font-size: 2.0rem;
//     line-height: inherit;
//     margin-right: 0.6rem;
//     color: #f44336;
// }

// .ion-logo-facebook {
//     font-size: 2.0rem;
//     line-height: inherit;
//     margin-right: 0.6rem;
//     color: #1a73e8;
// }

// .text {
//     font-family: inherit;
//     line-height: inherit;
//     text-transform: unset;
//     text-rendering: optimizeLegibility;
// }

// .text-large {
//     font-size: 2.5rem;
//     font-weight: 600;
//     color: #121212;
// }

// .text-normal {
//     font-size: 1.5rem;
//     font-weight: 400;
//     color: #121212;
//     margin-bottom: 1.8rem;
// }

// .text-links {
//     font-size: 1.4rem;
//     font-weight: 400;
//     color: #1a73e8;
// }

// .forgot {
//     margin-top: 1rem;
// }

// .text-links:hover {
//     text-decoration: underline;
// }

// .main .wrapper {
//     max-width: 47rem;
//     width: 100%;
//     margin: 2rem auto;
//     padding: 2.2rem 2.8rem;
//     border: none;
//     outline: none;
//     border-radius: 0.25rem;
//     color: #121212;
//     background: #ffffff;
//     box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
//                 0 4px 6px -2px rgba(0, 0, 0, 0.05);

// .form {
//     width: 100%;
//     height: auto;
//     /* margin-top: 2rem; */

//     .input-control {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       margin-bottom: 1.25rem;
//       }

//      .input-field {
//         font-family: inherit;
//         font-size: 1.4rem;
//         font-weight: 400;
//         line-height: inherit;
//         width: 100%;
//         height: auto;
//         padding: 0.75rem 1.25rem;
//         border: none;
//         outline: none;
//         border-radius: 2rem;
//         color: #121212;
//         background: #f1f5f9;
//         text-transform: unset;
//         text-rendering: optimizeLegibility;
//         }

//       .input-submit {
//         margin-top: 1rem;
//         font-family: inherit;
//         font-size: 1.4rem;
//         font-weight: 500;
//         line-height: inherit;
//         cursor: pointer;
//         min-width: 40%;
//         height: auto;
//         padding: 0.65rem 1.25rem;
//         margin-top: 1.2rem;
//         border: none;
//         outline: none;
//         border-radius: 2rem;
//         color: #ffffff;
//         background: #1a73e8;
//         box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),
//                 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//         text-transform: capitalize;
//         text-rendering: optimizeLegibility;
// }
// }

//     .striped {
//         display: flex;
//         flex-direction: row;
//         justify-content: center;
//         align-items: center;
//         margin: 1rem 0;
//       }

//     .striped-line {
//         flex: auto;
//         flex-basis: auto;
//         border: none;
//         outline: none;
//         height: 2px;
//         background: #dadce0;
//      }

//     .striped-text {
//         font-family: inherit;
//         font-size: 1rem;
//         font-weight: 500;
//         line-height: inherit;
//         color: #121212;
//         margin: 0 1rem;
//      }

//     .method-control {
//          margin-bottom: 1rem;
//     }

//     .method-action {
//         font-family: inherit;
//         font-size: 0.95rem;
//         font-weight: 500;
//         line-height: inherit;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         /* width: 100%; */
//         height: auto;
//         padding: 0.35rem 1.25rem;
//         outline: none;
//         border: 2px solid #dadce0;
//         border-radius: 2rem;
//         color: #121212;
//         background: #ffffff;
//         text-transform: capitalize;
//         text-rendering: optimizeLegibility;
//         transition: all 0.35s ease;
//       }

//     .method-action:hover {
//         background: #f1f5f9;
//       }
// }


// @media screen and (max-width: 1280px) {
//     .main .wrapper {
//         max-width: 38rem;
//         padding: 2rem 2.5rem;
//     }
// }  

// `

// const Login = () => {
//     const { dispatch } = useAppContext();

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();


//     const loginUser = async (e) => {
//         e.preventDefault();

//         const res = await fetch("http://127.0.0.1:8000/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 username: username,
//                 password: password,
//             }),
//         });

//         // res in pending state we can get that  data in by using res.json();

//         const data = await res.text();
//         //  console.log(res.status);

//         if (res.status == 400 || !data) {
//             // console.log(data);
//             window.alert("Invalid Creadentials");
//         } else {

//             dispatch({ type: "USER", payload: true });
//             // type is name for the action that is going perfrom in reducer
//             // its like msg we are sending
//             window.alert(" Login Successful ");
//             navigate("/");
//         }
//     }

//     return (
//         <Wrapper>
//             <main className="main">
//                 <div className="container-login">
//                     <section className="wrapper">
//                         <div className="heading">
//                             <h1 className="text text-large">Sign In</h1>
//                             <NavLink to="/signup">  <p className="text text-normal">New user? <span><a href="#" className="text text-links">Create an account</a></span>
//                             </p> </NavLink>

//                         </div>
//                         <form name="signin" className="form">
//                             <div className="input-control">
//                                 <label htmlFor="username" className="input-label" hidden>Username</label>
//                                 <input type="text" value={username}
//                                     name="username"
//                                     onChange={(e) => {
//                                         // console.log(e.target.value);
//                                         setUsername(e.target.value);
//                                     }} id="email" className="input-field" placeholder="Enter your username" />
//                             </div>
//                             <div className="input-control">
//                                 <label htmlFor="password" className="input-label" hidden>Password</label>
//                                 <input type="password" name="password"
//                                     value={password}
//                                     onChange={(e) => {
//                                         // console.log(e.target.value);
//                                         setPassword(e.target.value);
//                                     }} id="password" className="input-field" placeholder="Password" />
//                             </div>
//                             <div className="input-control">
//                                 <a href="#" className="text text-links forgot">Forgot Password</a>
//                                 <input type="submit" name="submit" onClick={loginUser} className="input-submit" value="Sign In" />
//                             </div>
//                         </form>
//                         <div className="striped">
//                             <span className="striped-line"></span>
//                             <span className="striped-text">Or</span>
//                             <span className="striped-line"></span>
//                         </div>
//                         <div className="method">
//                             <div className="method-control">
//                                 <a href="#" className="method-action">
//                                     <i className="ion ion-logo-google"></i>
//                                     <span>Sign in with Google</span>
//                                 </a>
//                             </div>

//                         </div>
//                     </section>
//                 </div>
//             </main>
//         </Wrapper>

//     )
// }

// export default Login

import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext"
import { auth, provider } from "../config"
import { signInWithPopup } from "firebase/auth";

const Login = () => {
    const { dispatch } = useAppContext();
    const [value, setValue] = useState("")

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const loginUser = async (e) => {
        e.preventDefault();

        // we are sending the data to backend(to signin route)server/client/src/components/Login.js
        const res = await fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        // res in pending state we can get that  data in by using res.json();


        const data = await res.text();
        //  console.log(res.status);

        if (res.status == 400 || !data) {
            // console.log(data);
            window.alert("Invalid Creadentials");
        } else {

            dispatch({ type: "USER", payload: true });
            // type is name for the action that is going perfrom in reducer
            // its like msg we are sending
            window.alert(" Login Successful ");
            navigate("/");
        }
    }


    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            dispatch({ type: "USER", payload: true });
            setValue(data.user.email)
        })

    }
    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })
    return (

        <Wrapper>
            {/* <body> */}
            <main className="main">
                <div className="container-login">
                    <section className="wrapper">
                        <div className="heading">
                            <h1 className="text text-large">Sign In</h1>
                            {/* <NavLink to="/contact" className="navbar-link " onClick={() => setMenuIcon(false)}>Contact</NavLink> */}
                            <NavLink to="/signup">  <p className="text text-normal">New user? <span><a href="#" className="text text-links">Create an account</a></span>
                            </p> </NavLink>

                        </div>
                        <form name="signin" className="form">
                            <div className="input-control">
                                <label htmlFor="username" className="input-label" hidden>Username</label>
                                <input type="text" value={username}
                                    name="username"
                                    onChange={(e) => {
                                        // console.log(e.target.value);
                                        setUsername(e.target.value);
                                    }} id="email" className="input-field" placeholder="Enter your username" />
                            </div>
                            <div className="input-control">
                                <label htmlFor="password" className="input-label" hidden>Password</label>
                                <input type="password" name="password"
                                    value={password}
                                    onChange={(e) => {
                                        // console.log(e.target.value);
                                        setPassword(e.target.value);
                                    }} id="password" className="input-field" placeholder="Password" />
                            </div>
                            <div className="input-control">
                                <a href="#" className="text text-links forgot">Forgot Password</a>
                                <input type="submit" name="submit" onClick={loginUser} className="input-submit" value="Sign In" />
                            </div>
                        </form>
                        <div className="striped">
                            <span className="striped-line"></span>
                            <span className="striped-text">Or</span>
                            <span className="striped-line"></span>
                        </div>
                        {value ? navigate("/") :
                            <div className="method">
                                <div className="method-control">
                                    <a href="#" className="method-action">
                                        <i className="ion ion-logo-google"></i>
                                        <span onClick={handleClick}>Sign in with Google </span>
                                    </a>
                                </div>
                            </div>
                        }
                    </section>
                </div>
            </main>
            {/* </body> */}
        </Wrapper>

    )
}

const Wrapper = styled.section`
:root {
         --color-white: #ffffff;
         --color-light: #f1f5f9;
         --color-black: #121212;
         --color-night: #001632;
         --color-red: #f44336;
         --color-blue: #1a73e8;
         --color-gray: #80868b;
         --color-grayish: #dadce0;
         --shadow-normal: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
                0 1px 2px 0 rgba(0, 0, 0, 0.06);
         --shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
         --shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }     

    body{
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.5;
        color: #121212; 
        background: #f1f5f9;
      }      
           
a,
button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    text-decoration: none;
}

img {
    display: block;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
}

.container-login {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80rem;
    min-height: 85vh;
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;
}

.ion-logo-apple {
    font-size: 2.0rem;
    line-height: inherit;
    margin-right: 0.6rem;
    color: #121212;
}

.ion-logo-google {
    font-size: 2.0rem;
    line-height: inherit;
    margin-right: 0.6rem;
    color: #f44336;
}

.ion-logo-facebook {
    font-size: 2.0rem;
    line-height: inherit;
    margin-right: 0.6rem;
    color: #1a73e8;
}

.text {
    font-family: inherit;
    line-height: inherit;
    text-transform: unset;
    text-rendering: optimizeLegibility;
}

.text-large {
    font-size: 2.5rem;
    font-weight: 600;
    color: #121212;
}

.text-normal {
    font-size: 1.5rem;
    font-weight: 400;
    color: #121212;
    margin-bottom: 1.8rem;
}

.text-links {
    font-size: 1.4rem;
    font-weight: 400;
    color: #1a73e8;
}

.forgot {
    margin-top: 1rem;
}

.text-links:hover {
    text-decoration: underline;
}

.main .wrapper {
    max-width: 47rem;
    width: 100%;
    margin: 2rem auto;
    padding: 2.2rem 2.8rem;
    border: none;
    outline: none;
    border-radius: 0.25rem;
    color: #121212;
    background: #ffffff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -2px rgba(0, 0, 0, 0.05);

.form {
    width: 100%;
    height: auto;
    /* margin-top: 2rem; */
     
    .input-control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.25rem;
      }

     .input-field {
        font-family: inherit;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: inherit;
        width: 100%;
        height: auto;
        padding: 0.75rem 1.25rem;
        border: none;
        outline: none;
        border-radius: 2rem;
        color: #121212;
        background: #f1f5f9;
        text-transform: unset;
        text-rendering: optimizeLegibility;
        }

      .input-submit {
        margin-top: 1rem;
        font-family: inherit;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: inherit;
        cursor: pointer;
        min-width: 40%;
        height: auto;
        padding: 0.65rem 1.25rem;
        margin-top: 1.2rem;
        border: none;
        outline: none;
        border-radius: 2rem;
        color: #ffffff;
        background: #1a73e8;
        box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
        text-transform: capitalize;
        text-rendering: optimizeLegibility;
}
}

    .striped {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
      }

    .striped-line {
        flex: auto;
        flex-basis: auto;
        border: none;
        outline: none;
        height: 2px;
        background: #dadce0;
     }

    .striped-text {
        font-family: inherit;
        font-size: 1rem;
        font-weight: 500;
        line-height: inherit;
        color: #121212;
        margin: 0 1rem;
     }

    .method-control {
         margin-bottom: 1rem;
    }

    .method-action {
        font-family: inherit;
        font-size: 0.95rem;
        font-weight: 500;
        line-height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        /* width: 100%; */
        height: auto;
        padding: 0.35rem 1.25rem;
        outline: none;
        border: 2px solid #dadce0;
        border-radius: 2rem;
        color: #121212;
        background: #ffffff;
        text-transform: capitalize;
        text-rendering: optimizeLegibility;
        transition: all 0.35s ease;
      }

    .method-action:hover {
        background: #f1f5f9;
      }
}


@media screen and (max-width: 1280px) {
    .main .wrapper {
        max-width: 38rem;
        padding: 2rem 2.5rem;
    }
}  

`

export default Login