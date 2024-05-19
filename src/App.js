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
import FeedbackPage from './feedbackpage';
import RequestPage from './RequestPage';
import CommercialPage from './CommercialPage';
import WaterResourcesList from './WaterResourcesList';
import HTSearchPage from './HTSearchPage';
import RequestsList from './unverifiedSources';
import WaterResourcesListAdmin from './WaterResourcesListAdmin';



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
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/inform-new-source" element={<RequestPage />} />
          <Route path="/request-supply" element={<CommercialPage />} />
          <Route path="/WaterResourcesList" element={<WaterResourcesList />} />
          <Route path="/unverifiedsources" element={<RequestsList />} />
          <Route path="/HTSearchPage" element={<HTSearchPage />} />
          <Route path="/WaterResourcesListAdmin" element={<WaterResourcesListAdmin />} />
        
        </Routes>
       </div> 
    </Router>
  );
}

export default App;
