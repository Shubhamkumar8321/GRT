import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function WomenCarePack() {
  const infoCards = [
    "In many poverty-stricken regions, women lack access to basic hygiene and personal care essentials.",
    "Your donations help distribute care packs containing sanitary products, soap, undergarments, and essential health supplies.",
    "These packs restore dignity, hygiene, and confidence to vulnerable sisters in crisis-affected areas.",
    "Empower women with the tools they need for better personal and menstrual hygiene.",
  ];

  const projects = [
    { title: "Hygiene Care Pack", desc: "Provide hygiene essentials to vulnerable women.", img: malaysiaimg },
    { title: "Safe Motherhood Kit", desc: "Support expectant mothers with essential supplies.", img: malaysiaimg },
    { title: "School Girl Hygiene Kit", desc: "Distribute sanitary products to schoolgirls.", img: malaysiaimg },
    { title: "Crisis Response Packs", desc: "Care kits for women in war or disaster zones.", img: malaysiaimg },
    { title: "Monthly Hygiene Program", desc: "Sustain ongoing distribution of care packs.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center">WOMEN’S CARE PACK</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3">
            <DonationCard />
          </div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Women's Care Pack" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Restore Dignity and Well-being</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {infoCards.map((text, i) => (
              <div key={i} className="bg-white border border-[#A0A0A0] rounded-xl p-6 shadow hover:shadow-2xl transition">
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1f98c4] text-white px-6 py-14 text-center">
          <p className="text-lg italic">The Prophet ﷺ said:</p>
          <blockquote className="text-2xl font-bold my-4 leading-relaxed">
            “Give charity without delay, for it stands in the way of calamity.”
          </blockquote>
          <p className="text-md">[Tirmidhi]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default WomenCarePack;
