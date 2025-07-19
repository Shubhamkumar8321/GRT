import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function WaterProject() {
  const infoCards = [
    "Millions lack access to clean and safe drinking water in remote and impoverished areas.",
    "Your donations help build wells, install water filtration systems, and deliver clean water supplies.",
    "Each water well changes lives — reducing disease, improving hygiene, and sustaining livelihoods.",
    "Support our Water Project today and be the reason a village never goes thirsty again.",
  ];

  const projects = [
    { title: "Build a Water Well", desc: "Provide clean drinking water to families.", img: malaysiaimg },
    { title: "Community Water Tanks", desc: "Install tanks for clean, stored water.", img: malaysiaimg },
    { title: "Hand Pump Wells", desc: "Affordable water access solutions for villages.", img: malaysiaimg },
    { title: "Water Filter Distribution", desc: "Distribute portable water filters to households.", img: malaysiaimg },
    { title: "Rainwater Harvesting Systems", desc: "Capture and purify rainwater for communities.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold">WATER PROJECT</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Water Project" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        {/* Video Section */}
        <section className="py-10 flex justify-center">
          <iframe
            className="rounded-2xl w-[90%] md:w-[1000px] h-[500px]"
            src="https://www.youtube.com/embed/X7qqcew9Jb0"
            title="Water Project Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>

        {/* Info Cards */}
        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Provide Clean Water</h2>
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
            “The best charity is giving water to drink.”
          </blockquote>
          <p className="text-md">[Ahmad]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default WaterProject;
