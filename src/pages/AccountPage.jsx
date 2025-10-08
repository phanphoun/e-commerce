// src/pages/ContactPage.tsx   (or ContactPage.jsx if you’re not using TypeScript)
import { useState } from "react";

const ContactPage = () => {
  // Simple client‑side state – replace with your own logic / validation as needed
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 👉 Here you could call an API, send to Netlify Forms, EmailJS, etc.
    console.log("Submitted contact form:", form);
    alert("Thanks! Your message has been sent.");

    // Reset form (optional)
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* === LEFT – Contact Form === */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* === RIGHT – Contact Details / Map === */}
        <div className="flex flex-col space-y-8">
          {/* Contact Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-indigo-600 hover:underline">+1 (234) 567‑890</a>
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> <a href="mailto:support@example.com" className="text-indigo-600 hover:underline">support@example.com</a>
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> 123 Main St, Suite 400, Anytown, CA 90210
            </p>
          </div>

          {/* Embedded Google Map (optional) */}
          <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Company location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.0138350429584!2d104.88050867452681!3d11.550865044433003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951add5e2cd81%3A0x171e0b69c7c6f7ba!2sPasserelles%20num%C3%A9riques%20Cambodia%20(PNC)!5e0!3m2!1sen!2skh!4v1759844667191!5m2!1sen!2skh"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
