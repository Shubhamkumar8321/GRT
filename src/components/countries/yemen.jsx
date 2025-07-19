import React from "react";
import yemenimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function Yemen() {
  const infoCards = [
    "Your donations deliver emergency food supplies to families suffering from famine and malnutrition in Yemen.",
    "Water tanker projects and well restorations provide life-saving clean water access to drought-affected communities.",
    "Essential medical kits and hospital equipment help doctors treat injured and sick children under conflict conditions.",
    "Orphan sponsorship secures food, shelter, education, and healthcare for children left vulnerable by war.",
  ];

  const projects = [
    { title: "Yemen Food Pack", desc: "Distribute life-saving food packs to starving families.", img: yemenimg },
    { title: "Clean Water for Yemen", desc: "Provide safe drinking water through tankers and wells.", img: yemenimg },
    { title: "Emergency Healthcare", desc: "Deliver medical aid to overstretched hospitals.", img: yemenimg },
    { title: "Orphan Sponsorship", desc: "Support education and shelter for orphans.", img: yemenimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${yemenimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>
      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center px-2">YEMEN</h1>
        </div>
        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center  px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={yemenimg} alt="Yemen" className="rounded w-full object-cover shadow" />
          </div>
        </div>
        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-[#1E1E1E] text-center">
          <h2 className="text-3xl font-bold text-center mb-8">Save Lives in Yemen</h2>
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
          <blockquote className="text-2xl font-bold my-4 leading-relaxed">“Whoever feeds a hungry person, Allah will feed him from the fruits of Paradise.”</blockquote>
          <p className="text-md">[Tirmidhi]</p>
        </div>
        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default Yemen;
