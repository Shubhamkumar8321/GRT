import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function HifzSponsorship() {
  const infoCards = [
    "Thousands of orphan and poor children dream of memorising the Noble Qur'an.",
    "Sponsor a child’s Hifz education covering food, clothing, and study material.",
    "Help preserve the Qur’an by supporting students in safe, nurturing environments.",
    "Gain continuous rewards (Sadaqah Jariyah) as every verse they recite benefits you.",
  ];

  const projects = [
    { title: "Sponsor 1 Hifz Student", desc: "Support a child memorising the Qur'an.", img: malaysiaimg },
    { title: "Sponsor 5 Hifz Students", desc: "Multiply your reward by five.", img: malaysiaimg },
    { title: "Qur'an & Study Material Kit", desc: "Provide essential learning resources.", img: malaysiaimg },
    { title: "Sponsor Monthly Food Pack", desc: "Ensure nutritious meals for Hifz students.", img: malaysiaimg },
    { title: "Build a Hifz School Classroom", desc: "Create safe, dedicated learning spaces.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold">HIFZ SPONSORSHIP</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Hifz Sponsorship" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        <section className="py-10 flex justify-center">
          <iframe
            className="rounded-2xl w-[90%] md:w-[1000px] h-[500px]"
            src="https://www.youtube.com/embed/Ft0Nycw31Qo"
            title="Hifz Sponsorship Appeal"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </section>

        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Preserve the Qur'an, One Heart at a Time</h2>
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
            “The best of you are those who learn the Qur'an and teach it.”
          </blockquote>
          <p className="text-md">[Bukhari]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default HifzSponsorship;
