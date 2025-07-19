import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function MasjidConstruction() {
  const infoCards = [
    "Many rural and impoverished communities lack access to a safe, clean space for worship.",
    "Your donations build new masjids and restore damaged ones for communal prayers and gatherings.",
    "We provide prayer mats, Qur’ans, ablution facilities, and lighting with every masjid project.",
    "Each masjid becomes a centre for learning, community welfare, and spreading peace.",
  ];

  const projects = [
    { title: "Build a Small Masjid", desc: "Construct a 50-100 person capacity masjid.", img: malaysiaimg },
    { title: "Restore a Damaged Masjid", desc: "Repair damaged structures and roofs.", img: malaysiaimg },
    { title: "Provide Prayer Facilities", desc: "Supply mats, Qur’ans and sound systems.", img: malaysiaimg },
    { title: "Masjid Water Facility", desc: "Build ablution and water storage areas.", img: malaysiaimg },
    { title: "Masjid Solar Lighting", desc: "Install solar-powered lighting solutions.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold">MASJID CONSTRUCTION</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Masjid Construction" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        {/* Video Section */}
        <section className="py-10 flex justify-center">
          <iframe
            className="rounded-2xl w-[90%] md:w-[1000px] h-[500px]"
            src="https://www.youtube.com/embed/s8yZHwSmm14?autoplay=1&mute=1"
            title="Masjid Project Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </section>

        {/* Info Cards */}
        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Support a House of Allah</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {infoCards.map((text, i) => (
              <div key={i} className="bg-white border border-[#A0A0A0] rounded-xl p-6 shadow hover:shadow-2xl transition">
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hadith Quote */}
        <div className="bg-[#1f98c4] text-white px-6 py-14 text-center">
          <p className="text-lg italic">The Prophet ﷺ said:</p>
          <blockquote className="text-2xl font-bold my-4 leading-relaxed">
            “Whoever builds a Masjid for the sake of Allah, Allah will build for him a house in Paradise.”
          </blockquote>
          <p className="text-md">[Bukhari & Muslim]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default MasjidConstruction;
