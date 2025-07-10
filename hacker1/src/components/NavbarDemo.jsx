import React from "react";
import {
  Astronav,
  MenuItems,
  MenuIcon,
  Dropdown,
  DropdownItems,
  DropdownSubmenu,
  StickyHeader,
} from "astro-navbar/react";

export default function NavbarDemo() {
  return (
    <StickyHeader>
      <nav className="navbar-container bg-gray-800 border-b border-gray-700">
        <div className="flex justify-between items-center p-5 mx-auto container">
          <Astronav closeOnClick>
            <div className="flex items-center justify-between w-full">
              <a href="/" className="text-xl font-bold text-white">FF2 Hacker1</a>
              <MenuItems className="flex items-center">
                <ul className="flex items-center space-x-6">
                  <li className="inline-block">
                    <a href="/" className="text-white hover:text-gray-300 px-3 py-2">Home</a>
                  </li>
                  <li className="inline-block">
                    <a href="/about" className="text-white hover:text-gray-300 px-3 py-2">About</a>
                  </li>
                  <li className="inline-block relative">
                    <Dropdown className="group">
                      <button className="flex items-center gap-1 text-white hover:text-gray-300 px-3 py-2">
                        <span>Designs</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 transition-transform">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                      <DropdownItems className="dropdown-toggle">
                        <div className="bg-white w-56 border shadow-lg rounded-lg p-3 dropdown-menu">
                          <ul className="space-y-2">
                            <li>
                              <a href="/backgrounds" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">� Backgrounds</a>
                            </li>
                            <li>
                              <a href="/bulma" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">💄 Bulma Demo</a>
                            </li>
                            <li>
                              <a href="/daisyui-showcase" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">🌼 DaisyUI Showcase</a>
                            </li>
                            <li>
                              <a href="/frames" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">�️ Frames</a>
                            </li>
                            <li>
                              <DropdownSubmenu className="group/submenu relative">
                                <button className="flex w-full items-center justify-between text-left text-gray-700 hover:bg-gray-100 p-2 rounded">
                                  <span>📂 More Demos</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                  </svg>
                                </button>
                                <DropdownItems className="dropdown-toggle">
                                  <ul className="bg-white w-48 border shadow-lg rounded-lg p-2 dropdown-menu absolute top-0 left-full ml-1">
                                    <li>
                                      <a href="/starlight-showcase" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">⭐ Starlight</a>
                                    </li>
                                    <li>
                                      <a href="/starlight-css-guide" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">📚 CSS Guide</a>
                                    </li>
                                    <li>
                                      <a href="/frames-pale" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">🖼️ Frames Pale</a>
                                    </li>
                                    <li>
                                      <a href="/navbar-demo" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">🧭 Original Navbar</a>
                                    </li>
                                    <li>
                                      <a href="/markdown-demo" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">📝 Markdown Demo</a>
                                    </li>
                                  </ul>
                                </DropdownItems>
                              </DropdownSubmenu>
                            </li>
                            <li>
                              <a href="/site-design" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">🎯 Site Design</a>
                            </li>
                            <li>
                              <a href="/site-engineering" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">⚙️ Engineering</a>
                            </li>
                          </ul>
                        </div>
                      </DropdownItems>
                    </Dropdown>
                  </li>
                  <li className="inline-block">
                    <a href="/blog" className="text-white hover:text-gray-300 px-3 py-2">Blog</a>
                  </li>
                  <li className="inline-block">
                    <a href="/contact" className="text-white hover:text-gray-300 px-3 py-2">Contact</a>
                  </li>
                </ul>
              </MenuItems>
            </div>
          </Astronav>
        </div>
      </nav>
    </StickyHeader>
  );
}
