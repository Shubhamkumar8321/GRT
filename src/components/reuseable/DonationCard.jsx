import React, { useState } from "react";

function DonationCard() {
  const [planType, setPlanType] = useState("single");

  const amountPlaceholder =
    planType === "single"
      ? "Enter single donation amount"
      : "Enter regular donation amount";

  return (
    <div className="bg-white border border-[#A0A0A0] p-6 rounded shadow-lg text-[#1E1E1E] w-full">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Donation</h2>

      {/* Toggle Buttons */}
      <div className="flex mb-6 gap-3">
        <button
          onClick={() => setPlanType("single")}
          className={`flex-1 py-2 rounded font-semibold transition ${
            planType === "single"
              ? "bg-[#0068D9] text-white"
              : "bg-[#FAFAFA] text-[#1E1E1E] border border-[#A0A0A0] hover:bg-[#E8F9FD]"
          }`}
        >
          Single Payment
        </button>
        <button
          onClick={() => setPlanType("regular")}
          className={`flex-1 py-2 rounded font-semibold transition ${
            planType === "regular"
              ? "bg-[#0068D9] text-white"
              : "bg-[#FAFAFA] text-[#1E1E1E] border border-[#A0A0A0] hover:bg-[#E8F9FD]"
          }`}
        >
          Regular Payment
        </button>
      </div>

      {/* Project Location Dropdown */}
      <select className="w-full mb-4 p-3 rounded border border-[#A0A0A0] text-[#1E1E1E] bg-[#FAFAFA]">
        <option value="" disabled selected>
          Select Project Location
        </option>
        <option>Yemen</option>
        <option>Bangladesh</option>
        <option>Malawi</option>
        <option>Rohingya (Bangladesh)</option>
        <option>India</option>
        <option>Pakistan</option>
        <option>Syria</option>
        <option>Palestine</option>

      </select>

      {/* Amount Field */}
      <div className="flex items-center mb-4">
        <span className="bg-[#0068D9] text-white p-3 rounded-l font-bold">$</span>
        <input
          type="text"
          className="w-full p-3 rounded-r border border-[#A0A0A0] text-[#1E1E1E] bg-white"
          placeholder={amountPlaceholder}
        />
      </div>

      {/* Donation Category Dropdown */}
      <select className="w-full mb-5 p-3 rounded border border-[#A0A0A0] text-[#1E1E1E] bg-[#FAFAFA]">
        <option value="" disabled selected>
          Select Donation Category
        </option>
        <option>Lillah</option>
        <option>Sadaqah</option>
        <option>Zakat</option>
      </select>

      {/* Donate Now Button */}
      <button className="w-full bg-[#0068D9] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#0055B0] transition">
        ❤️ DONATE NOW
      </button>
    </div>
  );
}

export default DonationCard;
