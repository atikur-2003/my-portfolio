import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-bold text-green-500">Md. Atikur Rahman</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
