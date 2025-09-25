import assets from "../assets/assets";

export default function Footer({ theme }) {
  return (
    <footer className="py-10 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <img src={theme === "dark" ? assets.logo_dark : assets.logo} alt="Logo" className="w-24 sm:w-32" />
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 text-gray-700 dark:text-gray-300 text-sm">
          <a
            href="#services"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Services
          </a>
          <a
            href="#ourWork"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Our Work
          </a>
          <a
            href="#contact"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </div>
        </div>

      {/* Bottom line */}
      <div className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Agency.ai . All rights reserved.
      </div>
    </footer>
  );
}
