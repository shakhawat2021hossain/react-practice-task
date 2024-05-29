import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import './Register.css'
import auth from '../../firebase/firebase.config';
import { useContext, useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const Register = () => {
    const [registerError, setRegisterError] = useState(" ");
    const [success, setSuccess] = useState(" ");
    const [showPass, setShowPass] = useState(false)

    const {createUser} = useContext(AuthContext)


    const handleRegister = (e) => {
        e.preventDefault();
        // console.log('form submitting');
        const name = e.target.name.value;
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



        // console.log(name, email, pass);

        createUser(email, pass)
        .then(res =>{
            // console.log(res.user);
            setSuccess("User created Successfully");
            e.target.reset();

            //update profile
            updateProfile(res.user, {
                displayName: name,
                photoURL: "https://example.com/jane-q-user/profile.jpg"
            })

            //send verification email
            sendEmailVerification(res.user)
            .then(() => {
                alert("Check your mail box and verify account");
            })
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

                    <label>Name:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required>
                    </input>

                    <label>Email:</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required>
                    </input>

                    <label>Password:</label>
                    <input 
                    type={showPass ? "text" : "password"} 
                    id="password" 
                    name="password" 
                    required>
                    </input>

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