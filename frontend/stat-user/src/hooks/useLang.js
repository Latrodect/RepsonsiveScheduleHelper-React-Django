import { useTranslation } from "react-i18next";

const LANGS = [
  {
    label: "en",
    icon: "/icons/uk.png",
  },
  {
    label: "tr",
    icon: "/icons/tr.png",
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
