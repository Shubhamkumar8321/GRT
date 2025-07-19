import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function Cataracts() {
  const infoCards = [
    "Millions suffer in silence due to treatable cataract blindness, especially in poor communities.",
    "Sponsor life-changing cataract surgeries for those who can’t afford medical care.",
    "Your support restores eyesight, dignity, and independence to the most vulnerable.",
    "Each surgery you fund is a Sadaqah Jariyah — continuous reward as vision is restored.",
  ];

  const projects = [
    { title: "Sponsor 1 Cataract Surgery", desc: "Restore vision for one person.", img: malaysiaimg },
    { title: "Sponsor 5 Surgeries", desc: "Transform the lives of five patients.", img: malaysiaimg },
    { title: "Medical Supplies Kit", desc: "Provide essential surgical equipment.", img: malaysiaimg },
    { title: "Sponsor Monthly Eye Camps", desc: "Support regular cataract surgery programs.", img: malaysiaimg },
    { title: "Equip an Eye Surgery Theatre", desc: "Help set up permanent eye care units.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold">CATARACT SURGERIES</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Cataract Surgery Appeal" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        <section className="py-10 flex justify-center">
          <iframe
            className="rounded-2xl w-[90%] md:w-[1000px] h-[500px]"
            src="https://www.youtube.com/embed/vBrMe2MbfgE"
            title="Cataract Surgery Appeal"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </section>

        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Restore Eyesight. Change a Life.</h2>
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
            “Whoever removes a worldly grief from a believer, Allah will remove from him one of the griefs of the Day of Resurrection.”
          </blockquote>
          <p className="text-md">[Muslim]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default Cataracts;
