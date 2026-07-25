import { useCallback, useEffect, useState } from "react";
import { LangProvider, useLang, LanguageSwitcher } from "./i18n.jsx";
import { UI, DECK, QUIZ, codeText } from "./content.js";

/* ---------------------------------------------------------------------- */
/*  Shared building blocks                                                 */
/* ---------------------------------------------------------------------- */

function Eyebrow({ children }) {
  return (
    <div className="mb-4 inline-block border-b border-[#a0cde1]/25 pb-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7ec6e6]">
      {children}
    </div>
  );
}

function SlideTitle({ children }) {
  return (
    <h1 className="mb-4 font-serif text-3xl font-bold leading-tight text-[#eef3f2] md:text-5xl">
      {children}
    </h1>
  );
}

function Lede({ children }) {
  return (
    <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[#8fa9bd]">
      {children}
    </p>
  );
}

function Panel({ title, children }) {
  return (
    <div className="relative rounded-none border border-[#a0cde1]/20 bg-[#0e2038]/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7ec6e6]/50 hover:shadow-[0_10px_28px_-8px_rgba(126,198,230,0.25)]">
      {title && (
        <h3 className="mb-2 font-serif text-lg font-bold text-[#eef3f2]">{title}</h3>
      )}
      <div className="text-sm leading-relaxed text-[#8fa9bd]">{children}</div>
    </div>
  );
}

function Grid({ children, cols = 3 }) {
  const colClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }[cols];
  const items = Array.isArray(children) ? children : [children];
  return (
    <div className={`stagger grid grid-cols-1 ${colClass} gap-5 w-full`}>
      {items.map((child, i) => (
        <div key={i} className="relative">
          <div className="pointer-events-none absolute -top-2.5 left-5 z-10 bg-[#0e2038] px-1 font-mono text-[10px] tracking-wider text-[#ff8a3d]">
            FIG. {String(i + 1).padStart(2, "0")}
          </div>
          {child}
        </div>
      ))}
    </div>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-[#8fa9bd]">
      <span className="mt-1.5 h-1 w-2.5 shrink-0 bg-[#7ec6e6]" />
      <span>{children}</span>
    </li>
  );
}

function BulletList({ items }) {
  return (
    <ul className="stagger space-y-2.5">
      {items.map((item, i) => (
        <Bullet key={i}>{item}</Bullet>
      ))}
    </ul>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-block border border-[#a0cde1]/25 px-2.5 py-1 font-mono text-[11px] text-[#eef3f2] transition-colors duration-200 hover:border-[#7ec6e6]/60 hover:bg-[#7ec6e6]/10">
      {children}
    </span>
  );
}

function TagList({ items }) {
  return (
    <div className="stagger mb-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8fa9bd]">
      {items.map((item, i) => (
        <span key={i}>
          <span className="text-[#ff8a3d]">&#9671; </span>
          {item}
        </span>
      ))}
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-block border border-[#a0cde1]/25 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#ff8a3d]">
      {children}
    </span>
  );
}

function FlowStep({ label, sub }) {
  return (
    <div className="flex min-w-[120px] flex-col items-center justify-center border border-[#a0cde1]/20 bg-[#0e2038]/40 px-4 py-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7ec6e6]/50">
      <span className="font-mono text-sm font-medium text-[#eef3f2]">{label}</span>
      {sub && <span className="mt-1 font-mono text-xs text-[#8fa9bd]">{sub}</span>}
    </div>
  );
}

function FlowArrow({ vertical = false }) {
  return (
    <div className={`flex items-center justify-center text-[#7ec6e6] ${vertical ? "rotate-90 md:rotate-0" : ""}`}>
      <span className="text-xl">&rarr;</span>
    </div>
  );
}

function CodeBlock({ children }) {
  return (
    <pre className="w-full max-w-3xl overflow-x-auto border border-[#a0cde1]/20 bg-[#081527] p-4 font-mono text-xs leading-relaxed text-emerald-300 md:text-sm">
      {children}
    </pre>
  );
}

function Slide({ eyebrow, title, lede, children, align = "start" }) {
  return (
    <div
      className={`flex h-full w-full flex-col px-8 py-12 md:px-20 ${
        align === "center"
          ? "items-center justify-center text-center"
          : "items-start justify-start pt-16 text-left md:pt-20"
      }`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && <SlideTitle>{title}</SlideTitle>}
      {lede && <Lede>{lede}</Lede>}
      <div className={`w-full ${align === "center" ? "flex flex-col items-center" : ""}`}>{children}</div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Generic slide renderer — consumes bilingual content data               */
/* ---------------------------------------------------------------------- */

function ContentSlide({ data, lang }) {
  const t = (field) => (field == null ? null : field[lang]);

  if (data.type === "hero") {
    return (
      <Slide align="center">
        <TagList items={data.tags.map(t)} />
        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-[#eef3f2] md:text-6xl">
          {t(data.title)}
        </h1>
        <p className="mb-4 max-w-2xl text-xl text-[#8fa9bd]">{t(data.subtitle)}</p>
        {data.credit && <p className="mb-8 font-mono text-xs text-[#8fa9bd]/60">{t(data.credit)}</p>}
        <div className="blink-cursor font-mono text-sm text-[#8fa9bd]/70">{t(data.hint)}</div>
      </Slide>
    );
  }

  if (data.type === "closing") {
    return (
      <Slide align="center">
        <Eyebrow>{t(data.eyebrow)}</Eyebrow>
        <h1 className="mb-6 font-serif text-3xl font-bold text-[#eef3f2] md:text-5xl">{t(data.title)}</h1>
        <Grid cols={data.cols}>
          {data.panels.map((p, i) => (
            <Panel key={i} title={t(p.title)}>
              {t(p.body)}
            </Panel>
          ))}
        </Grid>
        <p className="mt-10 font-mono text-sm text-[#8fa9bd]">{t(data.thankYou)}</p>
        {data.nextSteps && (
          <div className="mt-6 w-full max-w-4xl border border-[#a0cde1]/20 bg-[#0e2038]/40 px-5 py-3.5">
            <span className="mr-3 font-mono text-[10px] font-semibold uppercase tracking-wide text-[#7ec6e6]">
              {t(data.nextStepsTitle)}
            </span>
            <span className="font-mono text-xs text-[#8fa9bd]">
              {data.nextSteps.map((s, i) => (
                <span key={i}>
                  {i > 0 && <span className="text-[#ff8a3d]"> &middot; </span>}
                  {i + 1}. {t(s)}
                </span>
              ))}
            </span>
          </div>
        )}
      </Slide>
    );
  }

  if (data.type === "code") {
    return (
      <Slide eyebrow={t(data.eyebrow)} title={t(data.title)} lede={t(data.lede)}>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <div className="flex-1">
            <CodeBlock>{codeText(data.code, lang)}</CodeBlock>
          </div>
          {data.sidePanels && (
            <div className="flex flex-col gap-3 md:w-64 md:shrink-0">
              {data.sidePanels.map((sp, i) =>
                sp.title ? (
                  <div key={i} className="border border-[#a0cde1]/20 bg-[#0e2038]/40 p-3.5">
                    <div className="mb-1 font-mono text-xs font-semibold text-[#7ec6e6]">{t(sp.title)}</div>
                    <div className="text-xs leading-relaxed text-[#8fa9bd]">{t(sp.body)}</div>
                  </div>
                ) : (
                  <div key={i} className="border border-[#a0cde1]/20 bg-[#0e2038]/40 p-3.5 text-xs leading-relaxed text-[#8fa9bd]">
                    {t(sp)}
                  </div>
                )
              )}
            </div>
          )}
        </div>
        {data.note && <p className="mt-5 font-mono text-sm text-[#8fa9bd]/70">{t(data.note)}</p>}
      </Slide>
    );
  }

  if (data.type === "twocode") {
    return (
      <Slide eyebrow={t(data.eyebrow)} title={t(data.title)} lede={t(data.lede)}>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          {data.blocks.map((b, i) => (
            <div key={i} className="flex-1">
              <div
                className={`mb-2 font-mono text-xs font-semibold uppercase tracking-wide ${
                  b.tone === "bad" ? "text-red-300" : b.tone === "good" ? "text-emerald-300" : "text-[#7ec6e6]"
                }`}
              >
                {t(b.label)}
              </div>
              <CodeBlock>{codeText(b.code, lang)}</CodeBlock>
            </div>
          ))}
        </div>
        {data.note && <p className="mt-5 font-mono text-sm text-[#8fa9bd]/70">{t(data.note)}</p>}
      </Slide>
    );
  }

  if (data.type === "filetree") {
    return (
      <Slide eyebrow={t(data.eyebrow)} title={t(data.title)} lede={t(data.lede)}>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <div className="stagger grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
            {data.panels.map((p, i) => (
              <div key={i} className="border border-[#a0cde1]/20 bg-[#0e2038]/40 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7ec6e6]/50">
                <div className="mb-1 font-mono text-sm font-semibold text-[#eef3f2]">{t(p.title)}</div>
                <div className="text-xs leading-relaxed text-[#8fa9bd]">{t(p.body)}</div>
              </div>
            ))}
          </div>
          <div className="md:w-[360px] md:shrink-0">
            <CodeBlock>{data.tree}</CodeBlock>
          </div>
        </div>
      </Slide>
    );
  }

  if (data.type === "levels") {
    return (
      <Slide eyebrow={t(data.eyebrow)} title={t(data.title)} lede={t(data.lede)}>
        <div className="stagger w-full max-w-3xl space-y-3">
          {data.levels.map((lvl, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border border-[#a0cde1]/20 bg-[#0e2038]/40 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7ec6e6]/50 hover:shadow-[0_10px_28px_-8px_rgba(126,198,230,0.2)]"
            >
              <Tag>{t(lvl.tag)}</Tag>
              <div>
                <div className="font-serif font-bold text-[#eef3f2]">{t(lvl.name)}</div>
                <div className="text-sm text-[#8fa9bd]">{t(lvl.desc)}</div>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    );
  }

  if (data.type === "flow") {
    return (
      <Slide eyebrow={t(data.eyebrow)} title={t(data.title)} lede={t(data.lede)}>
        <div className="stagger mb-6 flex flex-wrap items-center gap-3">
          {data.steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <FlowStep label={t(step.label)} sub={t(step.sub)} />
              {i < data.steps.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>
        {data.loopNote && (
          <div className="flex items-center gap-2 font-mono text-sm text-[#8fa9bd]">
            <span className="text-lg text-[#7ec6e6]">&#8635;</span>
            {t(data.loopNote)}
          </div>
        )}
        {data.panels && (
          <Grid cols={data.cols}>
            {data.panels.map((p, i) => (
              <Panel key={i} title={t(p.title)}>
                {t(p.body)}
              </Panel>
            ))}
          </Grid>
        )}
      </Slide>
    );
  }

  if (data.type === "architecture") {
    return (
      <Slide eyebrow={t(data.eyebrow)} title={t(data.title)}>
        <div className="stagger flex flex-col items-center">
          {data.stages.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <FlowStep label={t(s.label)} sub={t(s.sub)} />
              <FlowArrow vertical />
            </div>
          ))}
          <div className="stagger grid w-full max-w-3xl grid-cols-3 gap-4 border-t border-[#a0cde1]/20 pt-4">
            {data.branches.map((b, i) => (
              <div key={i} className="flex flex-col items-center">
                <FlowStep label={t(b.label)} sub={t(b.sub)} />
                {i === data.branches.length - 1 && data.child && (
                  <>
                    <FlowArrow vertical />
                    <FlowStep label={t(data.child.label)} sub={t(data.child.sub)} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        {data.note && <p className="mt-6 max-w-4xl font-mono text-xs text-[#8fa9bd]/70">{t(data.note)}</p>}
      </Slide>
    );
  }

  if (data.type === "landscape") {
    return (
      <Slide eyebrow={t(data.eyebrow)} title={t(data.title)} lede={t(data.lede)}>
        <div className="stagger w-full space-y-3">
          {data.categories.map((c, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 border border-[#a0cde1]/20 bg-[#0e2038]/40 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7ec6e6]/50 md:flex-row md:items-center md:gap-6"
            >
              <div className="md:w-56 md:shrink-0">
                <div className="font-serif font-bold text-[#eef3f2]">{t(c.title)}</div>
                <div className="text-xs italic text-[#8fa9bd]">{t(c.desc)}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.tools.map((tool) => (
                  <Chip key={tool}>{tool}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
        {data.note && <p className="mt-5 font-mono text-xs text-[#8fa9bd]/60">{t(data.note)}</p>}
      </Slide>
    );
  }

  if (data.type === "pitfalls") {
    return (
      <Slide eyebrow={t(data.eyebrow)} title={t(data.title)} lede={t(data.lede)}>
        <Grid cols={data.cols}>
          {data.panels.map((p, i) => (
            <div key={i} className="border border-[#a0cde1]/20 bg-[#0e2038]/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7ec6e6]/50 hover:shadow-[0_10px_28px_-8px_rgba(126,198,230,0.25)]">
              <h3 className="mb-3 font-serif text-lg font-bold text-[#eef3f2]">{t(p.title)}</h3>
              <div className="mb-2 text-sm leading-relaxed text-[#8fa9bd]">
                <span className="mr-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-[#ff8a3d]">
                  {UI.problem[lang]}:
                </span>
                {t(p.problem)}
              </div>
              <div className="text-sm leading-relaxed text-[#8fa9bd]">
                <span className="mr-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-[#7ec6e6]">
                  {UI.solution[lang]}:
                </span>
                {t(p.solution)}
              </div>
            </div>
          ))}
        </Grid>
      </Slide>
    );
  }

  if (data.type === "stats") {
    return (
      <Slide eyebrow={t(data.eyebrow)} title={t(data.title)} lede={t(data.lede)}>
        <div className="stagger grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          {data.tiles.map((s, i) => (
            <div key={i} className="border border-[#a0cde1]/20 bg-[#0e2038]/40 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#7ec6e6]/50 hover:shadow-[0_10px_28px_-8px_rgba(126,198,230,0.25)]">
              <div className="font-serif text-3xl font-bold text-[#7ec6e6] md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-[#eef3f2]">{t(s.label)}</div>
              <div className="mt-2 font-mono text-[10px] text-[#8fa9bd]">{t(s.sub)}</div>
            </div>
          ))}
        </div>
        {data.highlight && (
          <div className="mt-5 flex flex-col items-center gap-2 border border-[#ff8a3d]/40 bg-[#ff8a3d]/5 px-6 py-5 text-center md:flex-row md:justify-center md:gap-4">
            <div className="font-serif text-2xl font-bold text-[#ff8a3d] md:text-3xl">{data.highlight.value}</div>
            <div className="text-sm text-[#8fa9bd]">{t(data.highlight.desc)}</div>
          </div>
        )}
        {data.wins && (
          <div className="mt-6 w-full">
            <div className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wide text-[#7ec6e6]">
              {t(data.winsTitle)}
            </div>
            <div className="stagger grid grid-cols-1 gap-2 md:grid-cols-2">
              {data.wins.map((w, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[#8fa9bd]">
                  <span className="font-mono text-emerald-300">&#10003;</span>
                  {t(w)}
                </div>
              ))}
            </div>
          </div>
        )}
      </Slide>
    );
  }

  if (data.type === "casestudy") {
    return (
      <Slide eyebrow={t(data.eyebrow)} title={t(data.title)}>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border border-[#a0cde1]/20 bg-[#0e2038]/40 p-6">
            <h3 className="mb-3 font-serif text-lg font-bold text-[#eef3f2]">{t(data.backgroundTitle)}</h3>
            <BulletList items={data.background.map(t)} />
          </div>
          <div>
            <h3 className="mb-3 font-serif text-lg font-bold text-[#eef3f2]">{t(data.challengesTitle)}</h3>
            <div className="stagger border border-[#a0cde1]/20">
              {data.challenges.map((c, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 gap-4 px-4 py-3 text-sm transition-colors duration-200 hover:bg-[#7ec6e6]/10 ${
                    i % 2 === 0 ? "bg-[#0e2038]/40" : ""
                  } ${i < data.challenges.length - 1 ? "border-b border-[#a0cde1]/20" : ""}`}
                >
                  <div className="font-semibold text-[#eef3f2]">{t(c.problem)}</div>
                  <div className="text-[#8fa9bd]">{t(c.impact)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>
    );
  }

  if (data.type === "compare") {
    return (
      <Slide eyebrow={t(data.eyebrow)} title={t(data.title)} lede={t(data.lede)}>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border border-[#a0cde1]/20 bg-[#0e2038]/40 p-6">
            <h3 className="mb-3 font-serif text-lg font-bold text-[#eef3f2]">{t(data.sharedTitle)}</h3>
            <BulletList items={data.shared.map(t)} />
          </div>
          <div>
            <h3 className="mb-3 font-serif text-lg font-bold text-[#eef3f2]">{t(data.uniqueTitle)}</h3>
            <div className="stagger space-y-3">
              {data.uniquePanels.map((p, i) => (
                <Panel key={i} title={t(p.title)}>
                  {t(p.body)}
                </Panel>
              ))}
            </div>
          </div>
        </div>
      </Slide>
    );
  }

  // type === "grid" (the common case)
  return (
    <Slide eyebrow={t(data.eyebrow)} title={t(data.title)} lede={data.stat ? null : t(data.lede)}>
      {data.stat && (
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-stretch">
          <p className="flex-1 text-lg leading-relaxed text-[#8fa9bd]">{t(data.lede)}</p>
          <div className="w-full shrink-0 border border-[#a0cde1]/20 bg-[#0e2038]/40 p-6 text-center md:w-64">
            <div className="font-serif text-5xl font-bold text-[#7ec6e6]">{data.stat.value}</div>
            <div className="mt-2 text-sm text-[#8fa9bd]">{t(data.stat.label)}</div>
            <div className="mt-3 font-mono text-[10px] text-[#8fa9bd]/60">{t(data.stat.source)}</div>
          </div>
        </div>
      )}
      <Grid cols={data.cols}>
        {data.panels.map((p, i) => (
          <Panel key={i} title={t(p.title)}>
            {t(p.body)}
          </Panel>
        ))}
      </Grid>
      {data.extraPanel && (
        <div className="mt-9 max-w-3xl">
          <Panel title={t(data.extraPanel.title)}>{t(data.extraPanel.body)}</Panel>
        </div>
      )}
      {data.note && <p className="mt-6 font-mono text-sm text-[#8fa9bd]/70">{t(data.note)}</p>}
    </Slide>
  );
}

/* ---------------------------------------------------------------------- */
/*  Quiz                                                                    */
/* ---------------------------------------------------------------------- */

function shuffledIndices(n) {
  const order = Array.from({ length: n }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

function QuizSlide({ q, index, total, lang }) {
  const t = (field) => field[lang];
  const [selected, setSelected] = useState(null);
  const [order] = useState(() => shuffledIndices(q.options.length));
  const answered = selected !== null;

  const displayOptions = order.map((i) => q.options[i]);
  const displayWrongReasons = order.map((i) => q.wrongReasons[i]);
  const displayCorrect = order.indexOf(q.correct);

  return (
    <Slide eyebrow={`${UI.quiz[lang]} · ${t(q.topic)}`}>
      <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#8fa9bd]">
        {UI.question[lang]} {index} {UI.of[lang]} {total}
      </div>
      <h2 className="mb-8 max-w-3xl font-serif text-2xl font-bold leading-snug text-[#eef3f2] md:text-3xl">
        {t(q.question)}
      </h2>
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
        {displayOptions.map((opt, i) => {
          const letter = "ABCD"[i];
          const isCorrect = i === displayCorrect;
          const isSelected = i === selected;
          let stateClasses = "border-[#a0cde1]/20 bg-[#0e2038]/40 hover:border-[#7ec6e6]/50 hover:-translate-y-0.5";
          let badge = null;
          let extraAnim = "";
          if (answered) {
            if (isCorrect) {
              stateClasses = "border-emerald-400/60 bg-emerald-500/10";
              badge = <span className="font-mono text-emerald-300 animate-pop">&#10003;</span>;
              extraAnim = "animate-glow-correct";
            } else if (isSelected) {
              stateClasses = "border-red-400/60 bg-red-500/10";
              badge = <span className="font-mono text-red-300 animate-pop">&#10007;</span>;
              extraAnim = "animate-shake";
            } else {
              stateClasses = "border-[#a0cde1]/10 bg-[#0e2038]/20 opacity-40";
            }
          }
          return (
            <button
              key={i}
              type="button"
              disabled={answered}
              onClick={() => setSelected(i)}
              className={`flex items-start gap-3 border p-4 text-left transition-all disabled:cursor-default ${stateClasses} ${extraAnim}`}
            >
              <span className="font-mono text-xs font-semibold text-[#7ec6e6]">{letter}</span>
              <span className="flex-1 text-sm leading-relaxed text-[#eef3f2]">{t(opt)}</span>
              {badge}
            </button>
          );
        })}
      </div>
      {answered && (
        <div
          className={`slide-enter mt-6 max-w-3xl border-l-2 pl-4 text-sm leading-relaxed ${
            selected === displayCorrect ? "border-emerald-400/60 text-emerald-200" : "border-red-400/60 text-red-200"
          }`}
        >
          {t(selected === displayCorrect ? q.correctReason : displayWrongReasons[selected])}
        </div>
      )}
    </Slide>
  );
}

/* ---------------------------------------------------------------------- */
/*  Slide registry                                                         */
/* ---------------------------------------------------------------------- */

const QUIZ_SLIDES = QUIZ.map((q, i) => ({
  id: `quiz-${i + 1}`,
  kind: "quiz",
  section: q.topic.en === "MLflow" ? 1 : 2,
  data: q,
  quizIndex: i + 1,
}));

const DECK_SLIDES = DECK.map((d) => ({
  id: d.id,
  kind: "content",
  section: d.section ?? 0,
  data: d,
}));

const SLIDES = [DECK_SLIDES[0], ...QUIZ_SLIDES, ...DECK_SLIDES.slice(1)];

function slideLabel(slide, lang) {
  if (slide.kind === "quiz") return `${slide.data.topic[lang]} Q${slide.quizIndex}`;
  return slide.data.title[lang];
}

/* ---------------------------------------------------------------------- */
/*  Presentation shell: title block, navigation, keyboard, ruler nav       */
/* ---------------------------------------------------------------------- */

function Presentation() {
  const { lang } = useLang();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = SLIDES.length;

  const goTo = useCallback(
    (index) => {
      const clamped = Math.min(Math.max(index, 0), total - 1);
      setDirection(clamped >= current ? 1 : -1);
      setCurrent(clamped);
    },
    [total, current]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  const slide = SLIDES[current];

  const rulerGroups = [];
  SLIDES.forEach((s, i) => {
    const lastGroup = rulerGroups[rulerGroups.length - 1];
    if (lastGroup && lastGroup.section === s.section) {
      lastGroup.items.push({ ...s, index: i });
    } else {
      rulerGroups.push({ section: s.section, items: [{ ...s, index: i }] });
    }
  });

  return (
    <div className="blueprint-grid relative flex h-screen w-screen flex-col overflow-hidden font-sans text-[#eef3f2]">
      <div className="relative flex items-center justify-between border-b border-[#a0cde1]/20 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8fa9bd] md:px-7">
        <span>{UI.brand[lang]}</span>
        <div className="flex items-center gap-4">
          <span>
            <span className="text-[#7ec6e6]">
              {UI.sheet[lang]} {current + 1}
            </span>{" "}
            {UI.of[lang]} {total} &middot; {UI.rev[lang]}
          </span>
          <LanguageSwitcher />
        </div>
      </div>

      <div className="relative h-[2px] w-full bg-[#a0cde1]/15">
        <div
          className="progress-fill h-full transition-all duration-300"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      <div className="relative flex-1 overflow-y-auto">
        <div key={current} className={`h-full ${direction === -1 ? "slide-enter-prev" : "slide-enter-next"}`}>
          {slide.kind === "quiz" ? (
            <QuizSlide q={slide.data} index={slide.quizIndex} total={QUIZ.length} lang={lang} />
          ) : (
            <ContentSlide data={slide.data} lang={lang} />
          )}
        </div>
      </div>

      <div className="relative flex items-center justify-between gap-4 border-t border-[#a0cde1]/20 bg-[#0e2038]/60 px-5 py-3.5 font-mono md:px-7">
        <button
          onClick={prev}
          disabled={current === 0}
          className="whitespace-nowrap border border-[#a0cde1]/20 px-4 py-2 text-[11px] uppercase tracking-wide text-[#eef3f2] transition-all hover:-translate-x-0.5 hover:bg-[#a0cde1]/10 active:translate-x-0 disabled:opacity-30 disabled:hover:translate-x-0"
        >
          &lsaquo; {UI.prev[lang]}
        </button>

        <div className="flex flex-1 items-center justify-center gap-2.5 overflow-x-auto">
          {rulerGroups.map((group, gi) => (
            <div
              key={gi}
              className="flex items-center gap-1.5 border-r border-[#a0cde1]/15 pr-2.5 last:border-r-0 last:pr-0"
            >
              {group.items.map((s) => (
                <button
                  key={s.id}
                  onClick={() => goTo(s.index)}
                  title={slideLabel(s, lang)}
                  aria-label={`${s.index + 1}: ${slideLabel(s, lang)}`}
                  className={`w-[3px] shrink-0 transition-all ${
                    s.index === current ? "h-4 bg-[#7ec6e6]" : "h-3 bg-[#a0cde1]/25 hover:bg-[#a0cde1]/50"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[10px] tabular-nums text-[#8fa9bd]">
            {current + 1} / {total}
          </span>
          <button
            onClick={next}
            disabled={current === total - 1}
            className="whitespace-nowrap border border-[#a0cde1]/20 px-4 py-2 text-[11px] uppercase tracking-wide text-[#eef3f2] transition-all hover:translate-x-0.5 hover:bg-[#a0cde1]/10 active:translate-x-0 disabled:opacity-30 disabled:hover:translate-x-0"
          >
            {UI.next[lang]} &rsaquo;
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MLOpsPresentation() {
  return (
    <LangProvider>
      <Presentation />
    </LangProvider>
  );
}
