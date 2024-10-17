import { useTranslation } from "react-i18next"
import { ContactComponent } from "../components/ContactComponent"
import { Subtitle } from "../components/Subtitle"

export const FooterSection = () => {

  const {t} = useTranslation();

  return (
    <footer className='pt-96 pb-20 overflow-hidden'>
      <div className="container flex justify-between">
        <div className="relative flex items-baseline pb-0 h-min">
          <h2 className="text-9xl text-right font-title font-bold">Alejandro<br/>Vidal</h2>
          <h4 className="absolute bottom-5 text-mygray">{t("Web developer")} <br/> {t("& Student")}</h4>
          <div className="w-[80rem] h-[70rem] border-2 border-mygray absolute rounded-3xl rotate-12 -left-[42rem] -top-32 -z-10"/>
        </div>
        <div className="w-[30%] text-lg">
          <Subtitle>
            {t("Contact")}
          </Subtitle>
          <p className="mt-20 mb-10">{t("If you would like to get in touch with me, feel free to use the following methods")}</p>
          <div className="flex justify-between">
            <div className="flex-col gap-5 flex">
              <ContactComponent 
                name={t("Email")} 
                icon={<span className="icon-[material-symbols--mail]" />} 
                link="mailto:contact@yasai59.com" 
                text="contact@yasai59.com"
              />
              <ContactComponent 
                name={t("Twitter")} 
                icon={<span 
                className="icon-[mdi--twitter]" />} 
                link="https://x.com/Yasai59_" 
                text="x/Yasai59"
              />
              <ContactComponent 
                name={t("Instagram")} 
                icon={<span 
                className="icon-[mdi--instagram]" />} 
                link="https://www.instagram.com/yasaii59/" 
                text="ig/yasaii59"
              />
            </div>
            <div className="flex-col gap-5 flex">
             <ContactComponent 
                name={t("Github")} 
                icon={<span 
                className="icon-[mdi--github]" />} 
                link="https://github.com/yasai59" 
                text="git/yasai59"
              />
             <ContactComponent 
                name={t("Linkedin")} 
                icon={<span 
                className="icon-[bi--linkedin]" />} 
                link="https://www.linkedin.com/in/yasai/" 
                text="in/yasai59"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
