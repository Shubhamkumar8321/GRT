import React from "react";
import { ArrowRight } from "lucide-react";
import malaysiaimg from "../assets/malaysia.jpeg";
import ProjectSlider from "./reuseable/ProjectSlider";

const Home = () => {
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
    <div className="font-webspecia">
      {/* Hero Section */}
      <section className="w-full min-h-[95vh] relative flex flex-col items-center justify-center text-white text-center p-4 pt-[5rem]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${malaysiaimg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/60 to-[#6EDFF6]"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">GAZA APPEAL</h1>
          <p className="text-lg mt-4 font-medium">
            With over 40,000 dead. The time to act is now.
          </p>
          <button className="bg-white text-[#6EDFF6] px-6 py-3 rounded-full mt-6 font-semibold hover:bg-gray-100">
            DONATE
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#6EDFF6] text-[#000] text-center p-8">
        <h2 className="text-2xl md:text-3xl font-bold">GRT Malaysia</h2>
        <p className="mt-4 max-w-4xl mx-auto text-lg">
          The Malaysia chapter of <strong>Global Relief Trust</strong>, dedicated to eradicating poverty, promoting education for underprivileged children, and providing comprehensive community support worldwide.
        </p>
      </section>

      {/* Impact Statistics Banner */}
      <section className="py-14 bg-[#71E0F6] text-[#1E1E1E]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-5xl font-bold animate-pulse">40K+</p>
            <p className="mt-2 text-lg">Lives Lost in Gaza</p>
          </div>
          <div>
            <p className="text-5xl font-bold animate-pulse">250+</p>
            <p className="mt-2 text-lg">Wells Built</p>
          </div>
          <div>
            <p className="text-5xl font-bold animate-pulse">5K+</p>
            <p className="mt-2 text-lg">Orphans Sponsored</p>
          </div>
          <div>
            <p className="text-5xl font-bold animate-pulse">50+</p>
            <p className="mt-2 text-lg">Ongoing Projects</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-10 flex justify-center bg-[#71E0F6]">
        <iframe
          className="rounded-2xl w-[90%] md:w-[800px] h-[450px]"
          src="https://www.youtube.com/embed/Jwu5MLGVMp0"
          title="Donation Dilemma"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>

      {/* Project Slider Section */}
      <section>
        <ProjectSlider projects={projects} />
      </section>

      {/* Quote Section */}
      <section className="py-12 text-center bg-white px-4">
        <blockquote className="text-2xl font-medium max-w-4xl mx-auto text-[#1E1E1E]">
          "The believers in their mutual kindness, compassion and sympathy are just like one body. When one of the limbs suffers, the whole body responds to it with wakefulness and fever"
        </blockquote>
        <p className="text-xl font-semibold mt-6 text-[#1E1E1E]">– Prophet Muhammad (PBUH)</p>
      </section>
    </div>
  );
};

export default Home;
