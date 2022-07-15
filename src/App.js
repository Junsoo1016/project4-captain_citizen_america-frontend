import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Login from './LogIn/LogIn';
import SignUp from './SignUp/SignUp';

function App() {

  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getUserData = async () => {
    try {
      const response = await axios.get('https://captain-citizen-america.herokuapp.com/users');
      setUserData(response.data);
      setIsLoading(false);
    }
    catch (error) {
      setIsError(true);
    }
  }

  useEffect(() => {
    getUserData();
  }
  , []);

  const location = useLocation();
  
  const [user, setUser] = useState(null);

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const validateLogin = () => {
    const userSignIn = userData.find(
      (user) => user.username === loginForm.username
    );
    if (userSignIn.password === loginForm.password) {
      console.log('welcome');
      const index = userData.indexOf(userSignIn);
      console.log(userData[index]._id);
      axios
        .put(
          `https://captain-citizen-america.herokuapp.com/users/${userData[index]._id}`,
          {
            logIn: true,
          }
        )
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        });
    } else {
      alert('The password you’ve entered is incorrect.');
    }
  };

  const [signUpForm, setSignUpForm] = useState(null)

  const handleSignUp = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  const createUser = () => {
    axios
      .post(
        'https://captain-citizen-america.herokuapp.com/users/',
        signUpForm
      )
      .then((res) => {
        let oldArray = [...userData];
        oldArray.push(res.data);
        setUserData(oldArray);
      });
  };

  console.log(userData);
  return (
    <div className="App">

      <nav className='nav'>
        <Nav />
      </nav>

      <main>
        <Routes>
          <Route 
            path="/home" 
            element={
            <Home className='home' userData={userData} />
            } 
          />
          <Route
            path='/'
            element={
              <Login className='login' handleLogin={handleLogin} validateLogin={validateLogin} />
            }
          />
          <Route
            path='sign-up'
            element={
              <SignUp handleSignUp={handleSignUp} createUser={createUser} />
            }
          />
        </Routes>
      </main>

    </div>
  );
}

export default App;
