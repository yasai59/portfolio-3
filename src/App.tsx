import { Header } from "./components/Header"
import { AboutMeSection } from "./sections/AboutMeSection"
import { FooterSection } from "./sections/FooterSection"
import { HeroSection } from "./sections/HeroSection"
import { StudiesSection } from "./sections/StudiesSection"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex-grow">
        <HeroSection/>
         <AboutMeSection/>
        <StudiesSection/>
      </div>
      <FooterSection/>
    </div>
  )
}

export default App
