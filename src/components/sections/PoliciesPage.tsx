import React from "react";
import {
  FaShieldAlt,
  FaUserSecret,
  FaBalanceScale,
  FaBookOpen,
  FaFileAlt,
  FaLightbulb,
  FaExclamationCircle,
} from "react-icons/fa";

const CompanyPoliciesPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-[#EEF4FF] via-[#F5F7FF] to-white border-b border-[#E5EDFF]">
        <div className="container-xl mx-auto max-w-5xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-[#4B5563] bg-white/70 border border-[#E5EDFF] rounded-full px-3 py-1 mb-4">
            <span className="h-5 w-5 flex items-center justify-center rounded-full bg-[#2563EB] text-white text-[11px]">
              <FaShieldAlt />
            </span>
            Governance • Trust • Compliance
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Company Policies &amp; Governance Framework
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Our policies are designed to protect client data, ensure ethical behaviour,
            and maintain consistent quality across every engagement — from discovery
            workshops to long-term support.
          </p>
        </div>
      </section>

      {/* QUICK OVERVIEW GRID (CARDS WITH ICONS) */}
      <section className="py-16 px-4 bg-white">
        <div className="container-xl mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Privacy & Confidentiality",
                desc: "We treat all client information as confidential and apply strict controls for access, storage and sharing.",
                icon: <FaUserSecret />,
              },
              {
                title: "Information Security",
                desc: "We follow industry-aligned security practices to protect systems, integrations and data flows.",
                icon: <FaShieldAlt />,
              },
              {
                title: "Ethics & Professional Conduct",
                desc: "Every engagement is guided by integrity, transparency and zero-tolerance for unethical behaviour.",
                icon: <FaBalanceScale />,
              },
              {
                title: "Delivery & Quality Assurance",
                desc: "Structured project governance, documentation and reviews to maintain consistent delivery quality.",
                icon: <FaFileAlt />,
              },
              {
                title: "Use of Technology & AI",
                desc: "Responsible use of tools, platforms and AI with a focus on security, fairness and explainability.",
                icon: <FaBookOpen />,
              },
              {
                title: "Continuous Improvement",
                desc: "We capture lessons learned and regularly refine processes, templates and delivery standards.",
                icon: <FaLightbulb />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative bg-white border border-[#E5E7EB] rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-200 p-7"
              >
                {/* soft glow */}
                <div className="absolute -top-10 -right-8 w-28 h-28 bg-sky-300/15 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-4xl text-[#156082] mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-[#111827] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-md text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED POLICY SECTIONS */}
      <section className="py-16 px-4 bg-[#F9FAFF] border-t border-[#E5EDFF]">
        <div className="container-xl mx-auto max-w-5xl space-y-14">
          {/* 1 – Data Privacy */}
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              1. Data Privacy &amp; Confidentiality
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-3">
              We recognise that our clients trust us with sensitive business,
              financial and operational information. Protecting this information
              is a core responsibility across our team.
            </p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                All client data is treated as confidential and accessed strictly
                on a need-to-know basis.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                We use secure channels for data exchange and avoid using
                personal email or consumer messaging apps for client artefacts.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Non-Disclosure Agreements (NDAs) are signed where required
                before detailed system or financial discussions begin.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Demo and test environments use masked or synthetic data whenever
                possible, not raw production data.
              </li>
            </ul>
          </div>

          {/* 2 – Info Security */}
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              2. Information Security &amp; Access Control
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-3">
              Our information security approach combines secure configuration,
              least-privilege access and continuous awareness.
            </p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Project access (VPN, Oracle, PeopleSoft, collaboration tools)
                is provisioned based on role and revoked when the engagement ends.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Strong authentication, device security and patching guidelines
                are mandatory for all team members.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                We align with recognised best practices (e.g. least privilege,
                secure configuration, logging and review of admin actions).
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Any suspected incident or unusual access pattern is escalated
                immediately to our internal security lead and the client SPOC.
              </li>
            </ul>
          </div>

          {/* 3 – Ethics & Conduct */}
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              3. Ethics, Integrity &amp; Professional Conduct
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-3">
              We expect every team member to act in a manner that reflects our
              values, respects our clients and protects the reputation of the
              organisation.
            </p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                We do not engage in or tolerate bribery, kickbacks or any form
                of improper influence.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Conflicts of interest must be disclosed and appropriately
                managed before engagement work proceeds.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                We commit to respectful communication, inclusive behaviour and
                a workplace free from harassment or discrimination.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Decisions are documented and traceable; we avoid shortcuts that
                compromise quality or ethics.
              </li>
            </ul>
          </div>

          {/* 4 – Delivery & Quality */}
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              4. Project Delivery, Quality &amp; Documentation
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-3">
              A consistent delivery framework helps us reduce risk and maintain
              predictable outcomes across different clients and regions.
            </p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Each engagement follows an agreed scope, timeline and RACI with
                clearly defined responsibilities.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Key decisions, configurations, customisations and integrations
                are captured in project documentation.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Code and configuration are reviewed by peers or leads before
                deployment to higher environments.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                We encourage joint testing with client teams to ensure solutions
                match real-world usage scenarios.
              </li>
            </ul>
          </div>

          {/* 5 – Technology & AI Use */}
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              5. Use of Tools, Cloud Services &amp; AI
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-3">
              We use modern platforms and, where appropriate, AI-assisted tools
              to accelerate analysis and delivery — always with guardrails.
            </p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Client data is not used in public AI tools without explicit
                approval and appropriate safeguards.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Any AI-generated artefacts are reviewed by consultants before
                being shared or implemented.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                We respect licensing terms of software, libraries and
                integrations used in our work.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Where required, we align with client-specific security or AI
                usage guidelines for the project.
              </li>
            </ul>
          </div>

          {/* 6 – Issues, Escalation & Reporting */}
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              6. Issues, Escalation &amp; Policy Queries
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-3">
              We encourage early escalation of risks and open communication
              whenever something does not look right.
            </p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Delivery risks or blockers are flagged in project governance
                calls and status reports.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Any concerns about security, ethics or behaviour can be raised
                with engagement leads or management.
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500">•</span>
                Policy clarifications can be requested by clients at any point
                during the engagement.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* DOWNLOAD / DISCLAIMER CTA */}
      <section className="py-14 px-4 bg-white border-t border-[#E5EDFF]">
        <div className="container-xl mx-auto max-w-4xl text-center">
          {/* <div className="inline-flex items-center gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
            <FaExclamationCircle className="text-[14px]" />
            This overview is for information only and can be adapted for specific engagements.
          </div> */}

          <h3 className="text-xl md:text-2xl font-semibold text-[#111827] mb-3">
            Need the full policy pack or a custom version?
          </h3>
          <p className="text-sm md:text-lg text-gray-600 mb-6">
            We can share a detailed policy handbook or align our governance framework to your
            internal standards, procurement requirements and regional regulations.
          </p>

          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#156082] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#156a91] transition font-semibold text-sm md:text-lg"
          >
            Talk to us about policies &amp; compliance
          </button>
        </div>
      </section>
    </div>
  );
};

export default CompanyPoliciesPage;
