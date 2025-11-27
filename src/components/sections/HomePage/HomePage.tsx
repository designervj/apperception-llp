"use client";

import React, { useState } from "react";
import {
  FaCheckCircle,
  FaChevronDown,
  FaStar,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaIndustry,
  FaShoppingCart,
  FaUniversity,
  FaHeartbeat,
  FaTruck,
  FaHotel,
  FaHardHat,
  FaGraduationCap,
  FaBroadcastTower,
  FaCompass,
  FaLaptopCode,
  FaPlug,
  FaCloud,
  FaChartBar,
  FaLifeRing,
  FaLightbulb,
  FaCode,
  FaSyncAlt,
  FaHeadset,
  FaCalendarAlt,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";
import WhyApperception from "./WhyApperception";

const HomePage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const scrollToContact = () => {
    if (typeof document === "undefined") return;
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    if (typeof document === "undefined") return;
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: connect to backend
    alert("Form submitted! (Connect this to your backend)");
  };

  const openPlatformModal = (platformKey: string) => {
    // TODO: Replace with your actual modal logic
    console.log("Open platform modal:", platformKey);
  };

  const faqItems = [
    {
      question: "What ERP platforms do you specialize in?",
      answer:
        "We specialize in Oracle ERP Cloud, Oracle NetSuite, PeopleSoft, SAP Business One, and Odoo. Our certified experts have extensive experience implementing and customizing these platforms for businesses across UAE and the GCC region.",
    },
    {
      question: "How long does a typical ERP implementation take?",
      answer:
        "Implementation timelines vary based on business size, complexity, and customization requirements. Typically, small to mid-sized implementations take 3–6 months, while larger enterprise deployments may take 9–18 months. We follow agile methodologies to ensure faster time-to-value.",
    },
    {
      question: "Are your solutions VAT-compliant for UAE businesses?",
      answer:
        "Yes, absolutely. All our ERP implementations are fully VAT-compliant and aligned with UAE FTA regulations. We ensure automated VAT return generation, multi-tax support, and compliance reporting as standard features in all our solutions.",
    },
    {
      question: "Do you provide post-implementation support?",
      answer:
        "Yes, we offer comprehensive 24/7 post-implementation support including system monitoring, optimization, troubleshooting, and ongoing training. Our support packages are flexible and can be customized based on your specific needs.",
    },
    {
      question: "Can you migrate our data from legacy systems?",
      answer:
        "Yes, we have extensive experience in legacy system migration. We use proven methodologies to ensure 100% data integrity, zero data loss, and minimal business disruption during the migration process. Our team handles data cleansing, transformation, and validation as part of the migration.",
    },
    {
      question: "What is the ROI of implementing an ERP system?",
      answer:
        "Our clients typically see ROI within 12–24 months through reduced operational costs, improved efficiency, better inventory management, and enhanced decision-making capabilities. We conduct a detailed cost-benefit analysis during our initial assessment to project ROI specific to your business.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="bg-[#156082] pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="container-xl  mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Business with{" "}
                <span className="text-yellow-300">Cloud ERP Solutions</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Expert ERP strategy, implementation, and modernization services
                for Oracle, NetSuite, SAP, and Odoo platforms across UAE and
                beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToContact}
                  className="bg-white text-[#156082] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get Free Assessment
                </button>
                <button
                  onClick={scrollToServices}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#156082] transition">
                  Our Services
                </button>
              </div>
              <div className="mt-12 flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-yellow-300" />
                  <span>VAT-Compliant Solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-yellow-300" />
                  <span>Multi-Currency Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-yellow-300" />
                  <span>AI-Powered Analytics</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block float-animation">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl">
                    <div className="text-4xl font-bold text-white mb-2">
                      500+
                    </div>
                    <div className="text-gray-200">Projects Delivered</div>
                  </div>
                  <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl">
                    <div className="text-4xl font-bold text-white mb-2">
                      98%
                    </div>
                    <div className="text-gray-200">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl">
                    <div className="text-4xl font-bold text-white mb-2">
                      15+
                    </div>
                    <div className="text-gray-200">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl">
                    <div className="text-4xl font-bold text-white mb-2">
                      50+
                    </div>
                    <div className="text-gray-200">Expert Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-12 bg-white border-b">
        <div className="container-xl  mx-auto px-4">
          <h3 className="text-center text-gray-600 mb-8 font-semibold">
            Trusted Technology Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
              alt="Oracle"
              className="h-8 tech-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/320px-Amazon_Web_Services_Logo.svg.png"
              alt="NetSuite"
              className="h-8 tech-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
              alt="SAP"
              className="h-8 tech-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Odoo_Official_Logo.png"
              alt="Odoo"
              className="h-8 tech-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
              alt="Python"
              className="h-8 tech-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML5"
              className="h-8 tech-logo"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container-xl  mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold  section-title  gradient-text">
              About Apperception LLC
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Leading ERP consulting firm delivering transformational cloud
              solutions with a focus on ROI and cost optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Our Vision &amp; Mission
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Apperception LLC, we envision a world where businesses
                harness the full potential of cloud ERP systems to drive
                innovation, efficiency, and sustainable growth. Our mission is
                to empower organizations across the UAE and globally with
                cutting-edge ERP solutions that are tailored to their unique
                needs.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 15 years of expertise in Oracle ERP Cloud, NetSuite,
                PeopleSoft, SAP, and Odoo implementations, we specialize in
                delivering end-to-end ERP services—from strategic advisory and
                risk mitigation to seamless implementation, integration, and
                ongoing support.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <FaAwardIcon />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Certified Experts
                    </h4>
                    <p className="text-sm text-gray-600">
                      Oracle, SAP, NetSuite certified professionals
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaHandshakeIcon />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Client-Centric
                    </h4>
                    <p className="text-sm text-gray-600">
                      Tailored solutions for every business
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaChartLineIcon />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      ROI Focused
                    </h4>
                    <p className="text-sm text-gray-600">
                      Proven cost optimization strategies
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaGlobeIcon />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Global Reach
                    </h4>
                    <p className="text-sm text-gray-600">
                      Serving UAE, KSA, and GCC markets
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="gradient-bg text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaLightbulb />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Strategic Advisory
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive IT &amp; ERP landscape assessment with risk
                      identification and vendor evaluation
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="gradient-bg text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCode />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Custom Development
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Bespoke ERP modules tailored to your industry-specific
                      requirements and workflows
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="gradient-bg text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaSyncAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Seamless Migration
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Legacy to cloud ERP migration with zero downtime and
                      complete data integrity
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="gradient-bg text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaHeadset />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      24/7 Support
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Round-the-clock post-deployment support and optimization
                      services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container-xl  mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text section-title">
              Our Services
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Comprehensive ERP solutions designed to drive digital
              transformation and business excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-8 card-hover border border-purple-100">
              <div className="gradient-bg text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <FaCompass className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                ERP Strategy &amp; Advisory
              </h3>
              <p className="text-gray-600 mb-6">
                Strategic planning and consulting to align ERP systems with your
                business goals
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>IT &amp; ERP Landscape Assessment</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Risk Identification &amp; Mitigation</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Vendor &amp; Technology Evaluation</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Cost Optimization Strategies</span>
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 card-hover border border-blue-100">
              <div className="gradient-bg text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <FaLaptopCode className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                ERP Implementation
              </h3>
              <p className="text-gray-600 mb-6">
                End-to-end implementation services for leading ERP platforms
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Oracle ERP Implementation &amp; Support</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>NetSuite Deployment Services</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Custom ERP Module Development</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Agile Implementation Methodology</span>
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-8 card-hover border border-green-100">
              <div className="gradient-bg text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <FaPlug className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Integration &amp; Modernization
              </h3>
              <p className="text-gray-600 mb-6">
                Seamless integration and transformation of legacy systems
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>ERP-to-ERP Integration</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Legacy to Oracle ERP Migration</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>IT Transformation Services</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>API Development &amp; Integration</span>
                </li>
              </ul>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow-lg p-8 card-hover border border-yellow-100">
              <div className="gradient-bg text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <FaCloud className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Cloud ERP Services
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive cloud migration and management solutions
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Cloud Readiness Assessment</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Migration to Oracle Cloud</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Multi-Cloud Architecture</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Cloud Security &amp; Compliance</span>
                </li>
              </ul>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-lg p-8 card-hover border border-red-100">
              <div className="gradient-bg text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <FaChartBar className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Analytics &amp; BI
              </h3>
              <p className="text-gray-600 mb-6">
                AI-powered dashboards and real-time business intelligence
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>AI-Driven ERP Dashboards</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Real-Time Analytics Solutions</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Custom Reporting &amp; KPI Tracking</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Predictive Analytics Implementation</span>
                </li>
              </ul>
            </div>

            {/* Service Card 6 */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-lg p-8 card-hover border border-indigo-100">
              <div className="gradient-bg text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <FaLifeRing className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Support &amp; Training
              </h3>
              <p className="text-gray-600 mb-6">
                Ongoing support and comprehensive training programs
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>24/7 Technical Support</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Post-Deployment Optimization</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>User Training &amp; Workshops</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>System Health Monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Platforms Section */}
      <section
        id="platforms"
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-xl  mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text section-title">
              ERP Platforms We Master
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Expert implementation and support for industry-leading ERP
              platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Oracle ERP Cloud */}
            <div className="bg-white rounded-xl shadow-xl p-8 card-hover text-center">
              <div className="mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
                  alt="Oracle"
                  className="h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Oracle ERP Cloud
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Complete cloud suite for finance, supply chain, and enterprise
                performance management
              </p>
              <button
                onClick={() => openPlatformModal("oracle")}
                className="text-primary font-semibold hover:underline">
                Learn More <span className="ml-2">&rarr;</span>
              </button>
            </div>

            {/* NetSuite */}
            <div className="bg-white rounded-xl shadow-xl p-8 card-hover text-center">
              <div className="mb-6 flex items-center justify-center">
                <div className="text-4xl font-bold text-red-600">NetSuite</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Oracle NetSuite
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Unified business management suite for growing companies and
                enterprises
              </p>
              <button
                onClick={() => openPlatformModal("netsuite")}
                className="text-primary font-semibold hover:underline">
                Learn More <span className="ml-2">&rarr;</span>
              </button>
            </div>

            {/* PeopleSoft */}
            <div className="bg-white rounded-xl shadow-xl p-8 card-hover text-center">
              <div className="mb-6">
                <div className="text-4xl font-bold gradient-text">
                  PeopleSoft
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                PeopleSoft
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Comprehensive HCM and financial management solutions for large
                enterprises
              </p>
              <button
                onClick={() => openPlatformModal("peoplesoft")}
                className="text-primary font-semibold hover:underline">
                Learn More <span className="ml-2">&rarr;</span>
              </button>
            </div>

            {/* Odoo */}
            <div className="bg-white rounded-xl shadow-xl p-8 card-hover text-center">
              <div className="mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Odoo_Official_Logo.png"
                  alt="Odoo"
                  className="h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Odoo</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Open-source ERP platform with modular applications for SMEs and
                startups
              </p>
              <button
                onClick={() => openPlatformModal("odoo")}
                className="text-primary font-semibold hover:underline">
                Learn More <span className="ml-2">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Platform Comparison */}
          <div className="mt-16 bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Platform Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="gradient-bg text-white">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Oracle ERP</th>
                    <th className="p-4 text-center">NetSuite</th>
                    <th className="p-4 text-center">SAP</th>
                    <th className="p-4 text-center">Odoo</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Cloud-Native</td>
                    <td className="p-4 text-center">
                      <FaCheckCircle className="text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <FaCheckCircle className="text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <FaCheckCircle className="text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <FaCheckCircle className="text-green-500 inline" />
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Best For</td>
                    <td className="p-4 text-center text-sm">
                      Large Enterprise
                    </td>
                    <td className="p-4 text-center text-sm">Mid-Market</td>
                    <td className="p-4 text-center text-sm">Enterprise</td>
                    <td className="p-4 text-center text-sm">SME/Startups</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Customization</td>
                    <td className="p-4 text-center">High</td>
                    <td className="p-4 text-center">Medium</td>
                    <td className="p-4 text-center">High</td>
                    <td className="p-4 text-center">Very High</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">VAT Compliance</td>
                    <td className="p-4 text-center">
                      <FaCheckCircle className="text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <FaCheckCircle className="text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <FaCheckCircle className="text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <FaCheckCircle className="text-green-500 inline" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Multi-Currency</td>
                    <td className="p-4 text-center">
                      <FaCheckCircle className="text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <FaCheckCircle className="text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <FaCheckCircle className="text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">
                      <FaCheckCircle className="text-green-500 inline" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4 bg-white">
        <div className="container-xl  mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text section-title">
              Industries We Serve
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Specialized ERP solutions tailored to industry-specific
              requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Manufacturing */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border border-blue-100 card-hover">
              <div className="text-primary text-4xl mb-4">
                <FaIndustry />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Manufacturing
              </h3>
              <p className="text-gray-600 mb-4">
                Production planning, inventory management, and supply chain
                optimization
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> MRP &amp; Shop
                  Floor Control
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Quality
                  Management
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Asset Tracking
                </li>
              </ul>
            </div>

            {/* Retail & Trading */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-8 border border-green-100 card-hover">
              <div className="text-primary text-4xl mb-4">
                <FaShoppingCart />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Retail &amp; Trading
              </h3>
              <p className="text-gray-600 mb-4">
                POS integration, inventory, and multi-channel retail management
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> POS &amp;
                  E-commerce Integration
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Barcode &amp;
                  RFID Systems
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Customer
                  Loyalty Programs
                </li>
              </ul>
            </div>

            {/* Finance & Banking */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow-lg p-8 border border-yellow-100 card-hover">
              <div className="text-primary text-4xl mb-4">
                <FaUniversity />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Finance &amp; Banking
              </h3>
              <p className="text-gray-600 mb-4">
                Core banking systems, risk management, and regulatory compliance
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Financial
                  Reporting
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Risk
                  Assessment Tools
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Compliance
                  Management
                </li>
              </ul>
            </div>

            {/* Healthcare */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-lg p-8 border border-red-100 card-hover">
              <div className="text-primary text-4xl mb-4">
                <FaHeartbeat />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Healthcare
              </h3>
              <p className="text-gray-600 mb-4">
                Patient management, billing, and healthcare information systems
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> EMR/EHR
                  Integration
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Appointment
                  Scheduling
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Medical
                  Inventory
                </li>
              </ul>
            </div>

            {/* Logistics & Supply Chain */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-8 border border-purple-100 card-hover">
              <div className="text-primary text-4xl mb-4">
                <FaTruck />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Logistics &amp; Supply Chain
              </h3>
              <p className="text-gray-600 mb-4">
                Warehouse management, transportation, and real-time tracking
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Fleet
                  Management
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Route
                  Optimization
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Real-time
                  Shipment Tracking
                </li>
              </ul>
            </div>

            {/* Hospitality */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-lg p-8 border border-pink-100 card-hover">
              <div className="text-primary text-4xl mb-4">
                <FaHotel />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Hospitality
              </h3>
              <p className="text-gray-600 mb-4">
                Property management, bookings, and guest experience optimization
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> PMS
                  Integration
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Channel
                  Management
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Multi-Property
                  Support
                </li>
              </ul>
            </div>

            {/* Construction */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg p-8 border border-orange-100 card-hover">
              <div className="text-primary text-4xl mb-4">
                <FaHardHat />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Construction
              </h3>
              <p className="text-gray-600 mb-4">
                Project tracking, BOQ management, and site reporting
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Project
                  Management
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> BOQ &amp;
                  Estimation
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Site Progress
                  Tracking
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-lg p-8 border border-indigo-100 card-hover">
              <div className="text-primary text-4xl mb-4">
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Education
              </h3>
              <p className="text-gray-600 mb-4">
                Student information systems and campus management
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Student
                  Management
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> LMS
                  Integration
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Fee Management
                </li>
              </ul>
            </div>

            {/* Telecom */}
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-lg p-8 border border-teal-100 card-hover">
              <div className="text-primary text-4xl mb-4">
                <FaBroadcastTower />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Telecom</h3>
              <p className="text-gray-600 mb-4">
                Billing systems, network management, and customer care
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Billing &amp;
                  Revenue Management
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Network
                  Operations
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" /> Customer
                  Portal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <WhyApperception/>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container-xl  mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text section-title">
              Client Success Stories
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Hear from businesses we've helped transform with our ERP solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Apperception LLC transformed our legacy systems into a modern
                cloud ERP solution. The migration was seamless with zero
                downtime. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#156082] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  AS
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Ahmed Salim</h4>
                  <p className="text-sm text-gray-600">
                    CFO, Dubai Retail Group
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Their Oracle implementation expertise is outstanding. VAT
                compliance was handled perfectly, and the training provided was
                comprehensive."
              </p>
              <div className="flex items-center ">
                <div className="w-12 h-12 bg-[#156082] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MK
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Maria Khalid</h4>
                  <p className="text-sm text-gray-600">
                    Operations Director, Abu Dhabi
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The NetSuite customization for our hospitality business
                exceeded expectations. Real-time analytics have been a
                game-changer for decision-making."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#156082] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  RH
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Rashid Hassan</h4>
                  <p className="text-sm text-gray-600">
                    CEO, Emirates Hospitality Group
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container-xl  mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text section-title">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Common questions about our ERP services and solutions
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#E7EAED] rounded-md overflow-hidden">
                <button
                  onClick={() =>
                    setActiveFaq((prev) => (prev === index ? null : index))
                  }
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-[#E7EAED] transition">
                  <span className="font-semibold text-[]">
                    {item.question}
                  </span>
                  <FaChevronDown
                    className={`transition-transform ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container-xl  mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text section-title">
              Get In Touch
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Ready to transform your business with ERP? Contact us for a free
              consultation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h3>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Service Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition">
                    <option>Select a service</option>
                    <option>ERP Strategy &amp; Advisory</option>
                    <option>ERP Implementation</option>
                    <option>Integration &amp; Modernization</option>
                    <option>Cloud ERP Services</option>
                    <option>Analytics &amp; BI</option>
                    <option>Support &amp; Training</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                    placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #0A0D2C 0%, #072147 50%, #0E2043 100%)",
                  }}>
                  <span>Send Message</span>
                  <FaPaperPlane />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-xl shadow-xl p-8 mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="gradient-bg text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Office Address
                      </h4>
                      <p className="text-gray-600">
                        Dubai, United Arab Emirates
                      </p>
                      <p className="text-gray-600">
                        Abu Dhabi, United Arab Emirates
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="gradient-bg text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600">info@apperceptionllc.com</p>
                      <p className="text-gray-600">sales@apperceptionllc.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="gradient-bg text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaPhone />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-600">+971 XX XXX XXXX</p>
                      <p className="text-gray-600">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="gradient-bg text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaClock />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Business Hours
                      </h4>
                      <p className="text-gray-600">
                        Sunday - Thursday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600">Friday - Saturday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div
                className="gradient-bg rounded-xl shadow-xl p-8 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #0A0D2C 0%, #072147 50%, #0E2043 100%)",
                }}>
                <h3 className="text-2xl font-bold mb-4">
                  Get Free ERP Assessment
                </h3>
                <p className="mb-6">
                  Schedule a free consultation with our ERP experts to assess
                  your current systems and identify optimization opportunities.
                </p>
                <button
                  onClick={scrollToContact}
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-full flex items-center justify-center gap-2">
                  <span className="text-black">Book Consultation</span>
                  <FaCalendarAlt />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/** Small helper icon components for About section (to avoid importing more from react-icons) */
const FaAwardIcon: React.FC = () => (
  <div className="text-primary text-2xl mt-1">
    {/* Use any react-icon you like here; reusing FaCheckCircle as placeholder */}
    <FaCheckCircle className="text-[#156082]"/>
  </div>
);

const FaHandshakeIcon: React.FC = () => (
  <div className="text-primary text-2xl mt-1">
    <FaCheckCircle className="text-[#156082]"/>
  </div>
);

const FaChartLineIcon: React.FC = () => (
  <div className="text-primary text-2xl mt-1">
    <FaCheckCircle className="text-[#156082]"/>
  </div>
);

const FaGlobeIcon: React.FC = () => (
  <div className="text-primary text-2xl mt-1">
    <FaCheckCircle className="text-[#156082]"/>
  </div>
);

export default HomePage;
