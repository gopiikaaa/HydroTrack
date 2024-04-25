// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homepage';
import LoginPage from './loginpage';
import SignupPage from './SignupPage';
import forpassPage from './forpasspage';
import AboutUsPage from './AboutUsPage';
import WaterResourcePage from './WaterResourcePage';
import BusinessPage from './bussinesspage';
import PaymentPage from './paymentpage';
import FeedbackPage from './feedbackpage';
import ForgotPage from './forpasspage';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
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
