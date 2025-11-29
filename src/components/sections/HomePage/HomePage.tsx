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
  FaUniversity,
  FaGraduationCap,
  FaUsers,
  FaHandsHelping,
  FaLandmark,
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
  FaHeartbeat,
  FaIndustry,
} from "react-icons/fa";
import WhyApperception from "./WhyApperception";
import PlatformsSlider from "./PlatformsSlider";
import CTASection from "./CTASection";


// Hero / page component ke andar, return se just upar:
const integrationPlatforms = [
  {
    name: "Workday",
    logo: "./assets/Image/workday.png",
  },
  {
    name: "SAP SuccessFactors",
     logo: "./assets/Image/sap-success.png",
  },
  {
    name: "Salesforce",
      logo: "./assets/Image/Salesforce.com_logo.png",
  },
  {
    name: "Coupa",
      logo: "./assets/Image/coupa-logo.svg",
  },
  {
    name: "SAP Ariba",
     logo: "./assets/Image/SAP-Ariba-logo.svg",
  },
  {
    name: "Oracle EPM",
     logo: "./assets/Image/oracle.svg",
  },
  {
    name: "Microsoft Power BI",
     logo: "./assets/Image/Microsoft-Power-BI.svg",
  },
  {
    name: "Snowflake",
     logo: "./assets/Image/Snowflake-logo.svg",
  },
  {
    name: "Kyriba",
     logo: "./assets/Image/Kyriba-img.svg",
  },
  {
    name: "FIS Integrity",
     logo: "./assets/Image/FIS-Logo-Green-PNG.png",
  },
  {
    name: "and other industry-leading products",
     logo: "./assets/Image/workday.png",
  },
];


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
      question: "Which Oracle platforms do you specialize in?",
      answer:
        "We focus on Oracle Cloud Applications (Fusion) and Oracle PeopleSoft. Our team has deep experience across Finance, HCM, SCM and related modules, along with integrations to surrounding systems such as Workday, SuccessFactors, Salesforce and other leading platforms.",
    },
    {
      question: "How long does a typical ERP implementation take?",
      answer:
        "Implementation timelines vary based on business size, complexity, and customization requirements. Typically, small to mid-sized implementations take 3–6 months, while larger enterprise deployments may take 9–18 months. We follow agile methodologies to ensure faster time-to-value.",
    },
    {
      question: "Are your solutions VAT-compliant for UAE businesses?",
      answer:
        "Yes, absolutely. All our implementations are fully VAT-compliant and aligned with UAE FTA regulations. We ensure automated VAT return generation, multi-tax support, and compliance reporting as standard features in all our solutions.",
    },
    {
      question: "Do you provide post-implementation support?",
      answer:
        "Yes, we offer comprehensive 24/7 post-implementation support including system monitoring, optimization, troubleshooting, and ongoing training. Our support packages are flexible and can be customized based on your specific needs.",
    },
    {
      question: "Can you migrate our data from legacy systems?",
      answer:
        "Yes, we have extensive experience in legacy system migration. We use proven methodologies to ensure data integrity, minimal downtime, and smooth cutover. Our team handles data cleansing, transformation, and validation as part of the migration.",
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
        className="bg-gradient-to-br from-[#0A2540] via-[#156082] to-[#0E7490] pt-32 pb-20 px-4 min-h-screen flex items-center"
      >
        <div className="container-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Business with{" "}
                <span className="text-yellow-300">
                  Oracle Cloud & PeopleSoft
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Expert ERP strategy, implementation, and modernization services
                for Oracle Cloud Applications (Fusion) and Oracle PeopleSoft –
                tailored for the UAE and wider GCC region.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToContact}
                  className="bg-white text-[#156082] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Get Free Assessment
                </button>
                <button
                  onClick={scrollToServices}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#156082] transition"
                >
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
                  <span>Multi-Currency & Multi-Entity</span>
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
                    <div className="text-gray-200">Expert Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50"
      >
        <div className="container-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold section-title gradient-text">
              About Apperception LLC
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Leading Oracle consulting firm delivering transformational cloud
              solutions with a focus on ROI and cost optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Our Vision &amp; Mission
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Apperception LLC, we envision a world where businesses
                harness the full potential of Oracle Cloud Applications
                (Fusion) and Oracle PeopleSoft to drive innovation, efficiency
                and sustainable growth. Our mission is to empower organizations
                across the UAE and globally with solutions aligned to their
                regulatory, financial and operational needs.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 15 years of expertise in Oracle Cloud and PeopleSoft
                implementations, upgrades and support, we specialize in
                delivering end-to-end services—from strategic advisory and risk
                mitigation to seamless implementation, integration and ongoing
                managed services.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <FaAwardIcon />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Certified Experts
                    </h4>
                    <p className="text-sm text-gray-600">
                      Deep Oracle Fusion & PeopleSoft credentials
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
                      Tailored solutions for every organization
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
                      Regional &amp; Global Reach
                    </h4>
                    <p className="text-sm text-gray-600">
                      Serving UAE, KSA, and broader GCC markets
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
                      identification and platform recommendation focused on
                      Oracle Cloud &amp; PeopleSoft.
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
                      Bespoke extensions, integrations and reports tailored to
                      your industry-specific requirements and workflows.
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
                      Legacy to Oracle Cloud or PeopleSoft migration with
                      minimal downtime and strong data governance.
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
                      Round-the-clock post-deployment support, monitoring and
                      continuous optimization services.
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
        <div className="container-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text section-title">
              Our Services
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Comprehensive Oracle Cloud & PeopleSoft services designed to drive
              digital transformation and business excellence.
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
                Strategic planning and consulting to align Oracle platforms with
                your business goals.
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
                  <span>Platform Roadmap for Fusion &amp; PeopleSoft</span>
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
                Oracle Implementation
              </h3>
              <p className="text-gray-600 mb-6">
                End-to-end implementation services for Oracle Cloud Applications
                and PeopleSoft.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Oracle Cloud (Fusion) Implementation &amp; Support</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Oracle PeopleSoft Upgrades &amp; Rollouts</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Finance, HCM, SCM Module Enablement</span>
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
                Seamless integration and transformation of legacy systems.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>
                    Integration with Workday, SuccessFactors, Salesforce, Coupa
                    &amp; SAP Ariba
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>
                    Oracle EPM, Power BI, Snowflake, Kyriba, FIS Integrity and
                    other leading products
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Legacy to Oracle Cloud / PeopleSoft Migration</span>
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
                Comprehensive cloud migration and management solutions.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Cloud Readiness Assessment</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Migration to Oracle Cloud Infrastructure</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>High-Availability &amp; DR Architecture</span>
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
                AI-powered dashboards and real-time business intelligence.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>AI-Driven ERP Dashboards</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Real-Time Analytics &amp; Reporting</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-3" />
                  <span>Custom KPI &amp; Performance Tracking</span>
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
                Ongoing support and comprehensive training programs.
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

      {/* Oracle Platforms Focus Section */}
      <section
        id="platforms"
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text section-title">
              Oracle Platforms We Focus On
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Deep functional and technical expertise across Oracle Cloud
              Applications (Fusion) and Oracle PeopleSoft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Oracle Cloud Applications (Fusion) */}
            <div className="bg-white rounded-xl shadow-xl p-8 card-hover text-center">
              <div className="mb-6 flex items-center justify-center">
                <div className="w-56 h-16 rounded-full  flex items-center justify-center text-white text-3xl">
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle" className="h-16 mx-auto"/>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
              ERP Cloud
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Unified cloud suite for Finance, HCM, Procurement, Supply Chain
                and more – built for agility, scalability and compliance.
              </p>
              <button
                onClick={() => openPlatformModal("fusion")}
                className="text-primary font-semibold hover:underline"
              >
                Learn More <span className="ml-2">&rarr;</span>
              </button>
            </div>

            {/* Oracle PeopleSoft */}
            <div className="bg-white rounded-xl shadow-xl p-8 card-hover text-center">
              <div className="mb-6 flex items-center justify-center">
              <div className="w-56 rounded-full  flex items-center justify-center text-white text-3xl">
               <img src="./assets/Image/PeopleSoft-logo.png" alt="Oracle" className=" mx-auto object-cover"/>
                </div>
                
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Oracle PeopleSoft
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Proven HCM and financial management platform for large
                enterprises, public sector and higher education.
              </p>
              <button
                onClick={() => openPlatformModal("peoplesoft")}
                className="text-primary font-semibold hover:underline"
              >
                Learn More <span className="ml-2">&rarr;</span>
              </button>
            </div>
          </div>

          {/* High-level Platform Comparison (generic, no logos) */}
          <div className="mt-16 bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              ERP Landscape Overview
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="gradient-bg text-white">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">
                      Oracle Cloud (Fusion)
                    </th>
                    <th className="p-4 text-center">Oracle PeopleSoft</th>
                    <th className="p-4 text-center">Other SaaS ERP</th>
                    <th className="p-4 text-center">Open-Source ERP</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Cloud-Native</td>
                    <td className="p-4 text-center">
                      <FaCheckCircle className="text-green-500 inline" />
                    </td>
                    <td className="p-4 text-center">Hosted / Cloud-ready</td>
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
                      Large enterprises &amp; conglomerates
                    </td>
                    <td className="p-4 text-center text-sm">
                      Public sector &amp; higher education
                    </td>
                    <td className="p-4 text-center text-sm">
                      Mid-market organizations
                    </td>
                    <td className="p-4 text-center text-sm">
                      SMEs &amp; startups
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Customization</td>
                    <td className="p-4 text-center">High</td>
                    <td className="p-4 text-center">High</td>
                    <td className="p-4 text-center">Medium</td>
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
        <div className="container-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text section-title">
              Industries We Primarily Serve
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Primarily focused on Banking &amp; Insurance, Higher Education,
              Staffing, Non-profits and the Public Sector with Oracle-led ERP
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Banking & Insurance */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border border-blue-100 card-hover">
              <div className="text-primary text-4xl mb-4">
                <FaUniversity />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Banking &amp; Insurance
              </h3>
              <p className="text-gray-600 mb-4">
                Core banking, risk management, financial reporting &amp;
                regulatory compliance.
              </p>
            </div>

            {/* Higher Education */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border border-blue-100 card-hover">
              <div className="text-primary text-4xl mb-4">
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Higher Education
              </h3>
              <p className="text-gray-600 mb-4">
                Student lifecycle, campus operations, LMS and administrative
                systems.
              </p>
            </div>

            {/* Staffing */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border border-blue-100 card-hover">
              <div className="text-primary text-4xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Staffing
              </h3>
              <p className="text-gray-600 mb-4">
                Workforce management, recruitment automation &amp; payroll
                systems.
              </p>
            </div>

            {/* Non-profits */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border border-blue-100 card-hover">
              <div className="text-primary text-4xl mb-4">
                <FaHandsHelping />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Non-profits
              </h3>
              <p className="text-gray-600 mb-4">
                Donor management, project tracking &amp; community impact
                reporting.
              </p>
            </div>

            {/* Public Sector */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border border-blue-100 card-hover">
              <div className="text-primary text-4xl mb-4">
                <FaLandmark />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Public Sector
              </h3>
              <p className="text-gray-600 mb-4">
                E-governance, citizen services &amp; administrative workflows
                with strong compliance.
              </p>
            </div>
  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border border-blue-100 card-hover">
        <div className="text-primary text-3xl mb-4">
          <FaIndustry />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Conglomerates &amp; Large Enterprise
        </h3>
        <p className="text-gray-600">
          Multi-entity, multi-country groups with complex finance, HR and
          procurement operations across diverse business units.
        </p>
      </div>
            
          </div>
        </div>
      </section>

      {/* Integration Ecosystem Section */}
     {/* Integration Ecosystem Section – Updated Bulb Design */}
<section className="py-20 px-4 bg-gradient-to-br from-[#F3F6FF] via-[#EEF4FF] to-[#F6F3FF]">
  <div className="container-xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold section-title text-[#1F2933]">
        Integration with Leading Platforms
      </h2>
      <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
        Seamless integration of Oracle Cloud &amp; PeopleSoft with the tools you already rely on –
        across HR, finance, procurement, analytics and treasury.
      </p>
    </div>

    {/* Bulb Card */}
    <div className="max-w-5xl mx-auto">
      <div className="relative rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-[#E5ECFF] px-6 sm:px-10 py-10 overflow-hidden">
        {/* Soft radial glow in background */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-24 -left-10 w-56 h-56 rounded-full bg-[#2563EB]/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 w-60 h-60 rounded-full bg-[#7C3AED]/10 blur-3xl" />
        </div>

        <div className="relative grid md:grid-cols-[1.1fr,1.2fr] gap-10 items-center">
          {/* Left text content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#3730A3] mb-4">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-[#0EA5E9] to-[#22C55E] text-white text-[11px] shadow-md">
                <FaLightbulb className="inline-block" />
              </span>
              Oracle-centric integration ecosystem
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              End-to-end integrations that “just work”
            </h3>

            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              We design and implement robust integration patterns so your core Oracle platforms stay
              in sync with HR, CRM, procurement, analytics and treasury systems – securely and
              reliably.
            </p>

            <div className="space-y-3 text-sm md:text-[15px] text-gray-700">
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#156082] text-white text-[11px]">
                  <FaCheck />
                </span>
                <p>Pre-built accelerators for common Oracle &amp; SaaS patterns.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#156082] text-white text-[11px]">
                  <FaCheck />
                </span>
                <p>API-first approach with secure, audited data flows.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#156082] text-white text-[11px]">
                  <FaCheck />
                </span>
                <p>Designed for high availability, performance and compliance.</p>
              </div>
            </div>
          </div>

          {/* Right logos grid */}
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
              {integrationPlatforms.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center justify-center rounded-2xl bg-[#F9FBFF] border border-[#D9E2FF] px-3 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 w-full"
                >
                  <div className="h-10 flex items-center justify-center mb-2">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-8 max-w-[72px] object-contain"
                    />
                  </div>
                  <span className="text-[11px] md:text-xs font-medium text-[#1F2937] text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Logo Slider Section */}
<PlatformsSlider platforms={integrationPlatforms} />




      <WhyApperception />

      {/* Company Policies Section */}
     <section
  id="policies"
  className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white"
>
  <div className="container-xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text section-title">
        Our Company Policies
      </h2>
      <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
        Strong governance, security and ethical practices are at the core
        of every engagement.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="mb-4 inline-flex h-10 w-10 bg-[#156082] items-center justify-center rounded-full border border-[#E5ECFF] text-[#fff]">
          <FaLightbulb className="text-lg bg-" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Data Privacy &amp; Confidentiality
        </h3>
        <p className="text-gray-600 text-sm">
          Strict controls for client data handling, NDAs and access
          management across all projects.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5ECFF] text-[#2563EB]">
          <FaLightbulb className="text-lg" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Information Security
        </h3>
        <p className="text-gray-600 text-sm">
          Adherence to leading security standards with strong controls for
          cloud, network and application security.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5ECFF] text-[#2563EB]">
          <FaLightbulb className="text-lg" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Ethics &amp; Compliance
        </h3>
        <p className="text-gray-600 text-sm">
          Clear code of conduct, anti-bribery, anti-corruption and
          conflict-of-interest policies across the organization.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5ECFF] text-[#2563EB]">
          <FaLightbulb className="text-lg" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Quality &amp; Delivery
        </h3>
        <p className="text-gray-600 text-sm">
          Formal project governance, change control, documentation and
          continuous improvement practices.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text section-title">
              Client Success Stories
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Hear from businesses we've helped transform with our Oracle-led
              ERP solutions.
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
                Oracle Cloud solution. The migration was seamless with zero
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
                "Their Oracle Cloud and PeopleSoft expertise is outstanding.
                VAT compliance was handled perfectly, and the training provided
                was comprehensive."
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
                "The integrations they delivered between Oracle and our
                third-party systems have been a game-changer for real-time
                decision-making."
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
        <div className="container-xl mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text section-title">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Common questions about our Oracle ERP services and solutions.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#E7EAED] rounded-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveFaq((prev) => (prev === index ? null : index))
                  }
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-[#dde1e5] transition"
                >
                  <span className="font-semibold">{item.question}</span>
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
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50"
      >
        <div className="container-xl mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text section-title">
              Get In Touch
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Ready to transform your business with Oracle Cloud or PeopleSoft?
              Contact us for a free consultation.
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
                    <option>Oracle Cloud Implementation</option>
                    <option>Oracle PeopleSoft Services</option>
                    <option>Integration &amp; Modernization</option>
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
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #0A0D2C 0%, #072147 50%, #0E2043 100%)",
                  }}
                >
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
                      <p className="text-gray-600">
                        sales@apperceptionllc.com
                      </p>
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
                }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  Get Free ERP Assessment
                </h3>
                <p className="mb-6">
                  Schedule a free consultation with our Oracle experts to assess
                  your current systems and identify optimization opportunities.
                </p>
                <button
                  onClick={scrollToContact}
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-full flex items-center justify-center gap-2"
                >
                  <span className="text-black">Book Consultation</span>
                  <FaCalendarAlt />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

 <CTASection/>
 
    </div>
  );
};

/** Small helper icon components for About section */
const FaAwardIcon: React.FC = () => (
  <div className="text-primary text-2xl mt-1">
    <FaCheckCircle className="text-[#156082]" />
  </div>
);

const FaHandshakeIcon: React.FC = () => (
  <div className="text-primary text-2xl mt-1">
    <FaCheckCircle className="text-[#156082]" />
  </div>
);

const FaChartLineIcon: React.FC = () => (
  <div className="text-primary text-2xl mt-1">
    <FaCheckCircle className="text-[#156082]" />
  </div>
);

const FaGlobeIcon: React.FC = () => (
  <div className="text-primary text-2xl mt-1">
    <FaCheckCircle className="text-[#156082]" />
  </div>
);

export default HomePage;
