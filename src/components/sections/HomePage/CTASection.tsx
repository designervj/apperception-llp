import React from "react";

const CTASection = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container-xl mx-auto">
        <div className="max-w-5xl mx-auto bg-[#f7f7f7] rounded-2xl px-6 md:px-10 py-12 text-center shadow-xl border border-[#E0E7FF]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">
            We’re inviting interns to join our ERP &amp; Cloud team
          </h2>

          <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
            If you’re a student or recent graduate interested in Oracle Cloud,
            PeopleSoft, analytics or enterprise technologies, this is your
            chance to work closely with senior consultants on real client
            projects.
          </p>

          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center rounded-lg bg-[#156082] text-white px-8 py-3 text-sm md:text-base font-semibold shadow-md hover:bg-[#1D4ED8] transition"
            
          >
           Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
