import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Brand */}
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-3 tracking-wide">
            Foodie
          </h2>
          <p className="text-sm text-orange-100 leading-relaxed">
            Delivering happiness to your doorstep. Fresh, fast & tasty food anytime.
          </p>
        </div>

        {/* Contact */}
        <div className="text-sm space-y-2">
          <h3 className="text-lg font-semibold mb-2">
            Contact
          </h3>
          <p>📍 Bagalkot, India</p>
          <p>📞 +91 80736 40695</p>
          <p className="break-all">✉ kirandhongadi7799@gmail.com</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-orange-400 text-center py-4 text-sm text-orange-100">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;