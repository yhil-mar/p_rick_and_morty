import axios from 'axios';
axios.defaults.baseURL = 'https://p-rick-and-morty-0ohh.onrender.com';
import { Router } from './components/index.mjs';

function App() {

  return (

    <div className='font-lato bg-third-color view'>

      <Router />

    </ div>

  )

};

export default App
