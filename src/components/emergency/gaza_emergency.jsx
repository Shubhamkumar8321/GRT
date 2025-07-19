import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function GazaAppeal() {
  const infoCards = [
    "Thousands of families in Gaza urgently need food, shelter, and medical care amid ongoing conflict.",
    "Your donations deliver vital aid parcels containing essentials like rice, oil, and medicines directly to affected families.",
    "Help us provide emergency shelter and repair homes damaged by airstrikes and blockade restrictions.",
    "Support Gaza’s hospitals with life-saving medical equipment, medicines, and critical care support.",
  ];

  const projects = [
    { title: "Emergency Gaza Relief", desc: "Food and medicine for Gaza families.", img: malaysiaimg },
    { title: "Medical Supplies for Gaza", desc: "Support hospitals with essential equipment.", img: malaysiaimg },
    { title: "Shelter Rebuilding", desc: "Repair homes affected by conflict.", img: malaysiaimg },
    { title: "Water for Gaza", desc: "Provide clean water access for families.", img: malaysiaimg },
    { title: "Orphan Support Gaza", desc: "Support children orphaned by conflict.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold">GAZA APPEAL</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Gaza Appeal" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        {/* Video Section (clean fixed height) */}
       <section className="py-10 flex justify-center ">
        <iframe
          className="rounded-2xl w-[90%] md:w-[1000px] h-[500px]"
          src="https://www.youtube.com/embed/Jwu5MLGVMp0"
          title="Donation Dilemma"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>

        {/* Info Cards */}
        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Emergency Support for Gaza</h2>
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
            “Whoever relieves a believer’s distress in this world, Allah will relieve his distress in the Hereafter.”
          </blockquote>
          <p className="text-md">[Muslim]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default GazaAppeal;
