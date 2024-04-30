// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserloginPage from './ualogin';
import AdminLoginPage from './adminlogin';
import LoginPage from './loginpage';
import HomePage from './homepage';
import AdminHomePage from './adminhome';
import SignupPage from './SignupPage';
import ForgotPage from './forpasspage';
import AboutUsPage from './AboutUsPage';
import WaterResourcePage from './WaterResourcePage';
import BusinessPage from './bussinesspage';
import PaymentPage from './paymentpage';
import FeedbackPage from './feedbackpage';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserloginPage />} />
          <Route path="/login/user" element={<LoginPage />} />
          <Route path="/login/admin" element={<AdminLoginPage />} />
          <Route path="/adminhome" element={<AdminHomePage />} />
          <Route path="/login" element={<HomePage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/water-resource" element={<WaterResourcePage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
