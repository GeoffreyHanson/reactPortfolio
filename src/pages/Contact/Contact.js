import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PageTitle from '../../components/PageTitle/PageTitle';
import './Contact.css';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = () => (
  <div className="Contact">
    <header className="Header">
      <PageTitle>Contact me</PageTitle>
    </header>
    <div>
      <Navigation />
      <ContactForm />
    </div>
  </div>
);

export default Contact;
