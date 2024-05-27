
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
// import auth from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import auth from '../../firebase/firebase.config';

const Login = () => {
    const [success, setSuccess] = useState(' ');
    const [logInErr, setLogInErr] = useState(' ');
    const emailRef = useRef(null);

    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value; 
        // console.log(email, pass);

        //clear msg
        setSuccess(' ');
        setLogInErr(' ');


        signInWithEmailAndPassword(auth, email, pass)
        .then(res => {
            const user = res.user;
            console.log(user);
            if(user.emailVerified){
                setSuccess("User logged in Successfully");
            }
            else{
                alert("please verify your mail")
            }

        })
        .catch(err => {
            console.log(err.message);
            setLogInErr(err.message);

        })
    }

    const handleForgotPass = () =>{
        console.log("forgot", emailRef.current.value);
        const email = emailRef.current.value;
        if(!email){
            console.log('Please Write a valid email');
            return;
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            console.log("please write a valid email");
            return;
        }

        sendPasswordResetEmail(auth, email)
        .then(() =>{
            alert("please cheack you mail box")
        })
        .catch(err => {
            console.log(err);
        })
    }

   
    return (
        <div className="login-container">
            <form onSubmit={handleLogIn} className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label>Email:</label>
                    <input 
                        type="email"
                        name='email'
                        ref={emailRef} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input 
                        type="password"
                        name='password'
                        required 
                    />
                </div>
                <p onClick={handleForgotPass} className='forgot'>Forgot password?</p>
                <button type="submit">Login</button>
                <p>Dont have any account? <Link to='/register'>Register</Link></p>
                {
                    success && <p className='suc-msg'>{success}</p>
                }
                {
                    logInErr && <p className="err-msg">{logInErr}</p>
                }
            </form>
            
        </div>
    );
};

export default Login;
