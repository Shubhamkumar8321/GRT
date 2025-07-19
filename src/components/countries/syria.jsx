import React from "react";
import syriaimg from "../../assets/malaysia.jpeg";
import ProjectSlider from "../reuseable/ProjectSlider";
import DonationCard from "../reuseable/DonationCard";

function Syria() {
  const projects = [
    {
      title: "Winter Emergency Packs",
      desc: "Provide warm blankets, clothing, and heaters to displaced Syrian families.",
      img: syriaimg,
    },
    {
      title: "Food Parcels for Refugees",
      desc: "Distribute essential food packs to refugee camps in Syria.",
      img: syriaimg,
    },
    {
      title: "Medical Aid for War Victims",
      desc: "Fund life-saving treatments and surgeries for those injured in conflict.",
      img: syriaimg,
    },
    {
      title: "Orphan Sponsorship Syria",
      desc: "Sponsor a Syrian orphan and provide shelter, food, and education.",
      img: syriaimg,
    },
    {
      title: "Clean Water Access",
      desc: "Install clean water systems in refugee camps and war-torn villages.",
      img: syriaimg,
    },
    {
      title: "Ramadan Food Packs Syria",
      desc: "Distribute Iftar food packs to struggling families during Ramadan.",
      img: syriaimg,
    },
  ];

  const infoCards = [
    "Millions of Syrians have been displaced by war and natural disasters, leaving families without food, shelter, or medical aid.",
    "Your donations deliver emergency relief like food, shelter, healthcare, and winter supplies to those trapped in dire circumstances.",
    "We support orphan sponsorship, medical aid programs, clean water initiatives, and community rebuilding efforts inside Syria.",
    "Every donation restores dignity and hope to displaced families enduring unimaginable hardship daily.",
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${syriaimg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      {/* Page Content */}
      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        {/* Hero Text */}
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center px-2">
            SYRIA
          </h1>
        </div>

        {/* Donation Form + Image */}
        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          {/* Static Donation Card */}
          <div className="w-full lg:w-1/3">
            <DonationCard />
          </div>

          {/* Image */}
          <div className="w-full lg:max-w-[630px]">
            <img
              src={syriaimg}
              alt="Syrian Aid"
              className="rounded w-full object-cover shadow"
            />
          </div>
        </div>

        {/* Info Section with Cards */}
        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-[#1E1E1E] text-center">
          <h2 className="text-3xl font-bold text-center mb-8">
            Bring Hope to Syria's Displaced and Orphans
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {infoCards.map((text, index) => (
              <div
                key={index}
                className="bg-white border border-[#A0A0A0] rounded-xl shadow-lg p-6 text-left transition duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hadith Quote */}
        <div className="bg-[#1f98c4] text-[#fff] px-6 py-14 text-center">
          <p className="text-lg italic">
            The Prophet (peace and blessings be upon him) said:
          </p>
          <blockquote className="text-2xl font-bold my-4 leading-relaxed">
            “Whoever relieves a hardship for a believer in this world, Allah
            will relieve his hardship on the Day of Judgment.”
          </blockquote>
          <p className="text-md">[Muslim]</p>
        </div>

        {/* Project Slider */}
        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default Syria;
