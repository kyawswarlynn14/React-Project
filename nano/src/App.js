import React, { Component } from 'react';
import Header from './component/header/index'
import Cover from './component/cover/index'
import Main from './component/hero/index'

const App = () => {

    return ( 
        <div 
        className='
        container p-5 mx-auto rounded-3xl
        w-96     bg-white
        h-full
        '>
           <Header />

           <Cover />

           <Main />
        </div>
    );
}
 
export default App;