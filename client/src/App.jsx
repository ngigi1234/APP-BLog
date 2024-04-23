// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomePage from './component/Header';
// import AboutPage from './component/AboutPage';
// import Footer from './component/footer';
// import { Login } from './component/Login';
// import { SignUp } from './component/SignUp';
// import { DevelopersPage } from './component/DevelopersPage';
// import { Home } from './component/Home';
// import BlogPage from './component/BlogPage';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="container mx-auto px-4">
//       <HomePage />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <Routes>
//           <Route exact path="/" element={<Home/>} />
//           <Route exact path="/about" element={<AboutPage />} />
//           <Route exact path="/blog" element={<BlogPage />} />
//           <Route exact path="/developer" element={<DevelopersPage />} />
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/signup" element={<SignUp />} />


//         </Routes>
//       </div>

//       <div className=''>
//       <Footer/>
//       </div>
      
     
//     </BrowserRouter>
//   );
// }

// export default App;






// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import HomePage from './component/Header';
// import AboutPage from './component/AboutPage';
// import Footer from './component/footer';
// import { Login } from './component/Login';
// import { SignUp } from './component/SignUp';
// import { DevelopersPage } from './component/DevelopersPage';
// import { Home } from './component/Home';
// import BlogPage from './component/BlogPage';
// import { auth } from "./config";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { sendPasswordResetEmail } from "firebase/auth/web-extension";

// function Authntication({ onAuthenticated }) {
//     const [userCredential, setUserCredential] = useState({});
//     const [error, setError] = useState('');
//     const [loginType, setLoginType] = useState('login');

//     function handleCredentials(e) {
//         setError('');
//         setUserCredential({ ...userCredential, [e.target.name]: e.target.value });
//     }

//     function handleSignUp(e) {
//         e.preventDefault();
//         const { email, password } = userCredential;

//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 onAuthenticated();
//             })
//             .catch((error) => {
//                 setError(error.message);
//             });
//     }

//     function handleLogin(e) {
//         e.preventDefault();
//         const { email, password } = userCredential;

//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 onAuthenticated();
//             })
//             .catch((error) => {
//                 setError(error.message);
//             });
//     }

//     function handlePasswordReset() {
//         const email = prompt('Please enter your email');
//         sendPasswordResetEmail(auth, email);
//         alert('Email sent! Check your inbox to reset your password.');
//     }

//     return (
//         <>
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <p className="text-center mb-4">To continue, create an account or login to an existing account.</p>

//                         <div className="text-center mb-4">
//                             <button type="button" className="btn btn-secondary me-2" onClick={() => setLoginType('login')}>Login</button>
//                             <button type="button" className="btn btn-secondary" onClick={() => setLoginType('signup')}>Signup</button>
//                         </div>

//                         <p className="text-start">Email</p>
//                         <div className="form-floating mb-3">
//                             <input onChange={(e) => handleCredentials(e)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
//                             <label htmlFor="floatingInput">Email address</label>
//                         </div>

//                         <p className="text-start">Password</p>
//                         <div className="form-floating mb-3">
//                             <input onChange={(e) => handleCredentials(e)} type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" />
//                             <label htmlFor="floatingPassword">Password</label>
//                         </div>

//                         {loginType === 'login' ? (
//                             <button onClick={(e) => handleLogin(e)} className="btn btn-primary" type="button">Login</button>
//                         ) : (
//                             <button onClick={(e) => handleSignUp(e)} className="btn btn-primary" type="button">Signup</button>
//                         )}

//                     </div>
//                 </div>
//             </div>

//             {error && 
//                 <div className="error">
//                     {error}
//                 </div>
//             }

//             <p onClick={handlePasswordReset}><a className="link-offset-2 link-underline link-underline-opacity-0" href="#">Forgot Password?</a></p>
//         </>
//     );
// }

// function App() {
//   const [authenticated, setAuthenticated] = useState(false);

//   function handleAuthenticated() {
//     setAuthenticated(true);
//   }

//   return (
//     <BrowserRouter>
//       <div className="container mx-auto px-4">
//         <HomePage />
//       </div>

//       {authenticated ? (
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <Routes>
//             <Route exact path="/" element={<Home/>} />
//             <Route exact path="/about" element={<AboutPage />} />
//             <Route exact path="/blog" element={<BlogPage />} />
//             <Route exact path="/developer" element={<DevelopersPage />} />
//             <Route exact path="/login" element={<Login />} />
//             <Route exact path="/signup" element={<SignUp />} />
//           </Routes>
//         </div>
//       ) : (
//         <Authntication onAuthenticated={handleAuthenticated} />
//       )}

//       <div className=''>
//         <Footer/>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;






// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomePage from './component/Header';
// import AboutPage from './component/AboutPage';
// import Footer from './component/footer';
// // import { Login } from './component/Login';
// // import { SignUp } from './component/SignUp';
// import { DevelopersPage } from './component/DevelopersPage';
// import { Home } from './component/Home';
// import BlogPage from './component/BlogPage';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { sendPasswordResetEmail } from "firebase/auth/web-extension";
// import { auth } from "./config";

// function Authentication({ onAuthenticated }) {
//     const [userCredential, setUserCredential] = useState({});
//     const [error, setError] = useState('');
//     const [loginType, setLoginType] = useState('login');

//     function handleCredentials(e) {
//         setError('');
//         setUserCredential({ ...userCredential, [e.target.name]: e.target.value });
//     }

//     function handleSignUp(e) {
//         e.preventDefault();
//         const { email, password } = userCredential;

//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 onAuthenticated();
//             })
//             .catch((error) => {
//                 setError(error.message);
//             });
//     }

//     function handleLogin(e) {
//         e.preventDefault();
//         const { email, password } = userCredential;

//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 onAuthenticated();
//             })
//             .catch((error) => {
//                 setError(error.message);
//             });
//     }

//     function handlePasswordReset() {
//         const email = prompt('Please enter your email');
//         sendPasswordResetEmail(auth, email);
//         alert('Email sent! Check your inbox to reset your password.');
//     }

//     return (
//         <>
//             <div className="container mx-auto">
//                 <div className="flex justify-center">
//                     <div className="w-full max-w-md">
//                         <p className="text-center mb-4">To continue, create an account or login to an existing account.</p>

                     
//             <div className="flex justify-center items-center mb-4">
//                  <button type="button" className={`bg-gray-300 text-gray-700 px-4 py-2 rounded-l-md ${loginType === 'login' ? 'font-bold' : ''} mr-2 hover:bg-blue-500 hover:text-white`} onClick={() => setLoginType('login')}>
//                      Login
//                  </button>
//                  <button type="button" className={`bg-gray-300 text-gray-700 px-4 py-2 rounded-r-md ${loginType === 'signup' ? 'font-bold' : ''} ml-2 hover:bg-blue-500 hover:text-white`} onClick={() => setLoginType('signup')}>
//                           Signup
//                  </button>
//             </div>


//                         <p className="text-start">Email</p>
//                         <div className="mb-4">
//                             <input onChange={(e) => handleCredentials(e)} type="email" className="w-full px-3 py-2 leading-tight focus:outline-none focus:shadow-outline border rounded" id="email" placeholder="name@example.com" name="email" />
//                         </div>

//                         <p className="text-start">Password</p>
//                         <div className="mb-4">
//                             <input onChange={(e) => handleCredentials(e)} type="password" className="w-full px-3 py-2 leading-tight focus:outline-none focus:shadow-outline border rounded" id="password" placeholder="Password" name="password" />
//                         </div>

//                         <div className="flex justify-center items-center">
//                              {loginType === 'login' ? (
//                              <button onClick={(e) => handleLogin(e)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">Login</button>
//                             ) : (
//                             <button onClick={(e) => handleSignUp(e)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">Signup</button>
//                               )}
//                              </div>


//                     </div>
//                 </div>
//             </div>

//             {error && 
//                 <div className="text-red-500">
//                     {error}
//                 </div>
//             }
//           <div className="flex justify-center items-center">
//             <p onClick={handlePasswordReset} className="text-blue-500 hover:text-blue-700 cursor-pointer">Forgot Password?</p>
//           </div>

//         </>
//     );
// }

// function App() {
//     const [authenticated, setAuthenticated] = useState(false);

//     function handleAuthenticated() {
//         setAuthenticated(true);
//     }

//     return (
//         <BrowserRouter>
//             <div className="container mx-auto px-4">
//                 {/* <HomePage /> */}
//             </div>

//             {authenticated ? (
              
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                   <HomePage/>
//                     <Routes>
//                         <Route exact path="/" element={<Home />} />
//                         <Route exact path="/about" element={<AboutPage />} />
//                         <Route exact path="/blog" element={<BlogPage />} />
//                         <Route exact path="/developer" element={<DevelopersPage />} />
//                         {/* <Route exact path="/login" element={<Login />} />
//                         <Route exact path="/signup" element={<SignUp />} /> */}
//                     </Routes>
//                 </div>
//             ) : (
//                 <Authentication onAuthenticated={handleAuthenticated} />
//             )}

//             <div className=''>
//                 <Footer />
//             </div>
//         </BrowserRouter>
//     );
// }

// export default App;






















// import React, { useState } from 'react';
// import axios from 'axios';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomePage from './component/Header';
// import AboutPage from './component/AboutPage';
// import Footer from './component/footer';
// // import { Login } from './component/Login';
// // import { SignUp } from './component/SignUp';
// import { DevelopersPage } from './component/DevelopersPage';
// import { Home } from './component/Home';
// import BlogPage from './component/BlogPage';

// function Authentication({ onAuthenticated }) {
//     const [userCredential, setUserCredential] = useState({});
//     const [error, setError] = useState('');
//     const [loginType, setLoginType] = useState('login');
//     const [authenticated, setAuthenticated] = useState(false);

//     function handleCredentials(e) {
//         setError('');
//         setUserCredential({ ...userCredential, [e.target.name]: e.target.value });
//     }

//     async function handleLoginOrSignUp() {
//         const { email, password } = userCredential;
//         try {
//             const response = await axios.post(`http://localhost:5000/${loginType}`, { email, password });
//             const token = response.data.token;
//             localStorage.setItem('token', token);
//             setAuthenticated(true);
//             onAuthenticated();
//         } catch (error) {
//             setError(error.response.data.message);
//         }
//     }
//     return (
//         <BrowserRouter>
//             <div className="container mx-auto px-4">
//                 {/* <HomePage /> */}
//             </div>

//             {authenticated ? (
              
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                   <HomePage/>
//                     <Routes>
//                         <Route exact path="/" element={<Home />} />
//                         <Route exact path="/about" element={<AboutPage />} />
//                         <Route exact path="/blog" element={<BlogPage />} />
//                         <Route exact path="/developer" element={<DevelopersPage />} />
//                         {/* <Route exact path="/login" element={<Login />} />
//                         <Route exact path="/signup" element={<SignUp />} /> */}
//                     </Routes>
//                 </div>
//             ) : (
//                 <Authentication onAuthenticated={handleAuthenticated} />
//             )}

//             <div className=''>
//                 <Footer />
//             </div>
//         </BrowserRouter>
//     );
// }

// export default Authentication;






import React, { useState } from 'react';
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './component/Header';
import AboutPage from './component/AboutPage';
import Footer from './component/footer';
import { DevelopersPage } from './component/DevelopersPage';
import { Home } from './component/Home';
import BlogPage from './component/BlogPage';
import Authentication from './Authentication';
import Profile from './component/Profile';

function App() {
    const [authenticated, setAuthenticated] = useState(false);

    function handleAuthenticated() {
        setAuthenticated(true);
    }

    return (
        <BrowserRouter>
            <div className="container mx-auto px-4">
            </div>

            {authenticated ? (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <HomePage/>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<AboutPage />} />
                        <Route exact path="/blog" element={<BlogPage />} />
                        <Route exact path="/developer" element={<DevelopersPage />} />
                        <Route path="/profile" element={<Profile />} />
                      
                    </Routes>
                    <Footer />
                </div>
            ) : (
                <Authentication onAuthenticated={handleAuthenticated} />
            )}

            <div className=''>
          
            </div>
        </BrowserRouter>
    );
}

export default App;






















