import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Register.css'
import auth from '../../firebase/firebase.config';
import { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const Register = () => {
    const [registerError, setRegisterError] = useState(" ");
    const [success, setSuccess] = useState(" ");
    const [showPass, setShowPass] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log('form submitting');
        const email = e.target.email.value;
        const pass = e.target.password.value;

        
        
        //clear error/success message
        setRegisterError(' ');
        setSuccess(' ');

        //pass validation
        if(pass.length < 6){
            setRegisterError("Password length should at least 6 character");
            return; //so that submit wont happen
        }



        // console.log(email, pass);
        createUserWithEmailAndPassword(auth, email, pass)
        .then(res =>{
            console.log(res.user);
            setSuccess("User created Successfully");
        })
        .catch(error =>{
            console.error(error.message);
            setRegisterError(error.message);
        })
    }
    return (
        <div>
            <div className="container">
                <form onSubmit={handleRegister} className="create-account-form">
                    <h2>Create Account</h2>
                    <label>Email:</label>
                    <input type="email" id="email" name="email" required></input>
                    <label>Password:</label>
                    <input type={showPass ? "text" : "password"} id="password" name="password" required></input>
                    <span onClick={()=> setShowPass(!showPass)}>
                        {showPass ? <IoEyeSharp></IoEyeSharp> :<FaEyeSlash></FaEyeSlash>}
                    </span>
                    <button type="submit">Submit</button>
                    <p>Already have account? <Link to='/login'>Login</Link></p>

                </form>
                {
                    registerError && <p className='err-msg'>{registerError}</p>
                }
                {
                    success && <p className='suc-msg'>{success}</p>
                }
            </div>
            
        </div>
    );
};

export default Register;