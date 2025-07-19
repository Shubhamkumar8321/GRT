import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function StudentsOfGaza() {
  const infoCards = [
    "Thousands of children in Gaza lack access to safe schools, stationery, and essential learning resources.",
    "Your donations provide school kits, uniforms, and scholarships for orphans and displaced children.",
    "Support infrastructure repairs for bombed schools and learning centers.",
    "Help fund emergency education programs to keep children learning amid crisis.",
  ];

  const projects = [
    { title: "Sponsor Gaza Student", desc: "Fund a student's schooling and supplies.", img: malaysiaimg },
    { title: "School Kit Distribution", desc: "Provide school bags, books, and stationery.", img: malaysiaimg },
    { title: "School Renovation Gaza", desc: "Repair bombed classrooms and playgrounds.", img: malaysiaimg },
    { title: "Orphan Education Support", desc: "Sponsor orphans' education expenses.", img: malaysiaimg },
    { title: "Emergency Teacher Support", desc: "Pay teacher stipends during conflict.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold">STUDENTS OF GAZA</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3"><DonationCard /></div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Students of Gaza" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        <section className="py-10 flex justify-center">
          <iframe
            className="rounded-2xl w-[90%] md:w-[1000px] h-[500px]"
            src="https://www.youtube.com/embed/O0qriG5OxTg?autoplay=1&mute=1"
            title="Students of Gaza Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>

        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Educating Gaza’s Future</h2>
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
            “Seeking knowledge is an obligation upon every Muslim.”
          </blockquote>
          <p className="text-md">[Ibn Majah]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default StudentsOfGaza;
