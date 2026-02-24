import React from "react";

const Footer = () => {
  return (
    <footer className="bg-brownDark text-white text-center py-3 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Lost Letters API – Crafted with 💔 by You
      </p>
    </footer>
  );
};

export default Footer;
