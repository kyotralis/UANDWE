import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0b0b12] border-t border-white/10 px-[5%] py-10 font-[DM Sans] overflow-x-hidden">
      
      {/* GRID */}
      <div className="grid gap-10 mb-12 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">
            <span className="text-[#ff6b1a]">UANDWE</span>
          </h2>

          <p className="text-[#8a8a9a] text-sm leading-7 mt-4 max-w-[280px]">
            {t("footer.desc")}
          </p>

          <div className="flex gap-3 mt-5">
            {["in", "𝕏", "⌥", "▶"].map((icon) => (
              <div
                key={icon}
                className="w-9 h-9 border border-white/10 rounded-md flex items-center justify-center text-[#8a8a9a] hover:text-[#ff6b1a] hover:border-[#ff6b1a] transition"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
            {t("footer.company_title")}
          </h4>
          <ul className="space-y-2">
            {["About Us", "Innovation", "Careers", "Newsroom", "Investors"].map((l) => (
              <li key={l}>
                <a className="text-sm text-[#8a8a9a] hover:text-[#ff6b1a] cursor-pointer">
                  {t(`footer.company_links.${l}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
            {t("footer.services_title")}
          </h4>
          <ul className="space-y-2">
            {["Semiconductor Eng.", "Embedded Systems", "Automotive", "AI & Software", "Consulting"].map((l) => (
              <li key={l}>
                <a className="text-sm text-[#8a8a9a] hover:text-[#ff6b1a] cursor-pointer">
                  {t(`footer.services_links.${l}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
            {t("footer.contact_title")}
          </h4>

          <div className="space-y-3 text-sm text-[#8a8a9a]">
            <p>
              <span className="text-white block text-xs uppercase">{t("footer.headquarters_label")}</span>
              {t("footer.headquarters_value")}
            </p>
            <p>
              <span className="text-white block text-xs uppercase">{t("footer.email_label")}</span>
              hello@uandwe.com
            </p>
            <p>
              <span className="text-white block text-xs uppercase">{t("footer.phone_label")}</span>
              +91 80 4200 0000
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#8a8a9a]">
        <p>{t("footer.copyright")}</p>

        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Use", "Cookies"].map((l) => (
            <a key={l} className="hover:text-[#ff6b1a] cursor-pointer">
              {t(`footer.bottom_links.${l}`)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;