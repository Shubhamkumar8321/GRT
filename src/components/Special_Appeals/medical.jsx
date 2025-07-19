import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function Medical() {
  const infoCards = [
    "Millions of people in deprived communities suffer without basic healthcare.",
    "Your donations help us set up free health camps offering check-ups, treatment, and medicines.",
    "Support essential services like maternal care, vaccinations, dental, and eye care.",
    "Be a lifeline for those too poor to afford hospitals or regular health services.",
  ];

  const projects = [
    { title: "Free Medical Camps", desc: "Sponsor a full-day medical camp.", img: malaysiaimg },
    { title: "Mobile Clinic Van", desc: "Bring healthcare to remote villages.", img: malaysiaimg },
    { title: "Essential Medicine Packs", desc: "Distribute free medicines for poor families.", img: malaysiaimg },
    { title: "Eye Care & Cataract Surgery", desc: "Restore vision for those in need.", img: malaysiaimg },
    { title: "Mother & Baby Health Services", desc: "Provide safe maternal healthcare.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center">MEDICAL APPEAL</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3">
            <DonationCard />
          </div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Medical Appeal" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Provide Life-Saving Medical Aid</h2>
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
            “Whoever relieves a hardship for a believer, Allah will relieve their hardship on the Day of Judgment.”
          </blockquote>
          <p className="text-md">[Muslim]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default Medical;
