import { useState } from 'react';
import './Contact.css'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending data to a server
    console.log('Form data submitted:', formData);
    alert('Form submitted!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact">
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.h2}>Contact Us</h2>  
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input
            style={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="message">Message:</label>
          <textarea
            style={styles.textarea}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button style={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
};

const styles = {
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '1em',
    background: '#f9f9f9',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  h2: {
    textAlign: 'center',
    fontSize: '28px'
  },
  formGroup: {
    marginBottom: '1em',
  },
  label: {
    marginBottom: '.5em',
    color: '#333333',
    display: 'block',
  },
  input: {
    border: '1px solid #CCCCCC',
    padding: '0.5em',
    fontSize: '1em',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '5px',
  },
  textarea: {
    border: '1px solid #CCCCCC',
    padding: '0.5em',
    fontSize: '1em',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '5px',
    height: '100px',
  },
  button: {
    background: '#007BFF',
    color: '#ffffff',
    border: 'none',
    padding: '0.7em 1.4em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '1em',
  },
};

export default ContactForm;
