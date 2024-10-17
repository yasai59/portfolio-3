import { useTranslation } from 'react-i18next'
import { Subtitle } from '../components/Subtitle'
import { TechLoader } from '../components/TechLoader';
import { IconButton } from '../components/IconButton';

export const AboutMeSection = () => {

  const {t} = useTranslation();
  
  return (
    <section className="container mb-20">
      <Subtitle>{t("About me")}</Subtitle>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <div className='w-full h-full'>
          <div className='p-10 bg-[url("/images/about.svg")] bg-no-repeat bg-contain w-[48rem] h-[30rem]'>
            <div className='w-[35rem] overflow-hidden'>
            <div className='flex'>
              <div className='w-[28rem]'>
                <h3 className='text-2xl mb-5'>./Front-end</h3>
                <TechLoader techs={["JavaScript" , "React" , "Vue" , "Angular" , "Astro" , "NextJS" , "CSS" , "SASS" , "MUI" , "TailwindCSS" , "DaisyUI"]} />
              </div>
              <IconButton icon={<span className="icon-[mdi--github]" />} onClick={() => {}}/>
            </div>

            <h3 className='text-2xl mb-5 mt-10'>./Back-end</h3>
            <TechLoader techs={['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL']} />
            </div>
            <div className='w-[23rem] overflow-hidden pt-10'>
              <h3 className='text-2xl mb-5'>./Devops</h3>
              <TechLoader techs={['Linux', 'Nginx', 'Github Actions', 'Bash', 'Docker']} />
            </div>
          </div>
        </div>
        <div>
          <div className='relative'>
            <img src="/images/yo.webp" alt="a photo of a very beautiful person (me)" className='w-96 h-96 rounded-2xl' />
            <div className="w-96 h-96 border border-mygray rounded-2xl absolute top-12 left-20 rotate-[20deg] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
