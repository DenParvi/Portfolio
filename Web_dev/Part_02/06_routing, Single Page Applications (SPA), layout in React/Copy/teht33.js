// teht33.js
import React from 'react';
import './teht33.css';

export function Header() {
  return <div className="header">Welcome to main page of Savonia AMK</div>;
}

export function Footer() {
  return <div className="footer">Copyright by ktkoiju@Savonia</div>;
}

export function LeftSide() {
  return <div className="left-side">Please log in!</div>;
}

export function Center() {
  return <div className="center">Introduction of our company ...</div>;
}

export function RightSide() {
  return <div className="right-side">Lot's of info about our company...</div>;
}

export function Teht33() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <LeftSide />
        <Center />
        <RightSide />
      </div>
      <Footer />
    </div>
  );
}

export default Teht33;
