import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function Aqeeqah() {
  const infoCards = [
    "Aqeeqah is a beautiful Sunnah act of sacrifice for newborn children.",
    "Your donation allows us to perform Aqeeqah for poor families who cannot afford it.",
    "The meat is distributed to those most in need — orphans, widows, and impoverished families.",
    "Celebrate your child’s birth by bringing joy and nourishment to the less fortunate.",
  ];

  const projects = [
    { title: "Aqeeqah for 1 Child", desc: "Perform Aqeeqah sacrifice for a child.", img: malaysiaimg },
    { title: "Meat Distribution", desc: "Deliver fresh meat to poor families.", img: malaysiaimg },
    { title: "Orphan Aqeeqah", desc: "Sponsor Aqeeqah for orphan children.", img: malaysiaimg },
    { title: "Village-wide Aqeeqah", desc: "Feed an entire community with Aqeeqah meat.", img: malaysiaimg },
    { title: "Aqeeqah for Girls & Boys", desc: "Support Sunnah for newborns with ease.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center">AQEEQAH</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3">
            <DonationCard />
          </div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Aqeeqah" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Fulfill a Beautiful Sunnah</h2>
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
            “Every child is held in pledge for his Aqeeqah which is sacrificed for him on the seventh day.”
          </blockquote>
          <p className="text-md">[Tirmidhi]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default Aqeeqah;
