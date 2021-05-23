import React from 'react';
import img from './CardA.jpg';
import './CardA.css';


const headerImg = {
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: '0 -75px',
  backgroundRepeat: 'no-repeat',
  height: 145,
  width: '100%',
  opacity: '1',
  position: 'relative',
  zIndex: 500
};

export default (props) => (
  <aside className="cardA">
    <header className="cardA-header" style={headerImg}>Prateek Hotel</header>
    <main className="cardA-body">
      <h1 className="cardA-title center">Economy</h1>
      
    </main>
    <html>
    
    </html>
  </aside>
);