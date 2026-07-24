import { createContext, useContext, useState } from "react";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const isEs = lang === "es";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEs}
      aria-label={isEs ? "Switch to English" : "Switch to Spanish"}
      onClick={() => setLang(isEs ? "en" : "es")}
      className="relative flex h-7 w-16 shrink-0 items-center border border-[#a0cde1]/25 bg-[#0e2038]/60 p-0.5 transition-colors hover:border-[#7ec6e6]/50"
    >
      <span
        className={`absolute inset-y-0.5 left-0.5 w-[30px] border border-[#7ec6e6]/50 bg-[#7ec6e6]/20 transition-transform duration-200 ${
          isEs ? "translate-x-[30px]" : "translate-x-0"
        }`}
      />
      <span
        className={`relative z-10 flex w-1/2 items-center justify-center gap-1 font-mono text-[10px] transition-colors ${
          !isEs ? "text-[#eef3f2]" : "text-[#8fa9bd]/60"
        }`}
      >
        <span aria-hidden="true">🇺🇸</span>
      </span>
      <span
        className={`relative z-10 flex w-1/2 items-center justify-center gap-1 font-mono text-[10px] transition-colors ${
          isEs ? "text-[#eef3f2]" : "text-[#8fa9bd]/60"
        }`}
      >
        <span aria-hidden="true">🇪🇸</span>
      </span>
    </button>
  );
}
