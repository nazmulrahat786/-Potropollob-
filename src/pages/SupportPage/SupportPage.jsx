import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const faqs = [
  {
    question: "How do I add a new plant to my tracker?",
    answer:
      "To add a new plant, go to the dashboard and click the 'Add Plant' button. Fill in the details and save.",
  },
  {
    question: "Can I set reminders for watering my plants?",
    answer:
      "Yes! You can set custom reminders for watering and care tasks directly from your plant’s profile.",
  },
  {
    question: "Is my data safe and private?",
    answer:
      "Absolutely! We use secure authentication and encryption to keep your data safe and private.",
  },
];

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [faqOpen, setFaqOpen] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully! 🎉");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
   <div>
    <Navbar></Navbar>
     <section className="bg-gray-50 min-h-screen py-20 px-6 text-gray-800 relative">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-green-700 mb-2">
            Support
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Need help? Contact us or check out the FAQ below.
          </p>
        </header>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center gap-10 text-center md:text-left">
          <div className="flex items-center gap-4">
            <HiOutlineMail className="text-green-600 w-8 h-8" />
            <div>
              <p className="font-semibold">Email Us</p>
              <a
                href="mailto:support@potropollob.com"
                className="text-green-700 hover:underline"
              >
                support@potropollob.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <HiOutlinePhone className="text-green-600 w-8 h-8" />
            <div>
              <p className="font-semibold">Call Us</p>
              <a
                href="tel:+1234567890"
                className="text-green-700 hover:underline"
              >
                +1 234 567 890
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Send Us a Message
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
          ></textarea>

          <button type="submit" className="btn btn-success btn-block">
            Submit
          </button>
        </form>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-300 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full text-left px-6 py-4 bg-green-100 hover:bg-green-200 focus:outline-none flex justify-between items-center"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-xl font-bold select-none">
                    {faqOpen === idx ? "-" : "+"}
                  </span>
                </button>
                {faqOpen === idx && (
                  <p className="px-6 py-4 bg-white text-gray-700">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
    <Footer></Footer>
   </div>
  );
};

export default SupportPage;
