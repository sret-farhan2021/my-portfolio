// src/pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission
    console.log(form);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Name</span>
              <input 
                type="text" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" 
                required 
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Email</span>
              <input 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" 
                required 
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Message</span>
              <textarea 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" 
                required
              ></textarea>
            </label>
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1v10H3V10zM5 6h1v14H5V6zM7 4h1v16H7V4zM9 2h1v20H9V2zM11 0h1v22h-1V0zM13 2h1v20h-1V2zM15 4h1v16h-1V4zM17 6h1v14h-1V6zM19 10h1v10h-1V10z" />
              </svg>
              <span>Phone: (+91) 8122879828</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 3v12a4 4 0 01-4 4H5a4 4 0 01-4-4V3h18z" />
              </svg>
              <span>Email: farhanisawesome02@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7M9 11l3 3 3-3M5 6l7 7 7-7M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
              <span>
                LinkedIn:   
                <a 
                  href="https://www.linkedin.com/in/mohammed-farhan-k-849a17264/" 
                  className="text-blue-500 hover:underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  My profile
                </a>
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1.5a4.5 4.5 0 11-3 0V3H3v14h1.5v-6h1.5v6H9v-6a3.5 3.5 0 113 0v6h3.5v-6H21V3h-7.5z" />
              </svg>
              <span>
                GitHub:   
                <a 
                  href="https://github.com/sret-farhan2021" 
                  className="text-blue-500 hover:underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  My profile
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
