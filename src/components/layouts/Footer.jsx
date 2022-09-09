import React from "react";
// tailwind footer container with company name and social media links
const Footer = () => {
  return (
    <>
      <footer className="bg-slate-800 p-5">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-2xl md:text-4xl text-white">Footer</h1>
          <nav className="flex flex-row space-x-5">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              YouTube
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
