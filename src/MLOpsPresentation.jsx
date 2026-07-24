import { useCallback, useEffect, useState } from "react";

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
    <div className="relative rounded-none border border-[#a0cde1]/20 bg-[#0e2038]/40 p-6 backdrop-blur-sm">
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
    <div className={`grid grid-cols-1 ${colClass} gap-5 w-full`}>
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
    <li className="flex gap-3 leading-relaxed text-[#8fa9bd]">
      <span className="mt-2 h-1 w-2.5 shrink-0 bg-[#7ec6e6]" />
      <span>{children}</span>
    </li>
  );
}

function BulletList({ children }) {
  return <ul className="max-w-2xl space-y-3">{children}</ul>;
}

function TagList({ items }) {
  return (
    <div className="mb-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8fa9bd]">
      {items.map((item) => (
        <span key={item}>
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
    <div className="flex min-w-[120px] flex-col items-center justify-center border border-[#a0cde1]/20 bg-[#0e2038]/40 px-4 py-3 text-center">
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
/*  Slides                                                                  */
/* ---------------------------------------------------------------------- */

function Slide01() {
  return (
    <Slide align="center">
      <TagList items={["Data", "Code", "Models", "Infra"]} />
      <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-[#eef3f2] md:text-6xl">
        MLOps Best Practices
      </h1>
      <p className="mb-10 max-w-2xl text-xl text-[#8fa9bd]">
        Shipping machine learning systems that stay reliable, reproducible, and
        maintainable &mdash; long after the demo.
      </p>
      <div className="font-mono text-sm text-[#8fa9bd]/70">Use &larr; &rarr; or Space to navigate</div>
    </Slide>
  );
}

function Slide02() {
  return (
    <Slide eyebrow="01 &middot; Foundations" title="What Is MLOps?">
      <Lede>
        MLOps applies the discipline of DevOps &mdash; automation, testing,
        versioning, monitoring &mdash; to the unique challenges of machine
        learning: data that changes, models that decay, and experiments that
        must be reproducible.
      </Lede>
      <Grid cols={3}>
        <Panel title="DevOps">
          Continuous integration, continuous delivery, infrastructure as code,
          automated testing.
        </Panel>
        <Panel title="Data Engineering">
          Pipelines, quality checks, versioning, and governance for the data
          feeding every model.
        </Panel>
        <Panel title="Machine Learning">
          Experimentation, training, evaluation, and the statistical nature of
          model behavior.
        </Panel>
      </Grid>
    </Slide>
  );
}

function Slide03() {
  return (
    <Slide eyebrow="01 &middot; Foundations" title="Why It Matters">
      <Lede>
        A notebook that produces a good metric is not a product. Most ML
        initiatives stall between prototype and production &mdash; not because
        the model is wrong, but because nothing around it is operationalized.
      </Lede>
      <Grid cols={2}>
        <Panel title="The prototype-to-production gap">
          Notebooks don&apos;t version data, don&apos;t handle failure, and
          don&apos;t tell you when they&apos;re wrong in production.
        </Panel>
        <Panel title="Silent failure">
          Unlike a crashing service, a model can keep returning confident,
          plausible, and wrong answers indefinitely.
        </Panel>
        <Panel title="Everything drifts">
          The world the model was trained on keeps changing after deployment
          &mdash; user behavior, upstream data, seasonality.
        </Panel>
        <Panel title="Reproducibility debt">
          Without versioned data, code, and config, &quot;it worked on my
          machine&quot; becomes &quot;it worked once, three months ago.&quot;
        </Panel>
      </Grid>
    </Slide>
  );
}

function Slide04() {
  const steps = [
    ["Collect", "raw data"],
    ["Prepare", "clean & featurize"],
    ["Train", "experiment"],
    ["Evaluate", "validate"],
    ["Deploy", "serve"],
    ["Monitor", "observe"],
  ];
  return (
    <Slide eyebrow="01 &middot; Foundations" title="The ML Lifecycle Is a Loop">
      <Lede>
        Unlike traditional software, the lifecycle never really ends at
        &quot;deploy.&quot; Production feedback continuously reshapes the next
        iteration.
      </Lede>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        {steps.map(([label, sub], i) => (
          <div key={label} className="flex items-center gap-3">
            <FlowStep label={label} sub={sub} />
            {i < steps.length - 1 && <FlowArrow />}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 font-mono text-sm text-[#8fa9bd]">
        <span className="text-lg text-[#7ec6e6]">&#8635;</span>
        Retraining feeds back into Collect &amp; Prepare
      </div>
    </Slide>
  );
}

function Slide05() {
  return (
    <Slide eyebrow="02 &middot; Reproducibility" title="Version Everything">
      <Lede>
        If you can&apos;t reconstruct exactly what produced a model, you can&apos;t
        debug it, audit it, or trust it. Four things need a version history.
      </Lede>
      <Grid cols={4}>
        <Panel title="Code">
          Git, as usual &mdash; training scripts, pipeline definitions,
          serving code.
        </Panel>
        <Panel title="Data">
          Snapshots or content-addressed references so &quot;which data
          trained this?&quot; has an exact answer.
        </Panel>
        <Panel title="Models">
          Every trained artifact, tied to the code + data + params that
          produced it.
        </Panel>
        <Panel title="Config">
          Hyperparameters, environment, and infra defined as code, not tribal
          knowledge.
        </Panel>
      </Grid>
    </Slide>
  );
}

function Slide06() {
  return (
    <Slide eyebrow="02 &middot; Reproducibility" title="Data Versioning &amp; Lineage">
      <Lede>
        Code review answers &quot;what changed and why.&quot; Data needs the
        same answer &mdash; which snapshot, transformed how, by which job.
      </Lede>
      <Grid cols={2}>
        <Panel title="Version like code">
          Tools such as DVC, LakeFS, or Delta Lake let you tag, diff, and roll
          back datasets the way Git handles source files.
        </Panel>
        <Panel title="Track lineage">
          Record which raw sources, transformations, and jobs produced each
          downstream table or feature.
        </Panel>
        <Panel title="Debug backwards">
          When a model misbehaves, lineage lets you walk back to the exact
          upstream change that caused it.
        </Panel>
        <Panel title="Enable audits">
          Regulated industries need to prove exactly what data trained a
          production model, months later.
        </Panel>
      </Grid>
    </Slide>
  );
}

function Slide07() {
  return (
    <Slide eyebrow="02 &middot; Reproducibility" title="Feature Stores">
      <Lede>
        The most common production bug in ML: features computed differently
        in training than in serving &mdash; &quot;training/serving skew.&quot;
      </Lede>
      <Grid cols={2}>
        <Panel title="Offline store">
          Historical, point-in-time correct features used to build training
          datasets.
        </Panel>
        <Panel title="Online store">
          Low-latency key-value lookups serving the same feature definitions
          at inference time.
        </Panel>
      </Grid>
      <div className="mt-9 max-w-3xl">
        <Panel title="Why it matters">
          A feature store defines each feature&apos;s logic once and reuses it
          in both paths &mdash; eliminating an entire class of silent
          production bugs.
        </Panel>
      </div>
    </Slide>
  );
}

function Slide08() {
  return (
    <Slide eyebrow="03 &middot; Experimentation" title="Track Every Experiment">
      <Lede>
        If a result isn&apos;t logged, it didn&apos;t happen. Experiment
        tracking turns ad-hoc notebook runs into a searchable, comparable
        history.
      </Lede>
      <Grid cols={3}>
        <Panel title="Parameters">
          Hyperparameters, feature sets, random seeds &mdash; the recipe for
          each run.
        </Panel>
        <Panel title="Metrics">
          Loss curves, accuracy, business metrics &mdash; logged per step, not
          just the final number.
        </Panel>
        <Panel title="Artifacts">
          Model weights, plots, and evaluation reports attached to the run
          that produced them.
        </Panel>
      </Grid>
      <p className="mt-6 font-mono text-sm text-[#8fa9bd]/70">
        Tools in this space (e.g. MLflow, Weights &amp; Biases) exist mainly
        to make &quot;which run was that?&quot; a solved problem.
      </p>
    </Slide>
  );
}

function Slide09() {
  return (
    <Slide eyebrow="03 &middot; Experimentation" title="Reproducible Environments">
      <Lede>
        &quot;Works on my machine&quot; is not acceptable for a training job
        that needs to run identically today, next month, and on a
        teammate&apos;s laptop.
      </Lede>
      <Grid cols={3}>
        <Panel title="Containers">
          Docker images pin the OS, drivers, and system libraries around the
          training/serving code.
        </Panel>
        <Panel title="Locked dependencies">
          Exact, hashed package versions &mdash; not loose ranges &mdash; so a
          rebuild resolves identically.
        </Panel>
        <Panel title="Infra as code">
          Clusters, GPUs, and networking defined in version-controlled
          templates, not clicked together by hand.
        </Panel>
      </Grid>
    </Slide>
  );
}

function Slide10() {
  return (
    <Slide eyebrow="04 &middot; Automation" title="CI for Machine Learning">
      <Lede>
        Every merge should trigger more than a lint check: data validity,
        training smoke tests, and model-quality gates before anything ships.
      </Lede>
      <CodeBlock>{`on: [pull_request]

jobs:
  validate:
    steps:
      - run: lint & unit tests
      - run: validate data schema & ranges
      - run: train on sample split
      - run: evaluate vs. baseline metrics
      - run: fail if metrics regress beyond threshold`}</CodeBlock>
    </Slide>
  );
}

function Slide11() {
  return (
    <Slide eyebrow="04 &middot; Automation" title="Deployment Strategies">
      <Lede>
        A new model is a hypothesis, not a certainty. Roll it out the way you
        would any risky change &mdash; gradually, with an escape hatch.
      </Lede>
      <Grid cols={3}>
        <Panel title="Shadow">
          The new model runs alongside production, scoring real traffic
          silently for comparison &mdash; no user impact.
        </Panel>
        <Panel title="Canary">
          A small slice of traffic is routed to the new model; expand only if
          metrics hold up.
        </Panel>
        <Panel title="Blue/Green">
          Two full environments; traffic is switched instantly, with an
          instant rollback if needed.
        </Panel>
      </Grid>
    </Slide>
  );
}

function Slide12() {
  return (
    <Slide eyebrow="04 &middot; Automation" title="Model Registry &amp; Governance">
      <Lede>
        A central, versioned catalog of models &mdash; with stage transitions
        that require approval before something reaches production.
      </Lede>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <FlowStep label="None" sub="registered" />
        <FlowArrow />
        <FlowStep label="Staging" sub="under review" />
        <FlowArrow />
        <FlowStep label="Production" sub="serving traffic" />
        <FlowArrow />
        <FlowStep label="Archived" sub="retired" />
      </div>
      <Grid cols={2}>
        <Panel title="Model cards">
          Intended use, known limitations, training data summary, and
          evaluation results travel with the model.
        </Panel>
        <Panel title="Approval workflow">
          Promotion to production requires sign-off, not a direct push from a
          notebook.
        </Panel>
      </Grid>
    </Slide>
  );
}

function Slide13() {
  return (
    <Slide eyebrow="05 &middot; Quality" title="Testing an ML System">
      <Lede>
        Unit tests alone don&apos;t catch a model that&apos;s statistically
        wrong. ML systems need their own test pyramid.
      </Lede>
      <Grid cols={2}>
        <Panel title="Data tests">
          Schema, ranges, nulls, and distribution checks on every incoming
          batch.
        </Panel>
        <Panel title="Unit tests">
          Feature transforms and pipeline code, tested like any other
          software.
        </Panel>
        <Panel title="Behavioral tests">
          Invariance and directional-expectation checks &mdash; e.g. changing
          an unrelated field shouldn&apos;t flip the prediction.
        </Panel>
        <Panel title="Integration tests">
          The full pipeline end-to-end, including serving latency and
          contract checks.
        </Panel>
      </Grid>
    </Slide>
  );
}

function Slide14() {
  return (
    <Slide eyebrow="05 &middot; Quality" title="Continuous Training">
      <Lede>
        A model trained once and never revisited is a model that will
        eventually go stale. Retraining should be a pipeline, not a fire
        drill.
      </Lede>
      <Grid cols={3}>
        <Panel title="Scheduled">
          Retrain on a fixed cadence that matches how fast the underlying data
          actually changes.
        </Panel>
        <Panel title="Triggered by drift">
          Kick off retraining automatically when input data or predictions
          drift past a threshold.
        </Panel>
        <Panel title="Triggered by decay">
          Fire when live performance metrics fall below an agreed floor.
        </Panel>
      </Grid>
    </Slide>
  );
}

function Slide15() {
  return (
    <Slide eyebrow="06 &middot; Production" title="Monitoring &amp; Observability">
      <Lede>
        A deployed model needs three layers of visibility &mdash; system
        health is not enough on its own.
      </Lede>
      <Grid cols={3}>
        <Panel title="Operational">
          Latency, throughput, error rate, resource usage &mdash; the same
          signals as any service.
        </Panel>
        <Panel title="Data &amp; prediction drift">
          Are the inputs and outputs still statistically similar to what the
          model was trained on?
        </Panel>
        <Panel title="Business impact">
          Is the model still moving the metric it was built for &mdash;
          conversions, fraud caught, churn avoided?
        </Panel>
      </Grid>
    </Slide>
  );
}

function Slide16() {
  return (
    <Slide eyebrow="06 &middot; Production" title="Data &amp; Concept Drift">
      <Lede>
        The world moves. Two related but distinct failure modes explain most
        post-deployment model decay.
      </Lede>
      <Grid cols={2}>
        <Panel title="Data drift">
          The distribution of incoming features shifts away from training
          data &mdash; new user segment, seasonal change, upstream schema
          change.
        </Panel>
        <Panel title="Concept drift">
          The relationship between features and the target itself changes
          &mdash; what used to predict the outcome no longer does.
        </Panel>
      </Grid>
      <p className="mt-6 font-mono text-sm text-[#8fa9bd]/70">
        Statistical tests on feature and prediction distributions catch drift
        before it shows up as a business metric on fire.
      </p>
    </Slide>
  );
}

function Slide17() {
  return (
    <Slide eyebrow="06 &middot; Production" title="Incident Response &amp; Rollback">
      <Lede>
        Treat a bad model deployment the way you&apos;d treat any production
        incident &mdash; with a plan decided before it happens, not during.
      </Lede>
      <Grid cols={3}>
        <Panel title="Instant rollback">
          The registry always keeps the last known-good version one command
          away from serving again.
        </Panel>
        <Panel title="Kill switch">
          A way to fall back to a simple rule-based or previous-model
          response if the new one misbehaves.
        </Panel>
        <Panel title="Postmortems">
          Blameless review of what drifted, what monitoring missed, and what
          test would have caught it.
        </Panel>
      </Grid>
    </Slide>
  );
}

function Slide18() {
  return (
    <Slide eyebrow="07 &middot; Trust" title="Security, Privacy &amp; Compliance">
      <Lede>
        Models are trained on sensitive data and make consequential decisions
        &mdash; both need explicit controls, not assumptions.
      </Lede>
      <Grid cols={2}>
        <Panel title="Access control">
          Who can read training data, pull a model artifact, or promote to
          production &mdash; scoped and audited.
        </Panel>
        <Panel title="PII handling">
          Minimize, mask, or anonymize sensitive fields wherever they enter
          the pipeline.
        </Panel>
        <Panel title="Audit trails">
          Every training run and deployment tied to who, what, and when.
        </Panel>
        <Panel title="Regulatory readiness">
          Model cards and lineage make &quot;explain this decision&quot;
          answerable instead of archaeological.
        </Panel>
      </Grid>
    </Slide>
  );
}

function Slide19() {
  return (
    <Slide eyebrow="08 &middot; People" title="Team &amp; Collaboration">
      <Lede>
        MLOps is as much an organizational practice as a technical one &mdash;
        it fails when teams throw work over the wall.
      </Lede>
      <Grid cols={4}>
        <Panel title="Data Scientists">
          Own the modeling approach and evaluation criteria.
        </Panel>
        <Panel title="ML Engineers">
          Own turning experiments into reliable, automated pipelines.
        </Panel>
        <Panel title="Data Engineers">
          Own the pipelines and quality of the data feeding everything else.
        </Panel>
        <Panel title="Platform / SRE">
          Own the infrastructure, serving, and on-call reliability.
        </Panel>
      </Grid>
      <p className="mt-6 font-mono text-sm text-[#8fa9bd]/70">
        Shared ownership of production outcomes &mdash; not a handoff at the
        model registry &mdash; is what actually keeps systems healthy.
      </p>
    </Slide>
  );
}

function Slide20() {
  const levels = [
    ["Level 0", "Manual", "Notebook-driven, manual training and deployment"],
    ["Level 1", "Pipeline automation", "Repeatable training pipelines, manual deployment"],
    ["Level 2", "CI/CD automation", "Automated build, test, and deployment of pipelines"],
    ["Level 3", "Full MLOps", "Continuous training, monitoring, and automated retraining"],
  ];
  return (
    <Slide eyebrow="09 &middot; Roadmap" title="An MLOps Maturity Model">
      <Lede>
        Maturity is a gradient, not a switch. Most organizations move through
        these stages one capability at a time.
      </Lede>
      <div className="w-full max-w-3xl space-y-3">
        {levels.map(([level, name, desc]) => (
          <div
            key={level}
            className="flex items-center gap-4 border border-[#a0cde1]/20 bg-[#0e2038]/40 px-5 py-4"
          >
            <Tag>{level}</Tag>
            <div>
              <div className="font-serif font-bold text-[#eef3f2]">{name}</div>
              <div className="text-sm text-[#8fa9bd]">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}

function Slide21() {
  return (
    <Slide align="center">
      <Eyebrow>Closing</Eyebrow>
      <h1 className="mb-6 font-serif text-3xl font-bold text-[#eef3f2] md:text-5xl">
        Key Takeaways
      </h1>
      <Grid cols={2}>
        <Panel title="Version everything">
          Code, data, models, and config &mdash; all reconstructible.
        </Panel>
        <Panel title="Automate the pipeline">
          From data validation through deployment, not just training.
        </Panel>
        <Panel title="Monitor in production">
          Drift and decay are the default; watch for them continuously.
        </Panel>
        <Panel title="Share ownership">
          MLOps succeeds as a team practice, not a handoff.
        </Panel>
      </Grid>
      <p className="mt-10 font-mono text-sm text-[#8fa9bd]">Thank you.</p>
    </Slide>
  );
}

/* ---------------------------------------------------------------------- */
/*  Quiz                                                                    */
/* ---------------------------------------------------------------------- */

function QuizSlide({ index, total, topic, question, options, correct, correctReason, wrongReasons }) {
  const [selected, setSelected] = useState(null);
  const answered = selected !== null;

  return (
    <Slide eyebrow={`Quiz · ${topic}`}>
      <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#8fa9bd]">
        Question {index} of {total}
      </div>
      <h2 className="mb-8 max-w-3xl font-serif text-2xl font-bold leading-snug text-[#eef3f2] md:text-3xl">
        {question}
      </h2>
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
        {options.map((opt, i) => {
          const letter = "ABCD"[i];
          const isCorrect = i === correct;
          const isSelected = i === selected;
          let stateClasses = "border-[#a0cde1]/20 bg-[#0e2038]/40 hover:border-[#7ec6e6]/50";
          let badge = null;
          if (answered) {
            if (isCorrect) {
              stateClasses = "border-emerald-400/60 bg-emerald-500/10";
              badge = <span className="font-mono text-emerald-300">&#10003;</span>;
            } else if (isSelected) {
              stateClasses = "border-red-400/60 bg-red-500/10";
              badge = <span className="font-mono text-red-300">&#10007;</span>;
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
              className={`flex items-start gap-3 border p-4 text-left transition-colors disabled:cursor-default ${stateClasses}`}
            >
              <span className="font-mono text-xs font-semibold text-[#7ec6e6]">{letter}</span>
              <span className="flex-1 text-sm leading-relaxed text-[#eef3f2]">{opt}</span>
              {badge}
            </button>
          );
        })}
      </div>
      {answered && (
        <div
          className={`mt-6 max-w-3xl border-l-2 pl-4 text-sm leading-relaxed ${
            selected === correct ? "border-emerald-400/60 text-emerald-200" : "border-red-400/60 text-red-200"
          }`}
        >
          {selected === correct ? correctReason : wrongReasons[selected]}
        </div>
      )}
    </Slide>
  );
}

const QUIZ_QUESTIONS = [
  {
    topic: "MLflow",
    question: "In MLflow, which of these would you log as a Parameter rather than a Metric?",
    options: [
      "The learning rate used for training",
      "The model's test accuracy",
      "A confusion matrix image",
      "The trained model file",
    ],
    correct: 0,
    correctReason:
      "Parameters are inputs you fix before training starts — a learning rate is exactly that.",
    wrongReasons: [
      null,
      "Test accuracy is measured after training finishes — that makes it a metric, not a parameter.",
      "A confusion matrix image is a file attached to the run — that's an artifact, not a parameter.",
      "The trained model file is logged as a model artifact via mlflow.log_model(), not a parameter.",
    ],
  },
  {
    topic: "MLflow",
    question: "What is the correct relationship between an MLflow Experiment and a Run?",
    options: [
      "A Run can belong to multiple Experiments at once",
      "An Experiment groups together multiple Runs of the same project",
      "A Run and an Experiment are interchangeable terms",
      "Experiments are created only after all Runs finish",
    ],
    correct: 1,
    correctReason: "An Experiment is the folder; each training run you log inside it is one Run.",
    wrongReasons: [
      "A Run belongs to exactly one Experiment — it isn't shared across several.",
      null,
      "They aren't interchangeable: an Experiment is the container, a Run is one execution logged inside it.",
      "It's the reverse — an Experiment has to exist before a Run can be logged into it.",
    ],
  },
  {
    topic: "MLflow",
    question:
      "Which MLflow function is used to save a trained model as a reusable, versioned entity in the Model Registry?",
    options: [
      "mlflow.log_metric()",
      "mlflow.log_artifact()",
      "mlflow.register_model() (or log_model(..., registered_model_name=...))",
      "mlflow.set_experiment()",
    ],
    correct: 2,
    correctReason:
      "register_model() (or log_model with registered_model_name) is what actually creates a versioned entry in the Model Registry.",
    wrongReasons: [
      "log_metric() records a scalar value like accuracy — it has nothing to do with the model registry.",
      "log_artifact() saves an arbitrary file with the run, but it doesn't create a versioned registry entry.",
      null,
      "set_experiment() just selects which experiment new runs are logged into — it doesn't save or version a model.",
    ],
  },
  {
    topic: "MLflow",
    question:
      "Why is it useful to log the same metric (e.g. F1-score) across several Runs with different hyperparameters?",
    options: [
      "It isn't useful — one Run is always enough",
      "It reduces the model's training time",
      "MLflow requires at least 3 Runs per Experiment to function",
      "It lets you compare configurations objectively instead of relying on memory",
    ],
    correct: 3,
    correctReason:
      "Logging the same metric across configurations is what turns tuning into a comparison instead of a guess.",
    wrongReasons: [
      "One run gives you a single number with nothing to compare it against — that's exactly what tracking multiple runs solves.",
      "Logging a metric only records information; it has no effect on how long training takes.",
      "MLflow has no minimum run count — an Experiment works fine with a single logged Run.",
      null,
    ],
  },
  {
    topic: "MLflow",
    question:
      "What's the main difference between what Scikit-learn does and what an experiment-tracking tool like MLflow does?",
    options: [
      "Scikit-learn performs the actual training/prediction; MLflow records what happened during that process",
      "Scikit-learn logs metadata; MLflow trains the model",
      "They do the same job, just with different syntax",
      "MLflow replaces the need for a machine learning library entirely",
    ],
    correct: 0,
    correctReason:
      "Scikit-learn does the actual modeling work; MLflow just records what happened so you can find it again later.",
    wrongReasons: [
      null,
      "That's backwards — scikit-learn does the training, MLflow does the logging.",
      "They solve different problems: one builds models, the other tracks and organizes the results of doing so.",
      "MLflow complements a library like scikit-learn — you still need it to actually build and fit models.",
    ],
  },
  {
    topic: "Preprocessing & Ensemble Methods",
    question:
      'When treating outliers with the IQR (interquartile range) method, "capping" (winsorizing) a value means:',
    options: [
      "Deleting the row that contains it",
      "Replacing it with the nearest boundary of the acceptable range instead of removing the row",
      "Replacing it with the column mean",
      "Ignoring it during training but keeping it for evaluation",
    ],
    correct: 1,
    correctReason:
      "Capping clips the value to the nearest acceptable boundary instead of throwing the row away.",
    wrongReasons: [
      "Deleting the row is a different, more destructive technique (trimming) — capping keeps the row.",
      null,
      "Replacing with the mean is a separate imputation-style choice, not what IQR capping does.",
      "Capping changes the stored value itself — it doesn't selectively hide it from just one phase.",
    ],
  },
  {
    topic: "Preprocessing & Ensemble Methods",
    question:
      "Why might engineering a ratio between two correlated numeric features (instead of using them separately) help a classifier?",
    options: [
      "It always improves accuracy regardless of the model",
      "It reduces the dataset size",
      "It can capture a relationship between the two variables that's more directly relevant to the target than either raw value alone",
      "It removes the need for a train/test split",
    ],
    correct: 2,
    correctReason:
      "A ratio can encode the relationship between two variables in a way neither raw feature captures alone.",
    wrongReasons: [
      "No engineered feature is guaranteed to help every model — it depends on the data and the target relationship.",
      "Adding a derived feature is a new column, not fewer rows — dataset size is unaffected.",
      null,
      "A ratio feature doesn't change how you evaluate the model — you still need a held-out split to check generalization.",
    ],
  },
  {
    topic: "Preprocessing & Ensemble Methods",
    question:
      "Why is it risky to reuse a single already-fitted ColumnTransformer/preprocessor object across two different model pipelines?",
    options: [
      "It isn't risky — this is the recommended approach",
      "It causes a memory leak that crashes the kernel",
      "ColumnTransformer objects can only be used once, ever, and must be deleted after",
      "Fitting it again inside the second pipeline can silently change its state, affecting the first pipeline too — use clone() to avoid this",
    ],
    correct: 3,
    correctReason:
      "Fitting a shared transformer inside a second pipeline can quietly mutate it — clone() keeps the two independent.",
    wrongReasons: [
      "It is risky — reusing a fitted transformer across pipelines is a common source of subtle bugs, not a best practice.",
      "It doesn't cause a memory leak or crash — the real failure mode is silent state corruption between the two pipelines.",
      "A transformer can be refit any number of times; the real problem is shared mutable state, not a one-use limit.",
      null,
    ],
  },
  {
    topic: "Preprocessing & Ensemble Methods",
    question: "What does handle_unknown='ignore' do when passed to a OneHotEncoder?",
    options: [
      "Prevents an error when the encoder sees a category at prediction time that it never saw during training",
      "Ignores missing values in the training set",
      "Skips encoding for columns with too many unique values",
      "Disables one-hot encoding and falls back to label encoding",
    ],
    correct: 0,
    correctReason:
      "It tells the encoder to zero-fill an unseen category at inference instead of raising an error.",
    wrongReasons: [
      null,
      "Missing values (NaNs) are a separate concern, usually handled by an imputer — not what this parameter controls.",
      "It has nothing to do with how many categories a column has — high cardinality isn't what triggers this behavior.",
      "Encoding still happens as one-hot; unseen categories are just zero-filled instead of raising an error.",
    ],
  },
  {
    topic: "Preprocessing & Ensemble Methods",
    question: "Conceptually, how does Boosting (e.g. XGBoost) differ from Bagging (e.g. Random Forest)?",
    options: [
      "Boosting trains trees independently in parallel; Bagging trains them sequentially",
      "Boosting trains trees sequentially, each one correcting the errors of the previous ones; Bagging trains trees independently on bootstrap samples",
      "Boosting only supports regression tasks",
      "There's no real difference between the two approaches",
    ],
    correct: 1,
    correctReason:
      "Boosting corrects errors sequentially, tree after tree; Bagging averages independent trees trained in parallel.",
    wrongReasons: [
      "That's the two swapped — it's Bagging that trains independently in parallel; Boosting is the sequential one.",
      null,
      "Boosting implementations like XGBoost handle both classification and regression.",
      "The two are fundamentally different in how they combine trees — sequential correction versus independent averaging.",
    ],
  },
];

const QUIZ_SLIDES = QUIZ_QUESTIONS.map((q, i) => ({
  id: `quiz-${i + 1}`,
  label: `Quiz ${i + 1} · ${q.topic}`,
  section: q.topic === "MLflow" ? 1 : 2,
  Component: () => (
    <QuizSlide
      index={i + 1}
      total={QUIZ_QUESTIONS.length}
      topic={q.topic}
      question={q.question}
      options={q.options}
      correct={q.correct}
      correctReason={q.correctReason}
      wrongReasons={q.wrongReasons}
    />
  ),
}));

/* ---------------------------------------------------------------------- */
/*  Slide registry                                                         */
/* ---------------------------------------------------------------------- */

const SLIDES = [
  { id: "title", label: "Title", section: 0, Component: Slide01 },
  ...QUIZ_SLIDES,
  { id: "what-is-mlops", label: "What Is MLOps?", section: 1, Component: Slide02 },
  { id: "why-it-matters", label: "Why It Matters", section: 1, Component: Slide03 },
  { id: "lifecycle", label: "The ML Lifecycle", section: 1, Component: Slide04 },
  { id: "version-everything", label: "Version Everything", section: 2, Component: Slide05 },
  { id: "data-lineage", label: "Data Versioning & Lineage", section: 2, Component: Slide06 },
  { id: "feature-stores", label: "Feature Stores", section: 2, Component: Slide07 },
  { id: "experiment-tracking", label: "Experiment Tracking", section: 3, Component: Slide08 },
  { id: "reproducible-envs", label: "Reproducible Environments", section: 3, Component: Slide09 },
  { id: "ci-for-ml", label: "CI for ML", section: 4, Component: Slide10 },
  { id: "deployment-strategies", label: "Deployment Strategies", section: 4, Component: Slide11 },
  { id: "model-registry", label: "Model Registry & Governance", section: 4, Component: Slide12 },
  { id: "testing-ml", label: "Testing an ML System", section: 5, Component: Slide13 },
  { id: "continuous-training", label: "Continuous Training", section: 5, Component: Slide14 },
  { id: "monitoring", label: "Monitoring & Observability", section: 6, Component: Slide15 },
  { id: "drift", label: "Data & Concept Drift", section: 6, Component: Slide16 },
  { id: "incident-response", label: "Incident Response & Rollback", section: 6, Component: Slide17 },
  { id: "security-compliance", label: "Security, Privacy & Compliance", section: 7, Component: Slide18 },
  { id: "team-collaboration", label: "Team & Collaboration", section: 8, Component: Slide19 },
  { id: "maturity-model", label: "MLOps Maturity Model", section: 9, Component: Slide20 },
  { id: "takeaways", label: "Key Takeaways", section: 10, Component: Slide21 },
];

/* ---------------------------------------------------------------------- */
/*  Presentation shell: title block, navigation, keyboard, ruler nav       */
/* ---------------------------------------------------------------------- */

export default function MLOpsPresentation() {
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;

  const goTo = useCallback(
    (index) => {
      setCurrent(Math.min(Math.max(index, 0), total - 1));
    },
    [total]
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

  const { Component } = SLIDES[current];

  const rulerGroups = [];
  SLIDES.forEach((slide, i) => {
    const lastGroup = rulerGroups[rulerGroups.length - 1];
    if (lastGroup && lastGroup.section === slide.section) {
      lastGroup.items.push({ ...slide, index: i });
    } else {
      rulerGroups.push({ section: slide.section, items: [{ ...slide, index: i }] });
    }
  });

  return (
    <div className="blueprint-grid relative flex h-screen w-screen flex-col overflow-hidden font-sans text-[#eef3f2]">
      <div className="relative flex items-center justify-between border-b border-[#a0cde1]/20 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8fa9bd] md:px-7">
        <span>MLOps Best Practices</span>
        <span>
          <span className="text-[#7ec6e6]">Sheet {current + 1}</span> of {total} &middot; Rev A
        </span>
      </div>

      <div className="relative h-[2px] w-full bg-[#a0cde1]/15">
        <div
          className="h-full bg-[#7ec6e6] transition-all duration-300"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      <div className="relative flex-1 overflow-y-auto">
        <div key={current} className="slide-enter h-full">
          <Component />
        </div>
      </div>

      <div className="relative flex items-center justify-between gap-4 border-t border-[#a0cde1]/20 bg-[#0e2038]/60 px-5 py-3.5 font-mono md:px-7">
        <button
          onClick={prev}
          disabled={current === 0}
          className="whitespace-nowrap border border-[#a0cde1]/20 px-4 py-2 text-[11px] uppercase tracking-wide text-[#eef3f2] transition-colors hover:bg-[#a0cde1]/10 disabled:opacity-30"
        >
          &lsaquo; Prev
        </button>

        <div className="flex flex-1 items-center justify-center gap-2.5 overflow-x-auto">
          {rulerGroups.map((group, gi) => (
            <div
              key={gi}
              className="flex items-center gap-1.5 border-r border-[#a0cde1]/15 pr-2.5 last:border-r-0 last:pr-0"
            >
              {group.items.map((slide) => (
                <button
                  key={slide.id}
                  onClick={() => goTo(slide.index)}
                  title={slide.label}
                  aria-label={`Go to slide ${slide.index + 1}: ${slide.label}`}
                  className={`w-[3px] shrink-0 transition-all ${
                    slide.index === current ? "h-4 bg-[#7ec6e6]" : "h-3 bg-[#a0cde1]/25 hover:bg-[#a0cde1]/50"
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
            className="whitespace-nowrap border border-[#a0cde1]/20 px-4 py-2 text-[11px] uppercase tracking-wide text-[#eef3f2] transition-colors hover:bg-[#a0cde1]/10 disabled:opacity-30"
          >
            Next &rsaquo;
          </button>
        </div>
      </div>
    </div>
  );
}
