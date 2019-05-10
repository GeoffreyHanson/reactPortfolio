import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PageTitle from '../../components/PageTitle/PageTitle';
import './Contact.css';

const Contact = () => {
  return (
    <div className="Contact">
      <header className="Header">
        <PageTitle>Contact me</PageTitle>
        <Navigation />
      </header>
      <div>
        <h4>Geoffrey Hanson</h4>
        <h4>Phone: 612-424-1722</h4>
        <h4>Email: GeoffreyKHanson@gmail.com</h4>
      </div>
    </div>
  )
}

export default Contact;