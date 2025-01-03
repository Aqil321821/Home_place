import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';

import { db } from '../firebase.config';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibiltyIcon from '../assets/svg/visibilityIcon.svg';
import OAuth from '../components/OAuth';


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      // console.log(user);
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, 'users', user.uid), formDataCopy);

      navigate('/');
    } catch (error) {
      toast.error('Something Went Wrong !');
      console.error('Error Code:', error.code);
      console.error('Error Message:', error.message);
    }
  };

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back !</p>
        </header>

        <main>
          <form onSubmit={onSubmit}>
            <input type='text' className='nameInput' placeholder='Enter Your Name' id='name' value={name} onChange={onChange} />

            <input type='email' className='emailInput' placeholder='Enter Your Email' id='email' value={email} onChange={onChange} />

            <div className='passwordInputDiv'>
              <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Enter Password' id='password' value={password} onChange={onChange} />

              <img src={visibiltyIcon} alt='Show' className='showPassword' onClick={() => setShowPassword((prevState) => !prevState)} />
            </div>

            <Link to='/forgot-password' className='forgotPasswordLink'>
              Forgot Password
            </Link>

            <div className='signUpBar'>
              <p className='signUpText'>Sign Up</p>
              <button className='signUpButton' type='submit'>
                <ArrowRightIcon fill='#ffffff' height='34px' width='34px' />
              </button>
            </div>
          </form>

          {/* Google Sign In */}
          <OAuth />

          <Link to='/sign-in' className='registerLink'>
            Sign In Instead !
          </Link>
        </main>
      </div>
    </>
  );
};

export default SignUp;
