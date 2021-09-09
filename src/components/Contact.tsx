import '../styles/Contact.scss';
import { useState } from 'react';
import { IContact } from '../types';
require('dotenv').config();

const Contact: React.FC = () => {
  const [ contactInfo, setContactInfo ] = useState<IContact>(
    {
      name: '',
      email: '',
      message: ''
    }
  )
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ error, setError ] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      const response = await fetch(`${process.env.REACT_APP_SERVER}/portfolio/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.email,
          message: contactInfo.message
        }),
      });

      if (response.status !== 200) throw new Error();

      setContactInfo({name: '', email: '', message: ''});
      setLoading(false);

    } catch {
      setLoading(false);
      setError('Error sending message');
    }

  }

  return (
    <section className="contact" id="contact">
      <h1>Contact</h1>
      <h2 className="contact__error">{error}</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <input className="contact__input" data-testid="name-input" type="text" placeholder="Name" name="name" value={contactInfo.name} onChange={handleChange} />
        <input className="contact__input" data-testid="email-input" type="text" placeholder="Email" name="email" value={contactInfo.email} onChange={handleChange} />
        <textarea className="contact__input contact__input--message" data-testid="message-input" placeholder="Message" name="message" value={contactInfo.message} onChange={handleChange} />
        <input className="contact__input contact__submit" type="submit" value="Send" disabled={loading} />
      </form>
    </section>
  )
}

export default Contact;