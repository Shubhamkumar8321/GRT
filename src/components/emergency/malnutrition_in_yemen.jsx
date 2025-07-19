import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function MalnutritionInYemen() {
  const infoCards = [
    "Millions of Yemeni children suffer from severe malnutrition due to ongoing conflict and famine.",
    "Your donations provide emergency food packs and nutritional support for vulnerable families.",
    "Help deliver life-saving medical care to malnourished children in remote villages.",
    "Support initiatives distributing clean water and essential hygiene kits in crisis-affected areas.",
  ];

  const projects = [
    { title: "Food Pack Yemen", desc: "Provide emergency food parcels.", img: malaysiaimg },
    { title: "Nutrition Program", desc: "Treat malnourished children with supplements.", img: malaysiaimg },
    { title: "Clean Water Project", desc: "Deliver safe drinking water supplies.", img: malaysiaimg },
    { title: "Medical Aid for Yemen", desc: "Life-saving treatment for families.", img: malaysiaimg },
    { title: "Emergency Shelter", desc: "Build shelters for displaced families.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold">MALNUTRITION IN YEMEN</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Yemen Aid" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        <section className="py-10 flex justify-center">
          <iframe
            className="rounded-2xl w-[90%] md:w-[1000px] h-[500px]"
            src="https://www.youtube.com/embed/xZd0O-DYwHU"
            title="Malnutrition Yemen Appeal"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </section>

        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Save Lives in Yemen</h2>
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

export default MalnutritionInYemen;
