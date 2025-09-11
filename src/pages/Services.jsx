import React from "react";
import ServicesCard from "../components/ServicesCard";
import Heading from "../components/Heading"
import assets from "../assets/assets";

export default function Services() {
  const ServicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage, and convert.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.content_icon,
    },
    {
      title: "Content Writing",
      description: "We help you create a marketing strategy that drives results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Social Media",
      description:
        "We help you build a strong social media presence and engage with your audience.",
      icon: assets.social_icon,
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b to-white from-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Heading heading="How can we help?" para="From strategy to execution, we craft digital solutions that move your business forward."/>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {ServicesData.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg transition-colors duration-300"
          />
        ))}
      </div>
    </section>
  );
}