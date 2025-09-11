import React from 'react';

function ServicesCard({ title, description, icon }) {
  return (
    <div className="flex items-start  px-10 py-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
      {/* Icon Container */}
      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full">
        <img
          className="h-6 w-6 dark:invert"
          src={icon}
          alt={title}
        />
      </div>

      {/* Text Content */}
      <div className="ml-10">
        <h3 className="text-md font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ServicesCard;