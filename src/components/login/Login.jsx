
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
import auth from '../../firebase/firebase.config';

const Login = () => {
    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value; 
        // console.log(email, pass);


        signInWithEmailAndPassword(auth, email, pass)
        .then(res => {
            const user = res.user;
            console.log(user);
        })
        .catch(err => {
            console.log(err.message);
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
