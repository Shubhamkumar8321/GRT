import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function Malaysia() {
  const infoCards = [
    "Through your generous donations, we’re delivering vital food supplies to families struggling with hunger across Malaysia, especially during Ramadan and emergencies.",
    "Clean water initiatives have transformed countless lives, providing safe drinking water through new well constructions and water filtration systems in rural areas.",
    "Your compassion funds essential medical equipment for clinics and hospitals, ensuring the sick and elderly have access to life-saving healthcare services.",
    "By supporting our educational programs, you're empowering underprivileged children with opportunities for schooling, skill-building, and a brighter future.",
  ];

  const projects = [
    {
      title: "Most Needy by Country",
      desc: "Help those where the need is the greatest…by country.",
      img: malaysiaimg,
    },
    {
      title: "Water Irrigation Projects",
      desc: "Water irrigation schemes supply farming communities with reliable water sources.",
      img: malaysiaimg,
    },
    {
      title: "Give Water",
      desc: "Help those where the need is water.",
      img: malaysiaimg,
    },
    {
      title: "Sponsor an Orphan",
      desc: "Support an orphan's education and wellbeing.",
      img: malaysiaimg,
    },
    {
      title: "Ramadan Food Pack",
      desc: "Distribute food packs to families during Ramadan.",
      img: malaysiaimg,
    },
    {
      title: "Medical Aid Fund",
      desc: "Provide lifesaving medicines to those in need.",
      img: malaysiaimg,
    },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">

      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${malaysiaimg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      {/* Page Content */}
      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">

        {/* Hero Text */}
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center px-2">
            MALAYSIA
          </h1>
        </div>

        {/* Donation Form + Image */}
        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3">
            <DonationCard />
          </div>
          <div className="w-full lg:max-w-[630px]">
            <img
              src={malaysiaimg}
              alt="Malaysia Aid"
              className="rounded w-full object-cover shadow"
            />
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-[#1E1E1E] text-center">
          <h2 className="text-3xl font-bold text-center mb-8">Help Where It's Needed Most</h2>
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
          <p className="text-lg italic">The Prophet (peace and blessings be upon him) said:</p>
          <blockquote className="text-2xl font-bold my-4 leading-relaxed">
            “The parable of the believers in their affection, mercy, and compassion for each other is that of a body.
            When any limb aches, the whole body reacts with sleeplessness and fever.”
          </blockquote>
          <p className="text-md">[Bukhari]</p>
        </div>

        {/* Project Slider */}
        <ProjectSlider projects={projects} />

      </div>
    </section>
  );
}

export default Malaysia;
