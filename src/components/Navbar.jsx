import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import assets from "../assets/assets";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ theme, setTheme }) {
  const navItems = [
    { name: "Home", href: "#Home" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#ourWork" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Disclosure
      as="nav"
      className="
        fixed w-full top-0 z-50 
        bg-gradient-to-b from-teal-900 to-blue-50 dark:from-gray-900 dark:to-gray-800
        backdrop-blur-md shadow-sm
        transition-colors duration-300
      "
    >
      {({ open }) => (
        <>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src={theme === "dark" ? assets.logo_dark : assets.logo}
                  alt="Logo"
                  className="w-24 sm:w-32"
                />
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8 text-sm text-gray-700 dark:text-white">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="relative group transition-colors duration-200"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>

              {/* Right Side */}
              <div className="hidden md:flex items-center gap-4">
                <ThemeToggle theme={theme} setTheme={setTheme} />
                <a
                  href="#contact"
                  className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-colors"
                >
                  Connect →
                </a>
              </div>

              {/* Mobile Toggle */}
              <Disclosure.Button className="md:hidden text-gray-700 dark:text-white">
                {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden px-4 pb-4">
            <ul className="flex flex-col gap-4 text-sm text-gray-700 dark:text-white">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="block w-full py-2 border-b border-gray-200 dark:border-gray-700"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              <ThemeToggle theme={theme} setTheme={setTheme} />
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                Connect →
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
