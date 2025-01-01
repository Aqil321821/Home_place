import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibiltyIcon from '../assets/svg/visibilityIcon.svg';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back !</p>
        </header>

        <main>
          <form>
            <input type='email' className='emailInput' placeholder='Enter Your Email' id='email' value={email} onChange={onChange} />

            <div className='passwordInputDiv'>
              <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Enter Password' id='password' value={password} onChange={onChange} />

              <img src={visibiltyIcon} alt='Show' className='showPassword' onClick={() => setShowPassword((prevState) => !prevState)} />
            </div>

            <Link to='/forgot-password' className='forgotPasswordLink'>
              Forgot Password
            </Link>

            <div className='signInBar'>
              <p className='signInText'>Sign In</p>
              <button className='signInButton'>
                <ArrowRightIcon fill='#ffffff' height='34px' width='34px' />
              </button>
            </div>
          </form>

          {/* Google Sign In */}

          <Link to='/sign-up' className='registerLink'>
            Sign Up Instead !
          </Link>
        </main>
      </div>
    </>
  );
};

export default SignIn;
