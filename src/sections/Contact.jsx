import TitleHeader from "../components/TitleHeader.jsx";
import {useRef, useState} from "react";
import ContactExperience from "../components/Models/contact/ContactExperience.jsx";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Add the loading state
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        // Handle form submission logic
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
            // Reset form after submission
            setFormData({ name: '', email: '', message: '' });
        } catch (e) {
            console.log("Email JS error", e);
        } finally {
            setLoading(false);
        }
    };

    const basePath = import.meta.env.BASE_URL;

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Get In Touch With Me" sub="📧 Contact Information" />

                <div className="mt-16 grid-12-cols">
                    {/*Contact Form - Left side */}
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7" ref={formRef}>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Your email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Your message "
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" disabled={loading}>
                                    <div className="cta-button group">
                                        <div className="bg-circle "/>
                                        {/* If in the loading state-> display sending message*/}
                                        <p className="text">{loading ? 'Sending...' : 'Send Message'}</p>
                                        <div className="arrow-wrapper">
                                            <img src={`${basePath}images/arrow-right.svg`} alt="arrow"/>
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/*3D Experience - Right side*/}
                    <div className="xl:col-span-7 min-h-96">
                        <div className="w-full h-full bg-[#1B3C53] hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
export default Contact
