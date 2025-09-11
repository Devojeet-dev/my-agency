import React from 'react';
import Heading from "../components/Heading";
import WorkCard from "../components/WorkCard";
import assets from "../assets/assets"; // Import your assets

function OurWork() {
  // Work Data Array
  const workData = [
    {
      img: assets.work_dashboard_management,
      WorkTitel: "Dashboard Management System",
      desc: "A modern web-based dashboard for managing business operations, with real-time analytics and reporting tools."
    },
    {
      img: assets.work_mobile_app,
      WorkTitel: "Custom Mobile Application",
      desc: "A feature-rich, cross-platform mobile app designed to enhance user engagement and provide seamless functionality."
    },
    {
      img: assets.work_fitness_app,
      WorkTitel: "Fitness Tracking Application",
      desc: "An intuitive fitness app with personalized workout plans, progress tracking, and social sharing features."
    }
  ];

  return (
    <>
      {/* Section Heading */}
      <div className='bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 '>
        <Heading 
        heading="Our Latest Work" 
        para="From strategy to execution, we craft digital solutions that move your business forward." 
      />

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {workData.map((work, index) => (
          <WorkCard
            key={index}
            img={work.img}
            WorkTitel={work.WorkTitel}
            desc={work.desc}
          />
        ))}
      </div>
      </div>
    </>
  );
}

export default OurWork;
