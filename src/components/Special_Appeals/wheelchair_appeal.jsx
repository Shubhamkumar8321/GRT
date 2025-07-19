import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function WheelchairAppeal() {
  const infoCards = [
    "Thousands of disabled individuals suffer in isolation without mobility support.",
    "Your donations help provide wheelchairs to the elderly, injured, and differently-abled.",
    "A simple wheelchair can open doors to education, employment, and dignity.",
    "Give the gift of independence and mobility to someone in need today.",
  ];

  const projects = [
    { title: "Donate a Wheelchair", desc: "Gift a wheelchair to a disabled person.", img: malaysiaimg },
    { title: "Elderly Mobility Aid", desc: "Support mobility for elderly and frail individuals.", img: malaysiaimg },
    { title: "Post-Surgery Wheelchairs", desc: "Help patients in recovery with temporary mobility.", img: malaysiaimg },
    { title: "Children’s Mobility Aid", desc: "Specialized wheelchairs for children.", img: malaysiaimg },
    { title: "Remote Area Access Support", desc: "Deliver wheelchairs to remote and war-torn areas.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center">WHEELCHAIR APPEAL</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3">
            <DonationCard />
          </div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Wheelchair Appeal" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Restore Dignity Through Mobility</h2>
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
            “Whoever helps ease the burden of a fellow Muslim, Allah will ease their burden in this life and the next.”
          </blockquote>
          <p className="text-md">[Tirmidhi]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default WheelchairAppeal;
