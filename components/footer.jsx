import React  from "react";
import { Instagram, Github, Twitter ,Mail } from "../lib";
import Image from "next/image";
import elfoPic from "../public/elf_bgwhite.svg";

const Footer = () => {
  return (
    <footer className="p-4 bg-[#5b858f] sm:p-6 ">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0 flex content-center">
          <a href="https://codingelf.com/" className=" flex items-center">
            <div className="mx-4">
              <Image
                src={elfoPic}
                className=" h-8 rounded-md"
                width="80px"
                height="80px"
                alt="Coding Elf Logo"
              />
            </div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Coding // Elf
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 ">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Site Map
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="https://codingelf.com/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="https://codingelf.com/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 flex justify-center sm:text-center dark:text-gray-400">
          © 2022&nbsp;
          <a href="https://codingelf.com/" className="hover:underline">
          Coding Elf™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 justify-center sm:mt-0">
          <Instagram size={`25px`}/>
          <Github size={`25px`}/>
          <Twitter size={`25px`}/>
          <Mail size={`25px`}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
