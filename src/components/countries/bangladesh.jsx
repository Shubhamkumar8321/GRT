import React from "react";
import bangladeshimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function Bangladesh() {
  const infoCards = [
    "Provide nutritious food packs to impoverished Rohingya refugees and struggling families in Bangladesh.",
    "Clean water wells and deep tube wells offer communities safe water for drinking and household use.",
    "Medical camps deliver health services, medicines, and maternal care to families in need.",
    "Orphan sponsorship programs provide full support for vulnerable children’s education and wellbeing.",
  ];

  const projects = [
    { title: "Rohingya Food Relief", desc: "Support refugees with essential food packs.", img: bangladeshimg },
    { title: "Clean Water Wells", desc: "Construct deep tube wells for safe water.", img: bangladeshimg },
    { title: "Mobile Medical Camps", desc: "Offer health checks and free medicines.", img: bangladeshimg },
    { title: "Orphan Sponsorship", desc: "Educate and shelter orphaned children.", img: bangladeshimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bangladeshimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>
      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center px-2">BANGLADESH</h1>
        </div>
        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center  px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={bangladeshimg} alt="Bangladesh" className="rounded w-full object-cover shadow" />
          </div>
        </div>
        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-[#1E1E1E] text-center">
          <h2 className="text-3xl font-bold text-center mb-8">Help the Rohingya and Local Poor</h2>
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
          <blockquote className="text-2xl font-bold my-4 leading-relaxed">“Whoever removes a worldly grief from a believer, Allah will remove from him one of the griefs of the Day of Judgment.”</blockquote>
          <p className="text-md">[Muslim]</p>
        </div>
        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default Bangladesh;
