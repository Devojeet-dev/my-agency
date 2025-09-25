import ServicesCard from "../components/ServicesCard";
import Heading from "../components/Heading";
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  const ServicesData = [
    {
      title: "Web Application Development",
      description:
        "Custom, scalable web apps designed for performance, security, and business growth.",
      icon: GlobeAltIcon,
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile apps that deliver seamless experiences across all devices.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "UI/UX Design",
      description:
        "Intuitive, user-centered design solutions that enhance user satisfaction and engagement.",
      icon: PaintBrushIcon,
    },
    {
      title: "API Integration",
      description:
        "Robust API integration for smooth communication between your systems and third-party services.",
      icon: CodeBracketSquareIcon,
    },
  ];

  return (
    <section
      id="services"
      className="px-6 py-16  bg-gradient-to-b to-white from-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <Heading
        heading="How can we help?"
        para="From strategy to execution, we craft digital solutions that move your business forward."
      />
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
