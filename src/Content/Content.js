import React from 'react'
import './Content.css'
import img from './pic.svg'

const Content = () => {
    return (
        <div>
            <h1>Why Data Science Sdot Data <br></br> Science for Everyone</h1>
            <img alt ="Loading" src={img}></img>
            <h2>Data Science sdot is one of the <br></br> leading platforms providing data <br></br>scence Solution </h2>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.</li><br></br>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.</li>
            </ul>
            <ul className='Learn'>
                 <li>Learn More</li>
             </ul>
             <div className="circle"></div>
    
        </div>
    )
}

export default Content
