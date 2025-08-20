import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-700 py-6 mt-10 shadow-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Company Name */}
        <div className="text-lg font-semibold text-slate-900">
          YourCompany
        </div>

       
      </div>
    </footer>
  );
}

export default Footer;
