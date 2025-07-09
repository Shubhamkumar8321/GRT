import React from "react";
import indiaimg from "../../assets/malaysia.jpeg";  
import DonationCard from "../DonationCard";

function India() {
  const oneTimeAmounts = [
    { amount: "₹500", desc: "Support a malnourished child" },
    { amount: "₹1,200", desc: "Food Pack For 1 Family" },
    { amount: "₹5,000", desc: "Orphan Education Sponsorship" },
    { amount: "₹7,500", desc: "Medical Aid Package" },
  ];

  const monthlyAmounts = [
    { amount: "₹250", desc: "School Fees for a Child" },
    { amount: "₹800", desc: "Monthly Food Pack" },
    { amount: "₹2,000", desc: "Healthcare Support" },
  ];

  const plans = [
    {
      title: "Educational Support for Orphans",
      desc: "Providing essential educational resources and covering school fees for orphans in Kashmir, ensuring they can study without financial burdens.",
    },
    {
      title: "Ramadan Food Distribution",
      desc: "Delivering food packs to families during Ramadan, ensuring no family in need has to go hungry during this blessed month.",
    },
    {
      title: "Qurbani Meat Distribution",
      desc: "Providing fresh Qurbani meat during Eid-ul-Adha, helping families in poverty celebrate with dignity and joy.",
    },
    {
      title: "Medical Aid Programs",
      desc: "Distributing medical supplies and facilitating healthcare services to underserved communities suffering from political unrest and poverty.",
    },
    {
      title: "Winter Relief Programs",
      desc: "Supplying warm clothing and blankets to families affected by harsh winters in conflict-affected regions.",
    },
    {
      title: "Community Welfare Initiatives",
      desc: "Launching livelihood and vocational training programs to equip locals with skills for a sustainable future.",
    },
  ];

  return (
    <section className="text-gray-800">
      <div className="flex flex-col md:flex-row">
        {/* Donation Card */}
        <div className="w-full md:w-1/3 p-6">
          <DonationCard oneTimePlans={oneTimeAmounts} monthlyPlans={monthlyAmounts} />
        </div>

        {/* About Section */}
        <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">India</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The people of conflict-affected regions in India, especially in occupied Kashmir, have endured decades of
            unrest and instability. This has led to a vicious cycle of poverty and hardship, stripping families of basic necessities and a hopeful future.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Global Relief Trust is working relentlessly to break this cycle by providing orphans with free education, covering their school fees, books, and supplies — allowing them to focus on learning and building dreams.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We also distribute food packs during Ramadan, fresh Qurbani meat on Eid-ul-Adha, and winter relief packages, ensuring families can celebrate with dignity and warmth.
          </p>
          <img
            src={indiaimg}
            alt="India"
            className="rounded-xl shadow-lg mb-6 w-full object-cover max-h-[500px]"
          />
        </div>
      </div>

      {/* Program Section */}
      <div className="p-6 bg-white">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-blue-600 mb-2">{plan.title}</h3>
              <p className="text-gray-700 text-sm">{plan.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default India;
