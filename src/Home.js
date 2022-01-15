import React from 'react';
import { Link } from 'react-router-dom';
import calci from './components/img/calci.jpg';
import './Home.css';

const Home = () => {
    // alert("you are calling me!!");
    return (
        <div className='top'>
           <h1 className='topic'>Welcome to DSP calculator!</h1>
           <h3 className='subTopic'>What do you want to calculate?</h3>
           <div className='card-row1'>
                <div className='card1'>
                    <Link to="/lc">
                        <div className='container'>
                            <img className='img1' src={calci}></img>
                            <div class="middle">
                                <div class="text">CLICK HERE</div>
                            </div>
                        </div>
                    </Link>
                    <div className='lc1'>
                            <h3>Linear Convolution</h3>
                        <p className='para'>
                            Linear convolution is a mathematical operation.
                            It is done to calculate the output of any Linear-Time Invariant (LTI) system given its input and impulse response.
                        </p>
                    </div>
                </div>

                <div className='card1'>
                    <Link to="/cc">
                        <div className='container'>
                            <img className='img' src={calci}></img>
                            <div class="middle">
                                <div class="text1">CLICK HERE</div>
                            </div>
                        </div>
                    </Link>
                    <div className='lc'>
                        <h3>Circular Convolution</h3>
                        <p className='para'>Circular convolution, also known as cyclic convolution, is a special case of periodic convolution, 
                            which is the convolution of two periodic functions that have the same period.</p>
                    </div>
                </div>
                <div className='card1'>
                    <Link to="/cross">
                        <div className='container'>
                            <img className='img' src={calci}></img>
                            <div class="middle">
                                <div class="text1">CLICK HERE</div>
                            </div>
                        </div>
                    </Link>
                    <div className='lc'>
                       <h3>Cross Correlation</h3>        
                        <p className='para'>In signal processing, cross-correlation is a measure of similarity of two series as a function of the displacement of one relative to the other.</p> 
                    </div>
                </div>
                <div className='card1'>
                    <Link to="/auto">
                        <div className='container'>
                            <img className='img' src={calci}></img>
                            <div class="middle">
                                <div class="text1">CLICK HERE</div>
                            </div>
                        </div>
                    </Link>
                    <div className='lc'>
                        <h3>Auto Correlation</h3>
                        <p className='para'>Auto correlation measures the relationship between a variable's current value and its past values.</p>
                    </div>
                    
                </div>
            </div>
               
        </div>
    )
}

export default Home;
