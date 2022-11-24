import React from 'react';
import ReactDOM from 'react-dom/client';
// import Navigation from './Navigation/TicketSelector';
import Navigation from './pages/TicketSelector';
import App from './components/Option';
// import VerifyOTP from './pages/VerifyOTP';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
  </React.StrictMode>
);
