import React from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      {/* Top Section */}
      <div className="block lg:hidden">
        <h2 className="text-3xl sm:text-5xl text-center font-semibold text-gray-800">
          Get In Touch
        </h2>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-10">
        {/* Left Side */}

        <div className=" lg:w-1/2 sm:mx-auto space-y-8">
          <div className="hidden lg:block">
            <h2 className="text-3xl sm:text-5xl font-semibold text-gray-800">
              Get In Touch
            </h2>
          </div>
          {/* Contact Info in Two Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Left Column (Phone, Email) */}
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-3 rounded-2xl">
                  <Phone className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-500">+61 3 5678 1234</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary p-3 rounded-2xl">
                  <Mail className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-500">mail@acme.com</p>
                </div>
              </div>
            </div>

            {/* Right Column (Address, Instagram) */}
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-3 rounded-2xl">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-gray-500">London E9, London</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary p-3 rounded-2xl">
                  <Instagram className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Instagram</p>
                  <p className="text-gray-500">@acmeconsultants</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="lg:w-1/2 p-6 text-[14px] rounded-md shadow-md border border-gray-100">
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-3 outline-none rounded-sm border border-gray-300 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 outline-none rounded-sm border border-gray-300 w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="p-3 outline-none rounded-sm border border-gray-300 w-full"
              />
              <div className="relative w-full">
                <select
                  name="service"
                  className="appearance-none outline-none p-3 rounded-sm border border-gray-300 w-full text-gray-600 pr-8"
                >
                  <option value="">Service</option>
                  <option value="admission">Admission</option>
                  <option value="student/temporary visa">
                    Student/Temporary Visa
                  </option>
                  <option value="pr visa">PR Visa</option>
                  <option value="appeal/at">Appeal/AT</option>
                  <option value="professional year">Professional Year</option>
                  <option value="health insaurance">Health Insurance</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  ▼
                </span>
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="p-3 outline-none resize-none rounded-sm border border-gray-300 w-full"
            ></textarea>

            <button
              type="submit"
              className="bg-primary text-white py-2 px-6 cursor-pointer rounded-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.4295098523394!2d145.213277!3d-37.990441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad615b2af26540f%3A0x5b430ff376d9fcd1!2sACME%20Consultants%20for%20Migration%20%26%20Education!5e0!3m2!1sen!2sin!4v1760413555820!5m2!1sen!2sin"
          className="w-full h-[450px] rounded-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ACME Consultants Location"
        ></iframe>
      </div>

      {/* Locations Grid */}
      <div>{/* Locations */}</div>
    </div>
  );
};

export default Contact;
