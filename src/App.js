import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import WishForm from './components/WishForm';
import WishMessage from './components/WishMessage';

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  return (
    <Router>
    <Routes>
      {/* Route for the form page */}
      <Route path="/" element={<WishForm setUserInfo={setUserInfo} />} />

      {/* Route for the message page */}
      <Route path="/message" element={<WishMessage userInfo={userInfo} />} />
    </Routes>
  </Router>
 
  );
};

export default App;
 /* <div>
      <WishForm setUserInfo={setUserInfo} />
      {userInfo && <WishMessage userInfo={userInfo} />}
    </div>*/


  /*return (
    <div className="App">
      {!userInfo ? (
        <WishForm setUserInfo={setUserInfo} />
      ) : (
        <WishMessage setUserInfo={setUserInfo} />
      )}
    </div>
  );*/




 

