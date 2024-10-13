import { LanguageSelector } from "./LanguageSelector";

export const Header = () => {
  return <div className="h-28 flex items-center w-full self-center">
    <div className="container text-xl flex justify-between">
      <h2>Alejandro <br /> Vidal Casado</h2>
      <ul className="flex gap-10 items-center">
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Articles</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <LanguageSelector/>
    </div>
  </div>;
};
