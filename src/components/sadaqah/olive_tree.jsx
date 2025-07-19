import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function OliveTree() {
  const infoCards = [
    "Thousands of Palestinian families rely on olive farming for their livelihoods and nutrition.",
    "Your donation plants olive trees that will sustain families for generations through their harvest.",
    "Help restore destroyed olive groves and support farmers impacted by conflict and occupation.",
    "A single olive tree can bear fruit for over 100 years — a lasting charity (Sadaqah Jariyah) in your name.",
  ];

  const projects = [
    { title: "Plant an Olive Tree", desc: "Support farmers with a new tree.", img: malaysiaimg },
    { title: "Olive Grove Restoration", desc: "Replant uprooted olive groves.", img: malaysiaimg },
    { title: "Farmer Tools & Support", desc: "Provide equipment and training.", img: malaysiaimg },
    { title: "Olive Oil Distribution", desc: "Help families earn through produce.", img: malaysiaimg },
    { title: "Tree Maintenance Aid", desc: "Fund fertilization and irrigation.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold">OLIVE TREE</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Olive Tree Project" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        <section className="py-10 flex justify-center">
          <iframe
            className="rounded-2xl w-[90%] md:w-[1000px] h-[500px]"
            src="https://www.youtube.com/embed/B_z4kKCEESg"
            title="Olive Tree Appeal"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </section>

        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Plant a Tree, Leave a Legacy</h2>
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
            “If the Final Hour comes while you have a seedling in your hand, plant it.”
          </blockquote>
          <p className="text-md">[Musnad Ahmad]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default OliveTree;
