import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    // alert("you are calling me!!");
    return (
        <div class="page">
            
           <h1>Welcome to DSP calculator!</h1>
           <h3>What do you want to calculate?</h3>
           <ul class="list-items">
               <li>
                <Link to="/lc">Linear Convolution</Link>
               </li>
               <li>
                   <Link to="/cc">Circular Convolution</Link>
               </li>
               <li>
                   <Link to="/cross">Cross Correlation</Link>
               </li>
               <li>
                   <Link to="/auto">Auto Correlation</Link>
               </li>
           </ul>
        </div>
    )
}

export default Home;
