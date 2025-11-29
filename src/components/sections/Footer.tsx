"use client";
import React, { useState } from "react";
import { Globe, Mail, MapPin, Menu, PhoneCall, X } from "lucide-react";
import footerLogo from "../../../public/assets/Image/logo-footer.svg";
import appStore from "../../../public/assets/Image/appStore.png";
import googlePlay from "../../../public/assets/Image/googlePlay.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaHeadset,
} from "react-icons/fa";

/* ---------------- FOOTER ---------------- */
const Footer = () => {
  return (
<footer
  className="text-white py-12 px-4"
  style={{
    background:
      "linear-gradient(135deg, #0A0D2C 0%, #072147 50%, #0E2043 100%)"
  }}
>
        <div className="container-xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                    <img src="./assets/Image/Apperception_Logo 1.svg" alt="Apperception LLC" className=" mb-4 w-60"/>
                    <p className="text-gray-200 text-sm mb-4">
                        Leading ERP consulting firm specializing in Oracle, NetSuite, SAP, and Odoo implementations across UAE and beyond.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-200 hover:text-primary transition"><i className="fab fa-linkedin text-xl"></i></a>
                        <a href="#" className="text-gray-200 hover:text-primary transition"><i className="fab fa-twitter text-xl"></i></a>
                        <a href="#" className="text-gray-200 hover:text-primary transition"><i className="fab fa-facebook text-xl"></i></a>
                        <a href="#" className="text-gray-200 hover:text-primary transition"><i className="fab fa-instagram text-xl"></i></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li><a href="#services" className="hover:text-primary transition">ERP Strategy &amp; Advisory</a></li>
                        <li><a href="#services" className="hover:text-primary transition">ERP Implementation</a></li>
                        <li><a href="#services" className="hover:text-primary transition">Integration &amp; Modernization</a></li>
                        <li><a href="#services" className="hover:text-primary transition">Cloud ERP Services</a></li>
                        <li><a href="#services" className="hover:text-primary transition">Analytics &amp; BI</a></li>
                        <li><a href="#services" className="hover:text-primary transition">Support &amp; Training</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4">ERP Platforms</h4>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li><a href="#platforms" className="hover:text-primary transition">Oracle ERP Cloud</a></li>
                        <li><a href="#platforms" className="hover:text-primary transition">Oracle NetSuite</a></li>
                        <li><a href="#platforms" className="hover:text-primary transition">PeopleSoft</a></li>
                        <li><a href="#platforms" className="hover:text-primary transition">Odoo</a></li>
                        <li><a href="#platforms" className="hover:text-primary transition">SAP Business One</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
                        <li><a href="#industries" className="hover:text-primary transition">Industries</a></li>
                        <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
                        <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-primary transition">Careers</a></li>
                    </ul>
                </div>
            </div>
        
        <div className="flex justify-between">
            <div className="border-t border-gray-800 pt-8 text-center text-gray-200 text-sm">
                <p>&copy; 2024 Apperception LLC. All rights reserved. | Designed with excellence for UAE businesses</p>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-200 text-sm">
                <p><a href="/policy">Policy</a></p>
            </div>

            </div>
        </div>
    </footer>
  );
};

/* ---------------- LAYOUT WRAPPER ---------------- */
export default function MainLayout(
  {
    //   children,
    // }: {
    //   //children: React.ReactNode;
    //
  }
) {
  return (
    <div className="flex flex-col bg-white text-gray-900">
      <Footer />
    </div>
  );
}
