import React from "react";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="font-webspecia">

      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[80vh] bg-cyan-700 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold">GAZA APPEAL</h1>
          <p className="text-lg mt-4 font-medium">With over 40,000 dead. The time to act is now.</p>
          <button className="bg-white text-cyan-700 px-6 py-3 rounded-full mt-6 font-semibold hover:bg-gray-100">
            DONATE
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-cyan-500 text-white text-center p-8">
        <h2 className="text-2xl md:text-3xl font-bold">GRT Malaysia</h2>
        <p className="mt-4 max-w-4xl mx-auto text-lg">
          The Malaysia chapter of <strong>Global Relief Trust</strong>, dedicated to eradicating poverty, promoting education for underprivileged children, and providing comprehensive community support worldwide.
        </p>
      </section>

      {/* Video Section */}
      <section className="py-10 flex justify-center bg-white">
        <iframe
          className="rounded-2xl w-[90%] md:w-[800px] h-[450px]"
          src="https://www.youtube.com/embed/Jwu5MLGVMp0"
          title="Donation Dilemma"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>

      {/* Campaigns Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Support Our Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">

          {[
            { title: "GAZA APPEAL", desc: "With over 30,000 dead, time to act is now." },
            { title: "RAMADAN APPEAL", desc: "Donate for the poor people." },
            { title: "WATER APPEAL", desc: "The gift of water is the gift of life." },
            { title: "SUPPORT AN ORPHAN", desc: "Sponsor for as little as RM 8 a day." },
            { title: "HIFZ SPONSORSHIP", desc: "Sponsor a Hifz student at RM100/month." },
            { title: "FOOD", desc: "Donate for someone's meal." },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                Image Here
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <button className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700">
                  Donate Now
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 text-center bg-white px-4">
        <blockquote className="text-2xl font-medium max-w-4xl mx-auto">
          “The believers in their mutual kindness, compassion and sympathy are just like one body. When one of the limbs suffers, the whole body responds to it with wakefulness and fever”
        </blockquote>
        <p className="text-xl font-semibold mt-6">– Prophet Muhammad (PBUH)</p>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">

          {[
            { icon: "🏫", title: "Education", desc: "Empowering tomorrow's leaders." },
            { icon: "💊", title: "Medical", desc: "Support life-saving medical projects." },
            { icon: "💧", title: "Water", desc: "Every drop counts towards restoring communities." },
            { icon: "💼", title: "Livelihood", desc: "Providing skills and training for a better tomorrow." },
          ].map((item, i) => (
            <div key={i} className="text-center border p-6 rounded-lg">
              <div className="text-5xl mb-3">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 flex items-center mx-auto">
                Read More <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Home;
