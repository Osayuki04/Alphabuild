"use client"
import React from "react";

export default function ContactMap() {
  return (
    <div className="w-full h-87.5 md:h-112.5 mt-10 rounded-2xl overflow-hidden shadow-lg">
      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.690964624663!2d-0.119543684168839!3d51.50329797963447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cbf7e2e2e1%3A0x7e2e2e2e2e2e2e2e!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1640000000000!5m2!1sen!2suk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
