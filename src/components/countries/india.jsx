import React from "react";
import indiaimg from "../../assets/malaysia.jpeg";
import ProjectSlider from "../reuseable/ProjectSlider";
import DonationCard from "../reuseable/DonationCard";

function India() {
  const projects = [
    {
      title: "Clean Water for Villages",
      desc: "Provide clean, safe drinking water to remote Indian villages.",
      img: indiaimg,
    },
    {
      title: "Orphan Education Support",
      desc: "Sponsor education and school kits for underprivileged orphans.",
      img: indiaimg,
    },
    {
      title: "Ramadan Food Pack India",
      desc: "Distribute essential food packs during Ramadan to families in need.",
      img: indiaimg,
    },
    {
      title: "Medical Aid Fund",
      desc: "Supply essential medicines and healthcare aid to poverty-stricken areas.",
      img: indiaimg,
    },
    {
      title: "Winter Blanket Drive",
      desc: "Distribute warm blankets and winter clothing to vulnerable families.",
      img: indiaimg,
    },
    {
      title: "Qurbani Distribution",
      desc: "Deliver fresh Qurbani meat during Eid to poor families.",
      img: indiaimg,
    },
  ];

  const infoCards = [
    'Your donations to the "Most Needy" fund have a significant impact on vulnerable families across the globe. By contributing to this fund, you enable us to provide the best possible support to communities in need.',
    "Through your generosity, we are able to deliver emergency food supplies to families facing starvation in Yemen, provide specialist healthcare to mothers and babies in Malawi, and transform lives every day.",
    "Your kindness not only delivers immediate relief but also builds long-term solutions in areas like healthcare, clean water, food, and education for the most vulnerable.",
    "No matter how small, every donation makes a difference. Your compassion can bring hope and change to those in urgent need.",
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${indiaimg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      {/* Page Content */}
      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        {/* Hero Text */}
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center px-2">
            INDIA
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
              src={indiaimg}
              alt="Children"
              className="rounded w-full object-cover shadow"
            />
          </div>
        </div>

        {/* Info Section with Cards */}
        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-[#1E1E1E] text-center">
          <h2 className="text-3xl font-bold text-center mb-8">
            Help those where the Need is the Greatest
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
            “The parable of the believers in their affection, mercy, and
            compassion for each other is that of a body. When any limb aches,
            the whole body reacts with sleeplessness and fever.”
          </blockquote>
          <p className="text-md">[Bukhari]</p>
        </div>

        {/* Project Slider */}
        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default India;
