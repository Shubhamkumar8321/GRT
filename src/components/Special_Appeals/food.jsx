import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function Food() {
  const infoCards = [
    "Millions go to bed hungry every night without access to regular meals.",
    "Your donation helps provide essential food packs to families in crisis zones.",
    "We distribute rice, flour, oil, lentils, and essentials to the most needy.",
    "Support widows, orphans, and displaced families facing starvation.",
  ];

  const projects = [
    { title: "Family Food Pack", desc: "Sponsor a monthly food pack for a family.", img: malaysiaimg },
    { title: "Ramadan Food Drive", desc: "Feed fasting families throughout Ramadan.", img: malaysiaimg },
    { title: "Hot Meals Program", desc: "Distribute hot meals to the homeless.", img: malaysiaimg },
    { title: "Emergency Food Relief", desc: "Provide food aid in conflict zones.", img: malaysiaimg },
    { title: "Orphan Feeding Fund", desc: "Ensure regular meals for orphan children.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center">FOOD APPEAL</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3">
            <DonationCard />
          </div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Food Appeal" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Feed the Hungry, Save Lives</h2>
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
            “He is not a believer whose stomach is filled while the neighbor to his side goes hungry.”
          </blockquote>
          <p className="text-md">[Bukhari]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default Food;
