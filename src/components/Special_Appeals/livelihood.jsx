import React from "react";
import malaysiaimg from "../../assets/malaysia.jpeg";
import DonationCard from "../reuseable/DonationCard";
import ProjectSlider from "../reuseable/ProjectSlider";

function Livelihood() {
  const infoCards = [
    "Poverty traps families in a cycle of hardship without means to support themselves.",
    "Your donation empowers people through vocational training and startup tools.",
    "We provide sewing machines, rickshaws, livestock, and trade kits to the needy.",
    "Help families earn a dignified living and break free from generational poverty.",
  ];

  const projects = [
    { title: "Sewing Machine Project", desc: "Gift a sewing machine to a widow or single mother.", img: malaysiaimg },
    { title: "Livestock Support", desc: "Provide goats or chickens for income generation.", img: malaysiaimg },
    { title: "Auto Rickshaw Donation", desc: "Help a father start a transport business.", img: malaysiaimg },
    { title: "Small Business Kit", desc: "Fund a food cart or street vending setup.", img: malaysiaimg },
    { title: "Vocational Training Fund", desc: "Sponsor training courses for youth and women.", img: malaysiaimg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${malaysiaimg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[270px] flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold text-center">LIVELIHOOD SUPPORT</h1>
        </div>

        <div className="-mt-20 flex flex-col-reverse lg:flex-row items-start justify-center px-6">
          <div className="w-full lg:w-1/3">
            <DonationCard />
          </div>
          <div className="w-full lg:max-w-[630px]">
            <img src={malaysiaimg} alt="Livelihood Support" className="rounded w-full object-cover shadow" />
          </div>
        </div>

        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Give a Family the Gift of Independence</h2>
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
            “The best of earnings is that which a man earns with his own hands.”
          </blockquote>
          <p className="text-md">[Ahmad]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default Livelihood;
