import React from "react";

function ProjectCard({ title, desc, img }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition h-[420px] flex flex-col justify-between w-full max-w-[300px]">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-bold text-blue-600 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{desc}</p>
        </div>
        <div className="mt-4">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition text-sm w-full text-center">
            ❤️ Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
