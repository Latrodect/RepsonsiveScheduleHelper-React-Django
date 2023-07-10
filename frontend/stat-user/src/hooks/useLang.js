import { useTranslation } from "react-i18next";
import UKFlag from "../assets/icons/uk.png";
import TRFlag from "../assets/icons/tr.png";

const LANGS = [
  {
    label: "en",
    icon: UKFlag,
  },
  {
    label: "tr",
    icon: TRFlag,
  },
];

export default function useLang() {
  const { i18n, t } = useTranslation();
  const currentLang = localStorage.getItem("i18nextLng");

  return {
    t,
    currentLang,
    changeLang: (newLang) => i18n.changeLanguage(newLang),
    langHub: LANGS,
  };
}
