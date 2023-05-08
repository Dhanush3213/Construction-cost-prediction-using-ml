// import React, { useState } from 'react'
// // import "./Login.css"
// import styled from "styled-components";
// import { NavLink } from "react-router-dom"
// import { useNavigate } from "react-router-dom";

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


// input, textarea{
//          max-width: 80rem;
// }
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
//     max-width: 60rem;
//     min-height: 85vh;
//     width: 100%;
//     padding: 0 2rem;
//     margin: 0 auto;
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
//     max-width: 100rem;
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
//     // margin-top: 2rem; 

//     .input-control {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       margin-bottom: 1.25rem;
//       }
//       .input-control-button {
//         display: flex;
//         align-items: center;
//         justify-content:flex-end ;
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
//         // width: 100%; 
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

// const Signup = () => {

//     const navigate = useNavigate();


//     const [user, setuser] = useState({
//         name: "",
//         email: "",
//         password: "",
//         password2: "",
//         tc: ""
//     });

//     let name, value;

//     const inputHandlers = (e) => {
//         name = e.target.name;
//         value = e.target.value;
//         setuser({ ...user, [name]: value });
//     };

//     //! we are sending data to Register route....
//     const POSTDATA = async (e) => {
//         e.preventDefault();
//         const { name, password, password_2, email, tc } = user;

//         const res = await fetch("http://127.0.0.1:8000/signup", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 name: name,
//                 email: email,
//                 password: password,
//                 password2: password_2,
//                 tc: tc,
//             }),
//         });


//         const data = await res.json();

//         if (data.status === 422 || !data) {
//             window.alert("invalid registration");
//             console.log("invalid registration");
//         } else {
//             window.alert(" registration successfull u can login");
//             navigate("/Login");
//         }
//     };

//     return (
//         <Wrapper>
//             <main className="main">
//                 <div className="container-login">
//                     <section className="wrapper">
//                         <div className="heading">
//                             <h1 className="text text-large">Create User</h1>
//                             <NavLink to="/login"> <p className="text text-normal">Exiting user? <span><a href="#" className="text text-links">SignIn</a></span>
//                             </p> </NavLink>
//                         </div>
//                         <form name="signin" className="form">
//                             <div className='input-control'>
//                                 <label htmlFor="name" className="input-label" hidden>UserName :</label>
//                                 <input type="text" name="username" id="username" value={user.username}
//                                     onChange={inputHandlers} className="input-field" placeholder="User Name" />
//                             </div>
//                             <div className="input-control">
//                                 <label htmlFor="name" className="input-label" hidden>FirstName :</label>
//                                 <input type="text" name="first_name" id="first-name" value={user.first_name}
//                                     onChange={inputHandlers} className="input-field" placeholder="First Name" />
//                             </div>
//                             <div className="input-control">
//                                 <label htmlFor="name" className="input-label" hidden>LastName :</label>
//                                 <input type="text" name="last_name" id="last-name" value={user.last_name}
//                                     onChange={inputHandlers} className="input-field" placeholder="Last Name" />
//                             </div>
//                             <div className="input-control">
//                                 <label htmlFor="email" className="input-label" hidden>Email Address :</label>
//                                 <input type="email" name="email" id="email" value={user.email}
//                                     onChange={inputHandlers} className="input-field" placeholder="Email Address" />
//                             </div>
//                             <div className="input-control">
//                                 <label htmlFor="number" className="input-label" hidden>Password</label>
//                                 <input type="password" name="password" value={user.password}
//                                     onChange={inputHandlers} id="phone" className="input-field" placeholder="Password" />
//                             </div>
//                             <div className="input-control">
//                                 <label htmlFor="password" className="input-label" hidden>Password</label>
//                                 <input type="password" name="password_2" value={user.password_2}
//                                     onChange={inputHandlers} id="password" className="input-field" placeholder="Confirm Password" />
//                             </div>

//                             <div className="input-control input-control-button ">
//                                 <input type="submit" name="submit" className="input-submit" onClick={POSTDATA} value="Sign Up" />
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
//                                     <span>Sign Up with Google</span>
//                                 </a>
//                             </div>
//                             <div className="method-control">
//                                 <a href="#" className="method-action">
//                                     <i className="ion ion-logo-facebook"></i>
//                                     <span>Sign Up with Facebook</span>
//                                 </a>
//                             </div>
//                             <div className="method-control">
//                                 <a href="#" className="method-action">
//                                     <i className="ion ion-logo-apple"></i>
//                                     <span>Sign Up with Apple</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </main>
//         </Wrapper>
//     )
// }

// export default Signup




import React, { useState } from 'react'
// import "./Login.css"
import styled from "styled-components";
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";

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
  
      
input, textarea{
         max-width: 80rem;
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
    max-width: 60rem;
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
    max-width: 100rem;
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
      .input-control-button {
        display: flex;
        align-items: center;
        justify-content:flex-end ;
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

const SignUp = () => {

    const navigate = useNavigate();


    const [user, setuser] = useState({
        username: "",
        first_name: "",
        last_name: "",
        password: "",
        password_2: "",
        email: ""
    });

    let name, value;

    const inputHandlers = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuser({ ...user, [name]: value });
    };

    //! we are sending data to Register route....
    const POSTDATA = async (e) => {
        e.preventDefault();
        const { username, first_name, last_name, password, password_2, email } = user;

        const res = await fetch("http://127.0.0.1:8000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                username: username,
                first_name: first_name,
                last_name: last_name,
                password: password,
                password_2: password_2,
                email: email
            }),
        });

        console.log(" responsoe from backed " + res);

        const data = await res.text();

        if (data.status === 422 || !data) {
            window.alert("invalid registration");
            //  console.log("invalid registration");
        } else {
            window.alert(" registration successfull u can login");
            navigate("/Login");
        }
    };

    return (
        <Wrapper>
            {/* <main> */}
            {/* <body> */}
            <main className="main">
                <div className="container-login">
                    <section className="wrapper">
                        <div className="heading">
                            <h1 className="text text-large">Create User</h1>
                            <NavLink to="/login"> <p className="text text-normal">Exiting user? <span><a href="#" className="text text-links">SignIn</a></span>
                            </p> </NavLink>
                        </div>
                        <form name="signin" className="form">
                            <div className='input-control'>
                                <label htmlFor="name" className="input-label" hidden>UserName :</label>
                                <input type="text" name="username" id="username" value={user.username}
                                    onChange={inputHandlers} className="input-field" placeholder="User Name" />
                            </div>
                            <div className="input-control">
                                <label htmlFor="name" className="input-label" hidden>FirstName :</label>
                                <input type="text" name="first_name" id="first-name" value={user.first_name}
                                    onChange={inputHandlers} className="input-field" placeholder="First Name" />
                            </div>
                            <div className="input-control">
                                <label htmlFor="name" className="input-label" hidden>LastName :</label>
                                <input type="text" name="last_name" id="last-name" value={user.last_name}
                                    onChange={inputHandlers} className="input-field" placeholder="Last Name" />
                            </div>
                            <div className="input-control">
                                <label htmlFor="email" className="input-label" hidden>Email Address :</label>
                                <input type="email" name="email" id="email" value={user.email}
                                    onChange={inputHandlers} className="input-field" placeholder="Email Address" />
                            </div>
                            <div className="input-control">
                                <label htmlFor="number" className="input-label" hidden>Password</label>
                                <input type="password" name="password" value={user.password}
                                    onChange={inputHandlers} id="phone" className="input-field" placeholder="Password" />
                            </div>
                            <div className="input-control">
                                <label htmlFor="password" className="input-label" hidden>Password</label>
                                <input type="password" name="password_2" value={user.password_2}
                                    onChange={inputHandlers} id="password" className="input-field" placeholder="Confirm Password" />
                            </div>

                            <div className="input-control input-control-button ">
                                <input type="submit" name="submit" className="input-submit" onClick={POSTDATA} value="Sign Up" />
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
                                    <span>Sign Up with Google</span>
                                </a>
                            </div>
                            <div className="method-control">
                                <a href="#" className="method-action">
                                    <i className="ion ion-logo-facebook"></i>
                                    <span>Sign Up with Facebook</span>
                                </a>
                            </div>
                            <div className="method-control">
                                <a href="#" className="method-action">
                                    <i className="ion ion-logo-apple"></i>
                                    <span>Sign Up with Apple</span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            {/* </body> */}
            {/* </main> */}
        </Wrapper>
    )
}

export default SignUp