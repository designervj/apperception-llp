"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

// Optional helper if you later want to generate slugs/links dynamically
const slugify = (text: string) => {
  if (typeof text !== "string") return "#";
  return (
    "/" +
    text
      .toLowerCase()
      .replace(/ & /g, "-and-")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const openPlatformModal = (platform: string) => {
    // TODO: replace with real modal logic
    console.log("Open platform modal:", platform);
  };

  return (
    <>
      <nav
        className=" top-0 z-[60] w-full shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, #0A0D2C 0%, #072147 50%, #0E2043 100%)",
        }}
      >
        <div className="container-xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="./assets/Image/Apperception_Logo 1.svg"
                alt="Apperception LLC"
                className="w-44"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden items-center space-x-1 lg:flex">
              <a
                href="/#home"
                className="nav-link rounded-lg px-4 py-2 font-medium text-gray-200 transition hover:bg-transparent hover:text-white"
              >
                Home
              </a>
              <a
                href="/#about"
                className="nav-link rounded-lg px-4 py-2 font-medium text-gray-200 transition hover:bg-transparent hover:text-white"
              >
                About us
              </a>

              {/* Services Dropdown */}
              <div className="group relative">
                <button className="nav-link flex items-center rounded-lg px-4 py-2 font-medium text-gray-200 transition hover:bg-transparent hover:text-white">
                  Services <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 mt-2 w-64 rounded-lg bg-white py-2 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <a
                    href="/#services"
                    className="block px-4 py-2 font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    ERP Strategy & Advisory
                  </a>
                  <a
                    href="/#services"
                    className="block px-4 py-2 font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    ERP Implementation
                  </a>
                  <a
                    href="/#services"
                    className="block px-4 py-2 font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    Integration & Modernization
                  </a>
                  <a
                    href="/#services"
                    className="block px-4 py-2 font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    Cloud ERP Services
                  </a>
                  <a
                    href="/#services"
                    className="block px-4 py-2 font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    Analytics & BI
                  </a>
                  <a
                    href="/#services"
                    className="block px-4 py-2 font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    Support & Training
                  </a>
                </div>
              </div>

              {/* ERP Platforms Dropdown */}
              <div className="group relative">
                <button className="nav-link flex items-center rounded-lg px-4 py-2 font-medium text-gray-200 transition hover:bg-transparent hover:text-white">
                  ERP Platforms <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 mt-2 w-56 rounded-lg bg-white py-2 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => openPlatformModal("oracle")}
                    className="block w-full px-4 py-2 text-left font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    Oracle ERP Cloud
                  </button>
                  <button
                    type="button"
                    onClick={() => openPlatformModal("netsuite")}
                    className="block w-full px-4 py-2 text-left font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    Oracle NetSuite
                  </button>
                  <button
                    type="button"
                    onClick={() => openPlatformModal("peoplesoft")}
                    className="block w-full px-4 py-2 text-left font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    PeopleSoft
                  </button>
                  <button
                    type="button"
                    onClick={() => openPlatformModal("odoo")}
                    className="block w-full px-4 py-2 text-left font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    Odoo
                  </button>
                </div>
              </div>

              {/* Platforms Dropdown */}
              <div className="group relative">
                <button className="nav-link flex items-center rounded-lg px-4 py-2 font-medium text-gray-200 transition hover:bg-transparent hover:text-white">
                  Platforms <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 mt-2 w-56 rounded-lg bg-white py-2 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <a
                    href="/#platforms"
                    className="block px-4 py-2 font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    All Platforms
                  </a>
                  <a
                    href="/#industries"
                    className="block px-4 py-2 font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    Manufacturing
                  </a>
                  <a
                    href="/#industries"
                    className="block px-4 py-2 font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    Retail &amp; Trading
                  </a>
                  <a
                    href="/#industries"
                    className="block px-4 py-2 font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    Finance &amp; Banking
                  </a>
                  <a
                    href="/#industries"
                    className="block px-4 py-2 font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    Healthcare
                  </a>
                  <a
                    href="/#industries"
                    className="block px-4 py-2 font-medium text-gray-700 transition hover:bg-transparent hover:text-[#156082]"
                  >
                    More Industries
                  </a>
                </div>
              </div>

              <a
                href="/contact"
                className="nav-link rounded-lg px-4 py-2 font-medium text-gray-200 transition hover:text-white"
              >
                Contact
              </a>

              <a
                href="/#contact"
                className="ml-4 rounded-lg bg-white px-6 py-2 font-semibold text-[#156082] transition hover:opacity-90"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="text-gray-200 lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay + Sidebar Menu */}
      {mobileOpen && (
        <>
          {/* Dark overlay */}
          <div
            className="fixed inset-0 z-[55] bg-black/50 lg:hidden"
            onClick={toggleMobileMenu}
          />

          {/* Sidebar */}
          <div className="fixed top-0 left-0 z-[70] h-full w-64 bg-[#05091F] text-white shadow-2xl lg:hidden">
            <div className="relative p-6">
              <button
                onClick={toggleMobileMenu}
                className="absolute right-6 top-6 text-white"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="mt-12 flex flex-col space-y-6">
                <a
                  href="/#home"
                  onClick={toggleMobileMenu}
                  className="font-medium text-white hover:text-gray-200"
                >
                  Home
                </a>
                <a
                  href="/#about"
                  onClick={toggleMobileMenu}
                  className="font-medium text-white hover:text-gray-200"
                >
                  About
                </a>
                <a
                  href="/#services"
                  onClick={toggleMobileMenu}
                  className="font-medium text-white hover:text-gray-200"
                >
                  Services
                </a>
                <a
                  href="/#platforms"
                  onClick={toggleMobileMenu}
                  className="font-medium text-white hover:text-gray-200"
                >
                  ERP Platforms
                </a>
                <a
                  href="/#industries"
                  onClick={toggleMobileMenu}
                  className="font-medium text-white hover:text-gray-200"
                >
                  Industries
                </a>
                <a
                  href="/#contact"
                  onClick={toggleMobileMenu}
                  className="font-medium text-white hover:text-gray-200"
                >
                  Contact
                </a>

                <a
                  href="/#contact"
                  onClick={toggleMobileMenu}
                  className="mt-4 rounded-lg bg-[#F9FAFB] px-6 py-2 text-center font-semibold text-[#156082] transition hover:opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
