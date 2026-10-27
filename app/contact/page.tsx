"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "This field is required.";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "This field is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "This field is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Form fields pass validation metrics safely
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-zinc-950 text-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-2xl p-8 shadow-2xl">
        
        {/* Header Heading Area */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Let's Connect
          </h1>
          <p className="text-zinc-500 text-sm max-w-xs mx-auto">
            Available for permanent corporate opportunities, direct technical contracts, and premium manual QA consultation.
          </p>
        </div>

        {submitted ? (
          /* Success Message Output State */
          <div data-testid="success-banner" className="bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl p-4 text-center text-sm font-medium animate-fadeIn">
            Thank you for reaching out! Your message was transmitted successfully.
          </div>
        ) : (
          /* Interactive Input Form Control Shell */
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            
            {/* Name input component container */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Full Name</label>
              <input
                id="name"
                type="text"
                data-testid="input-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full bg-zinc-950 border ${errors.name ? "border-red-500 focus:border-red-400" : "border-zinc-800 focus:border-blue-500"} rounded-lg px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors`}
                placeholder="John Doe"
              />
              {errors.name && <p data-testid="error-name" className="text-xs text-red-500 font-medium pt-0.5">{errors.name}</p>}
            </div>

            {/* Email input component container */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Email Address</label>
              <input
                id="email"
                type="email"
                data-testid="input-email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full bg-zinc-950 border ${errors.email ? "border-red-500 focus:border-red-400" : "border-zinc-800 focus:border-blue-500"} rounded-lg px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors`}
                placeholder="john.doe@example.com"
              />
              {errors.email && <p data-testid="error-email" className="text-xs text-red-500 font-medium pt-0.5">{errors.email}</p>}
            </div>

            {/* Message text area component container */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Project Context / Message</label>
              <textarea
                id="message"
                rows={4}
                data-testid="input-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full bg-zinc-950 border ${errors.message ? "border-red-500 focus:border-red-400" : "border-zinc-800 focus:border-blue-500"} rounded-lg px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors resize-none`}
                placeholder="Discussing an opportunity or custom QA requirement..."
              />
              {errors.message && <p data-testid="error-message" className="text-xs text-red-500 font-medium pt-0.5">{errors.message}</p>}
            </div>

            {/* Action submit button module */}
            <button
              type="submit"
              data-testid="submit-btn"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/10 text-sm tracking-wide transition-all transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
