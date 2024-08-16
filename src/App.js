import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import ProfileScreen from './screen/ProfileScreen';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {

  let user = useSelector(selectUser);
  // let user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }
      else {
        // Logged out
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch])


  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Routes>

            <Route path="*" element={<LoginScreen />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={user ? <HomeScreen /> : <LoginScreen />} />
            <Route path="/profile" element={user ? <ProfileScreen /> : <LoginScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

