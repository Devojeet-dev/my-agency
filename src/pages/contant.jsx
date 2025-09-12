import { useState } from "react";
import axios from "axios";
/* bhai time pass */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("https://my-agency-backend.onrender.com/api/mail/send", formData); //http://localhost:3000
      if (res.data.success) {
        setStatus("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", query: "" });
      } else {
        setStatus("❌ Failed to send. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error. Please try again.");
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
              focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
              focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Message / Query</label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
              focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="text-center mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}