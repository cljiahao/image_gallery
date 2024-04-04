import React from "react";

const Header = ({ button_name }: { button_name: string[] }) => {
  button_name.unshift("all");
  return (
    <div className="max-h-screen-2xl flex-center flex-col">
      <div className="flex-end h-56 flex-col">
        <p className="flex-center text-5xl">Photo Dump</p>
        <a
          href="https://www.instagram.com/kelerence"
          className="flex-center py-4"
        >
          @Kelerence {/* Add Instagram link */}
        </a>
      </div>
      <ul className="flex-between h-24 w-full md:w-[50%]">
        {button_name.map((link) => (
          <button key={link}>{link[0].toUpperCase() + link.slice(1)}</button>
        ))}
      </ul>
    </div>
  );
};

export default Header;
