// src/components/Navbar.js
export default function Navbar() {
  return (
    <nav className="sticky top-15 z-50 mx-auto max-w-7xl bg-white/70 backdrop-blur-md border border-gray-300/30 px-6 py-3 rounded-full flex items-center justify-between shadow-md">
      <div className="text-xl font-semibold text-black">
        My Portfolio
      </div>
      <ul className="flex gap-6 text-sm font-medium text-gray-700">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#project">Certificate</a></li>
        <li><a href="#experience">Experience</a></li>

        <li><a href="#volunteer">Volunteer</a></li>
      </ul>
      <div className="flex gap-3">
        <a href="#" title="LinkedIn">
          <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
        </a>
        <a href="#" title="GitHub">
          <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
        </a>
      </div>
    </nav>
  )
}
