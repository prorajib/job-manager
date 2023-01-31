import React from 'react';
import { Link } from 'react-router-dom';
import leader from '../assets/images/leader.png';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Simple job tracker app which helps you to track your job application
            process, schedule your interview and monitor overall job searching
            progresses and many more.
          </p>

          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <div>
          <img src={leader} alt='job hunt' className='img main-img' />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
