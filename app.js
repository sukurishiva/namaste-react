import React from 'react';
import ReactDOM from 'react-dom/client';

const Header=()=>{
    return (
        <div className='header'>
            <div className='logo-container'>
                <img alt='app-logo' className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All'></img>
            </div>
            <div className='nav-container'>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

const RestoCard=()=>{
  return (
    <div className='resto-card'>
        <img className='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597'></img>
                <h2>Pizza Hut</h2>
                <h5>Chinese,Asian,Tibetian,Desserts</h5>
                <h5>4.2</h5>
                <h5>35 Minutes</h5>
    </div>
  )
}

const Body=()=>{
    return (
        <div className='body'>
            <div className='search'>

            </div>
            <div className='card-container'>
            <RestoCard />
            <RestoCard />
            <RestoCard />
            <RestoCard />
            <RestoCard />
            <RestoCard />
            <RestoCard />
            <RestoCard />
            <RestoCard />
            <RestoCard />
            <RestoCard />
            <RestoCard />
            </div>
        </div>
    )
}



const AppComponent=()=>{
    return (
        <div className='app'>
            <Header />
            <Body></Body>
        </div>
    )
}


const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppComponent />)