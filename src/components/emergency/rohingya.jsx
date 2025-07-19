import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function Rohingya() {
  const infoCards = [
    "Over one million Rohingya refugees live in overcrowded camps facing hunger, disease, and violence.",
    "Your donations supply food packs, clean water, and hygiene kits to displaced families.",
    "Help us build shelters and distribute warm clothing to protect families during monsoon and winter seasons.",
    "Support educational programs for Rohingya children deprived of formal schooling opportunities.",
  ];

  const projects = [
    { title: "Rohingya Food Pack", desc: "Deliver emergency food rations to families.", img: malaysiaimg },
    { title: "Water Wells for Camps", desc: "Install safe water access points in camps.", img: malaysiaimg },
    { title: "Refugee Shelter Construction", desc: "Build durable shelters for families.", img: malaysiaimg },
    { title: "Medical Aid for Refugees", desc: "Provide treatment and medicines.", img: malaysiaimg },
    { title: "Education for Rohingya Children", desc: "Set up informal schools and classes.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold">ROHINGYA APPEAL</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Rohingya Appeal" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        <section className="py-10 flex justify-center">
          <iframe
            className="rounded-2xl w-[90%] md:w-[1000px] h-[500px]"
            src="https://www.youtube.com/embed/6FATSAa_iSc?autoplay=1&mute=1"
            title="Rohingya Appeal Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>

        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Emergency Support for Rohingya Refugees</h2>
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
            “He who helps his brother in his time of need, Allah will be there in his time of need.”
          </blockquote>
          <p className="text-md">[Muslim]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default Rohingya;
