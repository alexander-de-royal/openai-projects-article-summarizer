import React from 'react'
import {Hero} from './components/hero';
import {Demo} from './components/demo';
import "./App.css"

export const App = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient"/>
            </div>
            <div className="app">
                <Hero/>
                <Demo/>
            </div>
        </main>
    );
}


