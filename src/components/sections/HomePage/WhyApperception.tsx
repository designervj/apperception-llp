"use client";

import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import {
  FiTarget,
  FiTrendingUp,
  FiShield,
  FiGlobe,
  FiUsers,
  FiBarChart,
} from "react-icons/fi";

const WhyApperception = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container-xl mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Why Apperception?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Independent advisory, global ERP expertise, and a delivery model
            tailored for enterprise transformation.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT BULLET POINTS */}
            <div>
              <ul className="space-y-5 text-gray-700 text-[15px] leading-relaxed">
                <Bullet>
                  <h5 className="font-bold">
                    Independent Advisory, Client-First Approach
                  </h5>
                  <p>
                    Not tied to any vendor. We recommend what fits <em>
                      your
                    </em>
                    business goals.
                  </p>
                </Bullet>

                <Bullet>
                  <h5 className="font-bold">
                    Expertise Across Finance & Digital Transformation
                  </h5>
                  <p>
                    15+ years of global ERP experience across enterprise
                    systems.
                  </p>
                </Bullet>

                <Bullet>
                  <h5 className="font-bold">Proven Cost Optimization</h5>
                  <p>
                    Reduced IT operating costs while increasing efficiency &
                    service delivery.
                  </p>
                </Bullet>

                <Bullet>
                  <h5 className="font-bold">Local + Global Delivery Model</h5>
                  <p>
                    {" "}
                    On-ground presence in UAE, EU and offshore delivery in
                    India.
                  </p>
                </Bullet>

                <Bullet>
                  <h5 className="font-bold">
                    Risk Mitigation & Compliance Strength
                  </h5>
                  <p>Deep regulatory & industry compliance experience.</p>
                </Bullet>

                <Bullet>
                  <h5 className="font-bold">Scalable Support for Growth</h5>
                  <p>
                    Advisory + training capabilities supporting expansion across
                    Africa.
                  </p>
                </Bullet>
              </ul>
            </div>

            {/* RIGHT ICON CARDS */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Feature
                icon={<FiTarget />}
                title="Independent Advisory"
                text="Vendor-neutral strategy that puts your business first."
              />

              <Feature
                icon={<FiTrendingUp />}
                title="Digital Expertise"
                text="15+ years in large-scale enterprise IT & ERP systems."
              />

              <Feature
                icon={<FiBarChart />}
                title="Cost Optimization"
                text="Reduce operating expenses with strategic modernization."
              />

              <Feature
                icon={<FiGlobe />}
                title="Global Delivery"
                text="UAE, Europe & India delivery centers for best efficiency."
              />

              <Feature
                icon={<FiShield />}
                title="Risk Compliance"
                text="Strong governance & regulatory alignment for enterprises."
              />

              <Feature
                icon={<FiUsers />}
                title="Scalable Growth"
                text="Support for expansion across MENA & Africa regions."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Bullet Component
const Bullet = ({ children }) => (
  <li className="flex items-start gap-1">
    <BsCheckCircleFill className="text-primary text-2xl mt-1 me-4" />
    <span>{children}</span>
  </li>
);

// Feature Card Component
const Feature = ({ icon, title, text }) => (
  <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition group">
    <div className="text-primary text-3xl mb-4 group-hover:scale-110 transition">
      {icon}
    </div>
    <h4 className="font-semibold text-gray-800 mb-2 text-lg">{title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
  </div>
);

export default WhyApperception;
