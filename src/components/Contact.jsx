import { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS library
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_86fa1xf", // Your Service ID
        "template_9ismbdl", // Your Template ID
        formState, // Sending the form state (name, email, message)
        "u02I0crrVryhIQMy7" // Your Public Key
      )
      .then(
        (response) => {
          setSuccessMessage("Your message has been sent!");
          setFormState({ name: "", email: "", message: "" });
        },
        (error) => {
          setErrorMessage("Failed to send your message. Please try again.");
        }
      );
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div id="contacts" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact Me
      </motion.h2>
      <div className="max-w-lg mx-auto px-4">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1 }}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full mt-1 p-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </motion.div>
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1 }}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full mt-1 p-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </motion.div>
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1 }}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formState.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              className="w-full mt-1 p-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
            ></textarea>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1 }}>
            <button
              type="submit"
              className="flex items-center justify-center w-full py-3 text-sky-600 text-lg rounded-lg transition focus:outline-none focus:ring-2 focus:ring-sky-600 hover:text-green-800"
            >
              <span className="mr-2">Send Message</span>
              <Send className="w-5 h-5" />
            </button>
          </motion.div>
        </form>
        {successMessage && <p className="text-center text-green-800 mt-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;