import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function MostUrgentFund() {
  const infoCards = [
    "Your donation to the Most Urgent Fund ensures we can respond immediately to critical disasters and emergencies worldwide.",
    "From food packs to emergency medical aid, your generosity reaches those who need it most — when they need it most.",
    "Help us provide shelter, clean water, and relief essentials to victims of war, floods, famine, and displacement.",
    "Every second counts in a crisis. Support now and be the lifeline families pray for in their darkest moments.",
  ];

  const projects = [
    { title: "Disaster Emergency Aid", desc: "Rapid relief for crisis-hit regions.", img: malaysiaimg },
    { title: "Urgent Medical Supplies", desc: "Provide hospitals with life-saving resources.", img: malaysiaimg },
    { title: "Emergency Food Packs", desc: "Deliver essentials to starving families.", img: malaysiaimg },
    { title: "Clean Water Access", desc: "Water solutions for disaster areas.", img: malaysiaimg },
    { title: "Temporary Shelter Support", desc: "Safe shelters for displaced families.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold">MOST URGENT FUND</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Urgent Appeal" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        {/* Video */}
        <section className="py-10 flex justify-center">
          <iframe
            className="rounded-2xl w-[90%] md:w-[1000px] h-[500px]"
            src="https://www.youtube.com/embed/3IoNv3aVI2s"
            title="Urgent Fund Appeal"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </section>

        {/* Info Cards */}
        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Help Save Lives in Crisis</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {infoCards.map((text, i) => (
              <div key={i} className="bg-white border border-[#A0A0A0] rounded-xl p-6 shadow hover:shadow-2xl transition">
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hadith */}
        <div className="bg-[#1f98c4] text-white px-6 py-14 text-center">
          <p className="text-lg italic">The Prophet ﷺ said:</p>
          <blockquote className="text-2xl font-bold my-4 leading-relaxed">
            “Whoever saves a life, it is as if he had saved mankind entirely.”
          </blockquote>
          <p className="text-md">[Qur'an 5:32]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default MostUrgentFund;
