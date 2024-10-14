import { useTranslation } from "react-i18next"
import { MiniBob } from "../components/miniBob";

export const HeroSection = () => {

  const {t} = useTranslation();

  return (
    <div className="container">
        <h1 className="font-title text-6xl md:text-[7rem] font-bold leading-[1.1]">{t('Web developer')}<br/>{t('& Student')}</h1>
        <div className="flex items-center mt-5">
          <MiniBob/>
          <div className="cursor-pointer bg-white text-black rounded-xl h-[4.5rem] flex items-center select-none font-semibold italic text-2xl px-24 font-opensans ml-5">{t("See all my projects")}</div>
          <div className="cursor-pointer bg-white text-black rounded-xl h-[4.5rem] flex items-center select-none font-semibold text-2xl px-5 font-opensans ml-5">{t("CV")}<span className="icon-[material-symbols--download] ml-2 text-3xl" /></div>

        </div>
    </div>
  )
}
