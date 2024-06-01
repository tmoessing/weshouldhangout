import React from 'react';

import {
    BrowserRouter,
    NavLink,
    Routes,
    Navigate,
    Route
} from 'react-router-dom';

// Components
import Header from './header/header.jsx'
import Footer from './footer/footer.jsx'

// CSS Styling
import './main.css'
import './index.css'

function App() {
    return (
        <>
            <Header />
            <h1>We Should Hangout</h1>
            <p>Welcome to our hangout app!</p>
            <Footer />
        </>
    );
}

export default App;