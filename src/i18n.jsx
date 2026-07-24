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

const LANGUAGES = [
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const current = LANGUAGES.find((l) => l.code === lang);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 border border-[#a0cde1]/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-[#eef3f2] transition-colors hover:bg-[#a0cde1]/10"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span aria-hidden="true">{current.flag}</span>
        <span>{lang.toUpperCase()}</span>
        <span className="text-[#8fa9bd]">&#9662;</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div
            role="listbox"
            className="absolute right-0 z-50 mt-1 w-36 border border-[#a0cde1]/25 bg-[#0e2038] font-mono text-[11px] shadow-lg"
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                type="button"
                role="option"
                aria-selected={l.code === lang}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left transition-colors hover:bg-[#a0cde1]/10 ${
                  l.code === lang ? "text-[#7ec6e6]" : "text-[#eef3f2]"
                }`}
              >
                <span aria-hidden="true">{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
