import { useTranslation } from 'react-i18next'

export const HeroButtons = () => {
  const {t} = useTranslation();

  return (
    <>
      <div className="cursor-pointer bg-white text-black rounded-xl h-[4.5rem] flex items-center select-none font-semibold italic text-2xl px-24 font-opensans ml-5">
        {t("See all my projects")}
      </div>
      
      <a href="/files/CV_AlejandroVidalCasado.pdf" target="_blank">
        <div className="cursor-pointer bg-white text-black rounded-xl h-[4.5rem] flex items-center select-none font-semibold text-2xl px-5 font-opensans ml-5">
          {t("CV")}<span className="icon-[material-symbols--download] ml-2 text-3xl" />
        </div>
      </a>
    </>
  )
}
