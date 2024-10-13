import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LangOption from "./LangOption";

export const LanguageSelector = () => {
  const {i18n: {changeLanguage, language}} = useTranslation();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [ayuda, setAyuda] = useState<boolean>(false);
  const ref = useRef(null);

  const handleClick = () => {
    // if the click was made for focus, we don't want to close the menu
    if (document.activeElement === ref.current && !ayuda) {
      setAyuda(true);
      return;
    };
    setMenuOpen(!menuOpen);
  }

  const handleBlur = () => {
      setAyuda(false);
      setMenuOpen(false)
  }

  const handleChangeLanguage = (lang: string) => {
    localStorage.setItem("lang", lang);
    changeLanguage(lang);
    setMenuOpen(false);
  }

  return <>
  <div className="flex flex-col justify-center select-none relative">
    <div className="flex items-center cursor-pointer" onFocus={() => setMenuOpen(true)} onClick={handleClick} onBlur={handleBlur} tabIndex={0} ref={ref}>
      <img src={`/images/flags/${language}.svg`} alt="current language flag" className="w-10" draggable={false} />
      <i className={`icon-[tabler--chevron-down] ml-2 transition-transform ${menuOpen ? "rotate-180" : "rotate-0"}`} />
    </div>
    <div className={`grid grid-cols-2 absolute w-52 top-full right-0 border border-gray-500 bg-gray-500 gap-[1px] rounded-lg cursor-pointer overflow-hidden ${!menuOpen && "hidden"}`}>
      <LangOption callback={handleChangeLanguage} lang={{code: "es", name: "Español"}}/>
      <LangOption callback={handleChangeLanguage} lang={{code: "en", name: "English"}}/>
      <LangOption callback={handleChangeLanguage} lang={{code: "jp", name: "日本語"}}/>
      <LangOption callback={handleChangeLanguage} lang={{code: "ca", name: "Català"}}/>
    </div>
  </div>
  </>
};
