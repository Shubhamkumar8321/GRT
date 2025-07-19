import React from "react";
import pakistanimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function Pakistan() {
  const infoCards = [
    "Distribute monthly food packs to flood-affected families and remote rural communities in Pakistan.",
    "Install clean water hand pumps and filtration systems to tackle waterborne diseases in villages.",
    "Medical aid campaigns supply essential medicines and organize mobile health camps.",
    "Support poor children’s education through scholarships, school kits, and skill training programs.",
  ];

  const projects = [
    { title: "Flood Relief Food Pack", desc: "Support families with monthly food essentials.", img: pakistanimg },
    { title: "Clean Water Hand Pumps", desc: "Provide villages with safe water access.", img: pakistanimg },
    { title: "Medical Camps & Aid", desc: "Distribute medicines and offer health services.", img: pakistanimg },
    { title: "Education for Children", desc: "Sponsor school kits and training for kids.", img: pakistanimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${pakistanimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>
      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center px-2">PAKISTAN</h1>
        </div>
        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center  px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={pakistanimg} alt="Pakistan" className="rounded w-full object-cover shadow" />
          </div>
        </div>
        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-[#1E1E1E] text-center">
          <h2 className="text-3xl font-bold text-center mb-8">Help the Needy Across Pakistan</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {infoCards.map((text, i) => (
              <div key={i} className="bg-white border border-[#A0A0A0] rounded-xl shadow-lg p-6 text-left transition duration-300 hover:shadow-2xl hover:-translate-y-1">
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#1f98c4] text-[#fff] px-6 py-14 text-center">
          <p className="text-lg italic">The Prophet (peace be upon him) said:</p>
          <blockquote className="text-2xl font-bold my-4 leading-relaxed">“The best charity is giving water to drink.”</blockquote>
          <p className="text-md">[Ahmad]</p>
        </div>
        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default Pakistan;
