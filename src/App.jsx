import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import LogIn from './pages/login/loginin';
import SignUP from './pages/signup/signup';
import { useState } from 'react';


function App() {

  const [display, setDisplay] = useState(true);
  const handleDisplay = () => {
    setDisplay(!display)
  
  }
  
  return (
    <Router> {/* Wrap with Router */}
      <>
       { display &&  <LogIn /> ? <SignUP /> :  <LogIn />}
      <button className='text-white px-10 py-10 w-50 h-10 bg-brown-800 right-4' onClick={handleDisplay}>Show signIn or SignUp</button>
      </>
    </Router>
  );
}

export default App;
