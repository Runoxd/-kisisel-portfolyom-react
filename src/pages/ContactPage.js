
import React, { useState, useEffect } from 'react';
import './PageStyles.css';
import './ContactPage.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const contactDetails = {
        address: 'Kahramanmaraş/Türkiye',
        email: 'onur4646ozdemir@gmail.com',
        phone: '+90 533 021 95 17',
    };

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Runoxd', icon: <FaGithub /> },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/onur-özdemir-012516253', icon: <FaLinkedin /> },
        { name: 'X (Twitter)', url: 'https://twitter.com/oonur_ozdmr', icon: <FaTwitter /> },
        { name: 'Instagram', url: 'https://instagram.com/onur_o_zdmr', icon: <FaInstagram /> },
        { name: 'Facebook', url: 'https://facebook.com/Onur Özdemir', icon: <FaFacebook /> },
    ];

    useEffect(() => {
        if (formStatus && !isSending) {
            const displayDuration = 5000;
            const timer = setTimeout(() => {
                setFormStatus('');
                setIsSuccess(false);
            }, displayDuration);
            return () => clearTimeout(timer);
        }
    }, [formStatus, isSending]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setFormStatus('Gönderiliyor...');
        setIsSuccess(false);


        console.log('Form Verileri:', formData);
        setTimeout(() => {
            if (formData.name && formData.email && formData.message) {
                setFormStatus('Mesajınız başarıyla gönderildi!');
                setIsSuccess(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setFormStatus('Lütfen ad, e-posta ve mesaj alanlarını doldurun.');
                setIsSuccess(false);
            }
            setIsSending(false); // Simülasyonda da gönderim bitti
        }, 2000); // Gönderiliyor mesajını görmek için süreyi biraz uzattık
    };

    const messageVariants = {
        hidden: { opacity: 0, y: 20, transition: { duration: 0.4, ease: "easeOut" } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeIn" } },
    };

    return (
        <div className="page-content contact-page">
            <h1>İletişime Geçin</h1>
            <p className="contact-intro">
                Bir proje hakkında konuşmak, bir soru sormak veya sadece merhaba demek isterseniz,
                aşağıdaki bilgileri kullanabilir ya da iletişim formunu doldurabilirsiniz.
            </p>

            <div className="contact-content-grid">
                <div className="contact-info-section">
                    <h2>İletişim Bilgilerim</h2>
                    <p>
                        Aşağıdaki kanallardan bana ulaşmaktan çekinmeyin. En kısa sürede size geri dönüş yapmaya çalışacağım.
                    </p>
                    <ul className="contact-details">
                        {contactDetails.address && contactDetails.address.trim() !== '' && (
                            <li>
                                <FaMapMarkerAlt className="contact-icon" />
                                <span><strong>Adres:</strong> {contactDetails.address}</span>
                            </li>
                        )}
                        {contactDetails.email && (
                            <li>
                                <FaEnvelope className="contact-icon" />
                                <span><strong>E-posta:</strong> <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></span>
                            </li>
                        )}
                        {contactDetails.phone && contactDetails.phone.trim() !== '' && (
                            <li>
                                <FaPhoneAlt className="contact-icon" />
                                <span><strong>Telefon:</strong> {contactDetails.phone}</span>
                            </li>
                        )}
                    </ul>

                    {socialLinks.length > 0 && (
                        <>
                            <h2>Takip Edin</h2>
                            <div className="social-media-contact">
                                {socialLinks.map((social, index) => (
                                    social.url && social.url !== '#' && (
                                        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" title={social.name}>
                                            {social.icon}
                                        </a>
                                    )
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="contact-form-section">
                    <h2>Bana Mesaj Gönderin</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Ad Soyad <span className="required">*</span></label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required disabled={isSending} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-posta Adresiniz <span className="required">*</span></label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required disabled={isSending} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Konu</label>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} disabled={isSending} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mesajınız <span className="required">*</span></label>
                            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required disabled={isSending}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSending}>
                            {isSending ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                        </button>

                        <AnimatePresence>
                            {formStatus && (
                                <motion.p
                                    key="form-status-message"
                                    className={`form-status ${isSending ? 'sending' : isSuccess ? 'success' : 'error'}`}
                                    variants={messageVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                >
                                    {isSending && <FaSpinner className="spinner-icon" style={{ marginRight: '8px', verticalAlign: 'middle' }} />}
                                    {isSuccess && !isSending && <FaCheckCircle style={{ marginRight: '8px', verticalAlign: 'middle' }} />}
                                    {formStatus}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
