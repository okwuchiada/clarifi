import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const ClariFiLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/mission" },
    { name: "Team", href: "teams" },
    // { name: "Careers", href: "#" },
  ];
  const solutions = [
    { name: "For Individuals", href: "/" },
    { name: "For Media", href: "/" },
    { name: "For Education", href: "/" },
    { name: "For Enterprise", href: "/" },
  ];
  const resources = [
    { name: "Blog", href: "/" },
    { name: "Research", href: "/" },
    { name: "Documentation", href: "/" },
    { name: "Press Kit", href: "/" },
  ];
  const socials = [
    { name: "Contact Us", href: "/" },
    { name: "Twitter", href: "/" },
    { name: "LinkedIn", href: "/" },
    { name: "GitHub", href: "/" },
  ];

  return (
    <footer className="bg-navy-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">ClariFi</h3>
            <ul className="space-y-2">
              {ClariFiLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              {socials.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold">
              <span className="text-emerald-500">Clari</span>
              <span className="text-white">Fi</span>
            </div>
            <p className="text-sm mt-1">
              Bringing clarity to the digital world
            </p>
          </div>
          <div className="text-sm">
            &copy;{currentYear} <span className="text-emerald-500">Clari</span>
            <span className="text-white">Fi</span>. All rights reserved.
            <div className="mt-1">
              <a href="#" className="hover:text-emerald-400 transition mr-4">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
