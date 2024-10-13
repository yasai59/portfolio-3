import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locale/en.json";
import es from "./locale/es.json";
import jp from "./locale/jp.json";
import ca from "./locale/ca.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    jp: { translation: jp },
    ca: { translation: ca },
  },
  lng: localStorage.getItem("lang") || "en",
});
