import React, { Component } from 'react';
import './Dog.css';
import GR from './gr.png'

class Dog extends Component {
    render() {
        return (
            <div>
                <div className='Dog'>
                    <h1>Dog!</h1>
                </div>
                <img className='Dog-img' src={GR} />
            </div>
        );
    }
}
export default Dog;