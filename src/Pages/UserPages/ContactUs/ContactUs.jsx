import React from "react";
import { Input, Textarea, Button } from "@heroui/react"; // مكتبة HeroUI لعناصر الإدخال
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // أيقونات FontAwesome

export default function ContactUs() {
  return (
    <div className="container mx-auto my-20 px-5 lg:px-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#071952]">📩 Contact Us</h2>
        <p className="text-lg text-gray-600 mt-3">
          Have questions? Feel free to reach out to us!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row mt-16 gap-12">
        <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-[#071952]">Get in Touch</h3>
          <p className="text-gray-600 mt-2">Reach us through any of the channels below:</p>

          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-4">
              <FaPhone className="text-[#088395] text-2xl" />
              <p className="text-lg font-semibold">+1 (234) 567-890</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#088395] text-2xl" />
              <p className="text-lg font-semibold">contact@travilla.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#088395] text-2xl" />
              <p className="text-lg font-semibold">123 Travilla Street, NY, USA</p>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-[#071952]">Send Us a Message</h3>

          <form className="mt-6 space-y-6">
            <div>
              <label className="text-lg font-semibold text-gray-700">Full Name</label>
              <Input type="text" placeholder="Enter your name" className="mt-2 w-full" />
            </div>

            <div>
              <label className="text-lg font-semibold text-gray-700">Email Address</label>
              <Input type="email" placeholder="Enter your email" className="mt-2 w-full" />
            </div>

            <div>
              <label className="text-lg font-semibold text-gray-700">Message</label>
              <Textarea rows={5} placeholder="Write your message..." className="mt-2 w-full" />
            </div>

            <Button className="w-full bg-[#071952] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#088395] transition">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
