import React, { useState } from "react";

function DonationCard({ oneTimePlans, monthlyPlans }) {
  const [selected, setSelected] = useState("");
  const [planType, setPlanType] = useState("one-time");

  const currentAmounts = planType === "one-time" ? oneTimePlans : monthlyPlans;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Donate Now</h2>

      {/* Toggle Buttons */}
      <div className="flex mb-6 gap-3">
        <button
          onClick={() => setPlanType("one-time")}
          className={`flex-1 px-4 py-2 rounded font-semibold shadow ${
            planType === "one-time"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          } transition`}
        >
          One-time
        </button>
        <button
          onClick={() => setPlanType("monthly")}
          className={`flex-1 px-4 py-2 rounded font-semibold shadow ${
            planType === "monthly"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          } transition`}
        >
          Monthly
        </button>
      </div>

      {/* Amount Options */}
      <div className="space-y-3 mb-6">
        {currentAmounts.map((item, i) => (
          <label
            key={i}
            className={`flex items-center bg-gray-50 text-black rounded-lg p-3 cursor-pointer border ${
              selected === item.amount ? "border-blue-600" : "border-transparent"
            }`}
          >
            <input
              type="radio"
              name="donation"
              className="mr-3"
              onChange={() => setSelected(item.amount)}
            />
            <div>
              <div className="font-semibold">{item.amount}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          </label>
        ))}

        {/* Custom Amount */}
        <label
          className={`flex items-center bg-gray-50 text-black rounded-lg p-3 cursor-pointer border ${
            selected === "custom" ? "border-blue-600" : "border-transparent"
          }`}
        >
          <input
            type="radio"
            name="donation"
            className="mr-3"
            onChange={() => setSelected("custom")}
          />
          <div className="w-full">
            <div className="font-semibold mb-1">Custom Amount</div>
            <input
              type="text"
              placeholder="Enter amount"
              className="border p-2 rounded w-full text-black"
            />
          </div>
        </label>
      </div>

      {/* Comment */}
      <textarea
        placeholder="Write a comment (optional)"
        className="w-full p-3 rounded border text-black mb-4"
        rows="3"
      ></textarea>

      {/* Submit */}
      <button className="w-full bg-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-700 transition">
        Donate Now →
      </button>

      <p className="text-xs text-center mt-3 text-gray-500">Powered by Donorbox</p>
    </div>
  );
}

export default DonationCard;
