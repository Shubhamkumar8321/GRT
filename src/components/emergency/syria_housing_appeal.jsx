import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function SyriaHousing() {
  const infoCards = [
    "Millions of Syrians remain displaced, living in overcrowded and unsafe camps after years of conflict.",
    "Your donations provide emergency housing — including tented shelters, container homes, and essential winter supplies.",
    "Help repair damaged homes and install sanitation facilities to protect families from harsh conditions.",
    "Support community infrastructure with water points, lighting, and heating to restore dignity to displaced families.",
  ];

  const projects = [
    { title: "Build Family Shelter", desc: "Construct safe emergency homes.", img: malaysiaimg },
    { title: "Winter Warmth Kits", desc: "Blankets, warm clothing, and heaters.", img: malaysiaimg },
    { title: "Container Housing Project", desc: "Provide secure container homes.", img: malaysiaimg },
    { title: "Water Access Points", desc: "Install water stations in camps.", img: malaysiaimg },
    { title: "Heating Fuel Distribution", desc: "Distribute heaters and fuel to families.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        {/* Hero Heading */}
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center">SYRIA HOUSING APPEAL</h1>
        </div>

        {/* Donation Section */}
        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Syria Housing Appeal" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        {/* Video Section */}
        <section className="py-10 flex justify-center">
          <iframe
            className="rounded-2xl w-[90%] md:w-[1000px] h-[500px]"
            src="https://www.youtube.com/embed/mPJU2vdFMu8?autoplay=1&mute=1"
            title="Syria Housing Appeal Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>

        {/* Info Cards */}
        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Emergency Shelter for Syrian Families</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {infoCards.map((text, i) => (
              <div key={i} className="bg-white border border-[#A0A0A0] rounded-xl p-6 shadow hover:shadow-2xl transition">
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hadith Quote */}
        <div className="bg-[#1f98c4] text-white px-6 py-14 text-center">
          <p className="text-lg italic">The Prophet ﷺ said:</p>
          <blockquote className="text-2xl font-bold my-4 leading-relaxed">
            “Whoever shelters a Muslim, Allah will shelter him in this world and the Hereafter.”
          </blockquote>
          <p className="text-md">[Muslim]</p>
        </div>

        {/* Project Slider */}
        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default SyriaHousing;
