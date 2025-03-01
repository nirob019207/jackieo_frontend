"use client";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can implement your form submission logic here
    console.log(formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Clear form fields
  };

  return (
    <div className="container mx-auto px-4 py-6 ">
      <BreadCrumb />
      <div className="flex justify-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          {isSubmitted ? (
          <div className="p-4 bg-green-100 text-green-800 rounded-md mb-4">
            Thank you for your message! We will get back to you shortly.
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-4 lg:w-[700px] w-full">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md"
              rows={4}
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 bg-primary text-white rounded-md hover:bg-red-900 focus:outline-none focus:ring-2 "
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
       
      </div>
    </div>
  );
};

export default ContactForm;
