import { Header } from "./components/Header"
import { AboutMeSection } from "./sections/AboutMeSection"
import { FooterSection } from "./sections/FooterSection"
import { HeroSection } from "./sections/HeroSection"
import { StudiesSection } from "./sections/StudiesSection"

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <HeroSection/>
      <AboutMeSection/>
      <StudiesSection/>
      <FooterSection/>
    </div>
  )
}

export default App
