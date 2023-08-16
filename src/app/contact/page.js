import React from 'react';
import ContactCard from "../../components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899503.7766139884!2d77.29016291457539!3d28.277517516106368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb51f8cad089%3A0xe551240ada99b6dc!2sDadri%20Tahsil%20Uttar%20pradesh!5e0!3m2!1sen!2sin!4v1683890109453!5m2!1sen!2sin"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade">
                    
                </iframe>

        </>
    );
};

export default Contact;