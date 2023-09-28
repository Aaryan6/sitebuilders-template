import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-10 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="barlow font-bold text-xl">SiteBuilders</div>
        <div className="flex gap-x-6 items-center">
          <ul className="barlow md:flex gap-x-6 hidden">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="barlow bg-[#ffbf23] py-1.5 px-3 rounded-md border-2 border-black">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
