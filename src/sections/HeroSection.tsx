import { useTranslation } from "react-i18next"
import { MiniBob } from "../components/MiniBob";
import { HeroButtons } from "../components/HeroButtons";

export const HeroSection = () => {
  const {t} = useTranslation();

  return (
    <div className="container">
        <h1 className="font-title text-6xl md:text-[7rem] font-bold leading-[1.1]">{t('Web developer')}<br/>{t('& Student')}</h1>
        <div className="flex items-center mt-5">
          <MiniBob/>
          <HeroButtons/>
        </div>
    </div>
  )
}
