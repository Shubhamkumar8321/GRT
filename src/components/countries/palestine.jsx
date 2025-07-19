import React from "react";
import palestineimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function Palestine() {
  const infoCards = [
    "Your donations provide essential food packs and fresh meals to displaced families in Gaza facing ongoing hardship.",
    "Clean water supply projects help families access safe drinking water amidst the blockade and infrastructure challenges.",
    "Emergency medical support delivers vital medicines, surgical kits, and trauma care to hospitals and clinics under strain.",
    "Orphan sponsorship ensures education, clothing, and welfare support for children who have lost their families to conflict.",
  ];

  const projects = [
    { title: "Gaza Food Pack", desc: "Provide essential food items to displaced families.", img: palestineimg },
    { title: "Clean Water for Gaza", desc: "Supply safe drinking water to homes and hospitals.", img: palestineimg },
    { title: "Emergency Medical Aid", desc: "Support hospitals with lifesaving medical supplies.", img: palestineimg },
    { title: "Sponsor a Gaza Orphan", desc: "Ensure shelter, education, and care for orphans.", img: palestineimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${palestineimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>
      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center px-2">PALESTINE</h1>
        </div>
        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={palestineimg} alt="Palestine" className="rounded w-full object-cover shadow" />
          </div>
        </div>
        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-[#1E1E1E] text-center">
          <h2 className="text-3xl font-bold text-center mb-8">Support Gaza’s Most Vulnerable</h2>
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
          <blockquote className="text-2xl font-bold my-4 leading-relaxed">“Whoever relieves a believer’s hardship in this world, Allah will relieve his hardship on the Day of Resurrection.”</blockquote>
          <p className="text-md">[Muslim]</p>
        </div>
        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default Palestine;
