import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        // Add other fields if necessary
    });

    const [captchaValue, setCaptchaValue] = useState(null);
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);


    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowCaptcha(true);

        if (!captchaValue) {
            alert("Please solve the captcha to proceed!");
            return;
        }

        // Include the captchaValue in your submission data
        const submissionData = {
            ...formData,
            captcha: captchaValue,
        };

        // Send a POST request to your Django back-end
        axios.post('https://portfolio-backend-b7enjhlbya-lz.a.run.app/api/contact/', submissionData)
            .then(response => {
                // Handle success
                console.log("Okay");
                setSubmissionStatus('success');
            })
            .catch(error => {
                // Handle errors
                console.error(error);
                setSubmissionStatus('error'); 
            });
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
            />
            {showCaptcha && (
                <ReCAPTCHA
                    sitekey="6Ld8XFopAAAAAC9DjFhN29yKq0xbkVHnKp_qV3tB"
                    onChange={handleCaptchaChange}
                />
            )}
            <button type="submit">Send</button>
            {submissionStatus === 'success' && <div className="success-message">Your message has been sent successfully.</div>}
            {submissionStatus === 'error' && <div className="error-message">There was an error sending your message.</div>}
        </form>
    );
};

export default ContactForm;
