import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function YemenSyriaBreadAppeal() {
  const infoCards = [
    "Millions of families in Yemen and Syria struggle to afford basic food items, with bread often being a luxury.",
    "Your donation helps provide daily fresh bread to displaced families, widows, orphans, and the elderly.",
    "This life-saving initiative ensures no child or mother sleeps hungry, especially in war-torn zones.",
    "Support ongoing bakery projects and emergency bread distribution missions in the region.",
  ];

  const projects = [
    { title: "Daily Bread Pack", desc: "Distribute fresh bread to displaced families.", img: malaysiaimg },
    { title: "Emergency Bakery Supplies", desc: "Provide flour and resources to local bakeries.", img: malaysiaimg },
    { title: "Widow & Orphan Meals", desc: "Ensure vulnerable families receive daily sustenance.", img: malaysiaimg },
    { title: "Bread for IDP Camps", desc: "Deliver bread to refugee and IDP camps.", img: malaysiaimg },
    { title: "Winter Food Program", desc: "Combine bread with warm meals in cold months.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center">YEMEN & SYRIA BREAD APPEAL</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3">
            <DonationCard />
          </div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Bread Distribution" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Bread: The Lifeline for Families in Crisis</h2>
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
            “Feed the hungry, visit the sick, and free the captive.” 
          </blockquote>
          <p className="text-md">[Bukhari]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default YemenSyriaBreadAppeal;
