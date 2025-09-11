import React from 'react';

function WorkCard({ img, WorkTitel, desc }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transform hover:scale-105 transition-transform duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
      
      {/* Image */}
      <div className="w-full h-48 overflow-hidden ">
        <img
          src={img}
          alt={WorkTitel}
          className="w-full h-full object-center"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          {WorkTitel}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {desc}
        </p>
      </div>

    </div>
  );
}

export default WorkCard;
