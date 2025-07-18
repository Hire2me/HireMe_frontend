import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google';

// Replace with your actual Google Client ID from Google Cloud Console
const clientId = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById('root')).render



createRoot(document.getElementById('root')).render(
  <StrictMode>
       <GoogleOAuthProvider clientId={clientId}>
    <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
