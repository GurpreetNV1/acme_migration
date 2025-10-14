import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URI,
});

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const formatPhoneNumber = (code, number) => {
      if (!number) return "";
      const cleanNumber = number.replace(/\s+/g, "");
      return `${code} ${cleanNumber}`;
    };

    const handleFormSubmit = async (e) => {
      e.preventDefault();

      if (!name.trim() || !email.trim() || !phone.trim() || !service.trim()) {
        toast.error("Please fill in all required fields.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address.");
        return;
      }

      const phoneRegex = /^[0-9]{7,15}$/;
      if (!phoneRegex.test(phone.replace(/\s+/g, ""))) {
        toast.error("Please enter a valid phone number.");
        return;
      }

      const formattedPhone = formatPhoneNumber(countryCode, phone);

      try {
        setLoading(true);
        const res = await api.post("/send-email", {
          name,
          email,
          phone: formattedPhone,
          service,
          message,
        });

        console.log(res.data);
        toast.success("Message sent successfully!");

        setName("");
        setEmail("");
        setPhone("");
        setCountryCode("+91");
        setService("");
        setMessage("");
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong! Please try again.");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />

        {/* Heading for Mobile */}
        <div className="block lg:hidden">
          <h2 className="text-3xl sm:text-5xl text-center font-semibold text-gray-800">
            Get In Touch
          </h2>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-10">
          {/* Left Section */}
          <div className="lg:w-1/2 sm:mx-auto space-y-8">
            <div className="hidden lg:block">
              <h2 className="text-3xl sm:text-5xl font-semibold text-gray-800">
                Get In Touch
              </h2>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-10">
                <div className="flex items-center gap-3">
                  <div className="bg-primary p-3 rounded-2xl">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-500">+61 3 5678 1234</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary p-3 rounded-2xl">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-500">mail@acme.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="flex items-center gap-3">
                  <div className="bg-primary p-3 rounded-2xl">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-500">London E9, London</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary p-3 rounded-2xl">
                    <Instagram className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Instagram</p>
                    <p className="text-gray-500">@acmeconsultants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="lg:w-1/2 p-6 text-[14px] rounded-md shadow-md border border-gray-100">
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 outline-none rounded-sm border border-gray-300 w-full"
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="p-3 outline-none rounded-sm border border-gray-300 w-full"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Phone Input with Country Code */}
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="appearance-none outline-none p-3 rounded-sm border border-gray-300 w-24 min-w-fit text-gray-700 pr-2"
                  >
                    <option value="+91">+91 IN</option>
                    <option value="+61">+61 AU</option>
                    <option value="+44">+44 UK</option>
                    <option value="+1">+1 US</option>
                    <option value="+1">+1 CA</option>
                  </select>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, ""))
                    }
                    className="p-3 outline-none rounded-sm border border-gray-300 w-full"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="relative w-full">
                  <select
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
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
                    <option value="health insurance">Health Insurance</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    ▼
                  </span>
                </div>
              </div>

              <textarea
                name="message"
                placeholder="Message (optional)"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 outline-none resize-none rounded-sm border border-gray-300 w-full"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading ? "bg-primary-loading" : "bg-primary"
                } text-white py-2 px-6 cursor-pointer rounded-sm hover:bg-primary-hover transition`}
              >
                {loading ? "Sending.." : "Submit"}
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        
      </div>
    );
  };

export default ContactForm;
