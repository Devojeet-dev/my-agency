import assets, { company_logos } from "../assets/assets";

export default function Home() {
  return (
    <section id="Home" className="relative text-center  px-6 py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden  ">
      
      {/* Background Accent Image */}
      <img
        src={assets.bgImage1}
        alt=""
        className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] opacity-30 z-0 pointer-events-none select-none dark:hidden"
      />

      {/* Top Badge */}
      <div className="inline-flex items-center justify-center gap-2 mb-4 mt-30 border border-gray-300 dark:border-gray-200  backdrop-blur-md px-4 py-2 rounded-3xl  relative  z-10">
        <img src={assets.group_profile} alt="Group profile" className="h-6" />
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Trusted by 10k+ people
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight relative z-10">
        Turning imagination into{" "}
        <span className="text-indigo-500">digital</span> impact.
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto relative z-10 text-base sm:text-lg">
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </p>

      {/* Hero Image */}
      <div className="mt-12 relative z-10">
        <img
          src={assets.hero_img}
          alt="People collaborating"
          className="rounded-2xl mx-auto max-w-full sm:max-w-4xl shadow-xl"
        />
      </div>

      {/* Company Logos */}
      <div className="mt-10 relative z-10">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          Trusted by Leading Companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {Object.entries(company_logos).map(([name, logo]) => (
            <img key={name} src={logo} alt={name} className="h-6 max-w-[120px]" />
          ))}
        </div>
      </div>
    </section>
  );
}