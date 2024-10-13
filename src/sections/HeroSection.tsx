import { useTranslation } from "react-i18next"

export const HeroSection = () => {

  const {t} = useTranslation();

  return (
    <div className="container">
        <h1 className="font-title text-[7rem] font-bold leading-[1.1]">{t('Web developer')}<br/>{t('& Student')}</h1>
    </div>
  )
}
