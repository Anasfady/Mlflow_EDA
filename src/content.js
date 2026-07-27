export const UI = {
  brand: { en: "MLOps Best Practices", es: "Mejores Prácticas de MLOps" },
  sheet: { en: "Sheet", es: "Hoja" },
  of: { en: "of", es: "de" },
  rev: { en: "Rev A", es: "Rev A" },
  prev: { en: "Prev", es: "Anterior" },
  next: { en: "Next", es: "Siguiente" },
  question: { en: "Question", es: "Pregunta" },
  quiz: { en: "Quiz", es: "Cuestionario" },
  problem: { en: "Problem", es: "Problema" },
  solution: { en: "Solution", es: "Solución" },
  downloadPdf: { en: "Download PDF", es: "Descargar PDF" },
};

function codeText(field, lang) {
  return typeof field === "string" ? field : field[lang];
}
export { codeText };

/* ---------------------------------------------------------------------- */
/*  Main deck                                                              */
/* ---------------------------------------------------------------------- */

export const DECK = [
  {
    id: "title",
    type: "hero",
    tags: [
      { en: "Data", es: "Datos" },
      { en: "Code", es: "Código" },
      { en: "Models", es: "Modelos" },
      { en: "Infra", es: "Infraestructura" },
    ],
    title: { en: "MLOps Best Practices", es: "Mejores Prácticas de MLOps" },
    subtitle: {
      en: "Shipping machine learning systems that stay reliable, reproducible, and maintainable — long after the demo.",
      es: "Llevar a producción sistemas de machine learning que sigan siendo confiables, reproducibles y mantenibles, mucho después de la demo.",
    },
    credit: {
      en: "Adapted from an article by Yadidiah Kanaparthi",
      es: "Adaptado de un artículo de Yadidiah Kanaparthi",
    },
    hint: {
      en: "Use ← → or Space to navigate",
      es: "Usa ← → o Espacio para navegar",
    },
  },

  /* ---------------------------- 01 · Foundations ---------------------- */
  {
    id: "what-is-mlops",
    type: "grid",
    section: 1,
    eyebrow: { en: "01 · Foundations", es: "01 · Fundamentos" },
    title: { en: "What Is MLOps?", es: "¿Qué es MLOps?" },
    lede: {
      en: "MLOps applies the discipline of DevOps — automation, testing, versioning, monitoring — to the unique challenges of machine learning: data that changes, models that decay, and experiments that must be reproducible.",
      es: "MLOps aplica la disciplina de DevOps —automatización, pruebas, versionado, monitoreo— a los desafíos particulares del machine learning: datos que cambian, modelos que se degradan y experimentos que deben ser reproducibles.",
    },
    cols: 3,
    panels: [
      {
        title: { en: "DevOps", es: "DevOps" },
        body: {
          en: "Continuous integration, continuous delivery, infrastructure as code, automated testing.",
          es: "Integración continua, entrega continua, infraestructura como código y pruebas automatizadas.",
        },
      },
      {
        title: { en: "Data Engineering", es: "Ingeniería de Datos" },
        body: {
          en: "Pipelines, quality checks, versioning, and governance for the data feeding every model.",
          es: "Pipelines de datos, controles de calidad, versionado y gobernanza para los datos que alimentan cada modelo.",
        },
      },
      {
        title: { en: "Machine Learning", es: "Machine Learning" },
        body: {
          en: "Experimentation, training, evaluation, and the statistical nature of model behavior.",
          es: "Experimentación, entrenamiento, evaluación y la naturaleza estadística del comportamiento del modelo.",
        },
      },
    ],
  },
  {
    id: "mlops-vs-devops",
    type: "compare",
    section: 1,
    eyebrow: { en: "01 · Foundations", es: "01 · Fundamentos" },
    title: {
      en: "MLOps vs. DevOps: What's Different",
      es: "MLOps vs. DevOps: Qué Cambia",
    },
    lede: {
      en: "MLOps grew out of DevOps — but machine learning introduces failure modes software engineering doesn't have.",
      es: "MLOps surgió de DevOps, pero el machine learning introduce modos de fallo que la ingeniería de software tradicional no tiene.",
    },
    sharedTitle: { en: "Shared Principles", es: "Principios Compartidos" },
    shared: [
      { en: "Process automation", es: "Automatización de procesos" },
      {
        en: "Continuous integration & deployment",
        es: "Integración y despliegue continuos",
      },
      {
        en: "Collaboration & communication",
        es: "Colaboración y comunicación",
      },
      { en: "Scalability & reliability", es: "Escalabilidad y confiabilidad" },
      {
        en: "Monitoring & feedback loops",
        es: "Monitoreo y ciclos de retroalimentación",
      },
    ],
    uniqueTitle: { en: "Unique to MLOps", es: "Exclusivo de MLOps" },
    uniquePanels: [
      {
        title: { en: "Reproducibility", es: "Reproducibilidad" },
        body: {
          en: "Same code + same data can still give different results — version data, seeds, hyperparameters, and environment.",
          es: "El mismo código y los mismos datos aún pueden dar resultados distintos: versiona datos, semillas, hiperparámetros y entorno.",
        },
      },
      {
        title: {
          en: "Scaling Training & Inference",
          es: "Escalar Entrenamiento e Inferencia",
        },
        body: {
          en: "Training needs specialized hardware (GPUs); serving must stay fast and cheap enough to be worth it.",
          es: "El entrenamiento necesita hardware especializado (GPUs); el servicio debe ser rápido y barato para que valga la pena.",
        },
      },
      {
        title: { en: "Model Drift", es: "Drift del Modelo" },
        body: {
          en: "Accuracy degrades as real-world data shifts away from what the model was trained on.",
          es: "La precisión se degrada cuando los datos reales se alejan de aquello con lo que se entrenó el modelo.",
        },
      },
      {
        title: { en: "Team Composition", es: "Composición del Equipo" },
        body: {
          en: "Researchers and production engineers have different skills and paces — they have to learn to work together.",
          es: "Investigadores e ingenieros de producción tienen habilidades y ritmos distintos; deben aprender a trabajar juntos.",
        },
      },
    ],
  },
  {
    id: "why-it-matters",
    type: "grid",
    section: 1,
    eyebrow: { en: "01 · Foundations", es: "01 · Fundamentos" },
    title: { en: "Why It Matters", es: "Por Qué Importa" },
    lede: {
      en: "A notebook that produces a good metric is not a product. Most ML initiatives stall between prototype and production — not because the model is wrong, but because nothing around it is operationalized.",
      es: "Un notebook que produce una buena métrica no es un producto. La mayoría de las iniciativas de ML se estancan entre el prototipo y la producción, no porque el modelo esté mal, sino porque nada a su alrededor está operacionalizado.",
    },
    stat: {
      value: "85%",
      label: {
        en: "of ML projects never reach production",
        es: "de los proyectos de ML nunca llegan a producción",
      },
      source: { en: "— Gartner, 2023", es: "— Gartner, 2023" },
    },
    cols: 2,
    panels: [
      {
        title: {
          en: "The prototype-to-production gap",
          es: "La brecha entre prototipo y producción",
        },
        body: {
          en: "Notebooks don't version data, don't handle failure, and don't tell you when they're wrong in production.",
          es: "Los notebooks no versionan datos, no manejan fallos y no avisan cuando se equivocan en producción.",
        },
      },
      {
        title: { en: "Silent failure", es: "Fallo silencioso" },
        body: {
          en: "Unlike a crashing service, a model can keep returning confident, plausible, and wrong answers indefinitely.",
          es: "A diferencia de un servicio que se cae, un modelo puede seguir devolviendo respuestas seguras, plausibles y equivocadas indefinidamente.",
        },
      },
      {
        title: { en: "Untracked iteration", es: "Iteración sin registro" },
        body: {
          en: "Dozens of notebook reruns with tweaked parameters, but no record of which one actually produced the reported number.",
          es: "Docenas de reejecuciones del notebook con parámetros ajustados, pero sin registro de cuál produjo realmente el número reportado.",
        },
      },
      {
        title: { en: "Reproducibility debt", es: "Deuda de reproducibilidad" },
        body: {
          en: 'Without versioned data, code, and config, "it worked on my machine" becomes "it worked once, three months ago."',
          es: "Sin datos, código y configuración versionados, «funcionó en mi máquina» se convierte en «funcionó una vez, hace tres meses».",
        },
      },
    ],
  },
  {
    id: "lifecycle",
    type: "flow",
    section: 1,
    eyebrow: { en: "01 · Foundations", es: "01 · Fundamentos" },
    title: {
      en: "The ML Lifecycle Is a Loop",
      es: "El Ciclo de Vida del ML Es un Bucle",
    },
    lede: {
      en: 'Unlike traditional software, the lifecycle never really ends at "deploy." Production feedback continuously reshapes the next iteration.',
      es: "A diferencia del software tradicional, el ciclo de vida nunca termina realmente en el «despliegue». La retroalimentación de producción reconfigura continuamente la siguiente iteración.",
    },
    steps: [
      {
        label: { en: "Collect", es: "Recolectar" },
        sub: { en: "raw data", es: "datos crudos" },
      },
      {
        label: { en: "Prepare", es: "Preparar" },
        sub: { en: "clean & featurize", es: "limpiar y crear variables" },
      },
      {
        label: { en: "Train", es: "Entrenar" },
        sub: { en: "experiment", es: "experimentar" },
      },
      {
        label: { en: "Evaluate", es: "Evaluar" },
        sub: { en: "validate", es: "validar" },
      },
      {
        label: { en: "Deploy", es: "Desplegar" },
        sub: { en: "serve", es: "servir" },
      },
      {
        label: { en: "Monitor", es: "Monitorear" },
        sub: { en: "observe", es: "observar" },
      },
    ],
    loopNote: {
      en: "Retraining feeds back into Collect & Prepare",
      es: "El reentrenamiento retroalimenta a Recolectar y Preparar",
    },
  },
  {
    id: "tool-landscape",
    type: "landscape",
    section: 1,
    eyebrow: { en: "01 · Foundations", es: "01 · Fundamentos" },
    title: {
      en: "The MLOps Tool Landscape",
      es: "El Panorama de Herramientas de MLOps",
    },
    lede: {
      en: "Beyond MLflow and DVC — a broader ecosystem covers every stage of the ML lifecycle.",
      es: "Más allá de MLflow y DVC: un ecosistema más amplio cubre cada etapa del ciclo de vida del ML.",
    },
    categories: [
      {
        title: { en: "Notebooks & Frameworks", es: "Notebooks y Frameworks" },
        desc: {
          en: "prototype models and write the training code",
          es: "prototipar modelos y escribir el código de entrenamiento",
        },
        tools: ["Jupyter", "TensorFlow", "PyTorch"],
      },
      {
        title: { en: "Experiment Tracking", es: "Seguimiento de Experimentos" },
        desc: {
          en: "log runs, metrics, and artifacts",
          es: "registra ejecuciones, métricas y artefactos",
        },
        tools: ["MLflow", "Weights & Biases"],
      },
      {
        title: {
          en: "Orchestration & Pipelines",
          es: "Orquestación y Pipelines",
        },
        desc: {
          en: "schedule and chain pipeline steps",
          es: "programa y encadena los pasos del pipeline",
        },
        tools: ["Airflow", "Prefect", "Kubeflow"],
      },
      {
        title: {
          en: "Data & Feature Versioning",
          es: "Versionado de Datos y Variables",
        },
        desc: {
          en: "version datasets and serve consistent features",
          es: "versiona conjuntos de datos y sirve variables consistentes",
        },
        tools: ["DVC", "Pachyderm", "Feast"],
      },
    ],
    note: {
      en: 'Source: InfluxData, "MLOps: A Comprehensive Guide to Machine Learning Operations"',
      es: "Fuente: InfluxData, «MLOps: A Comprehensive Guide to Machine Learning Operations»",
    },
  },

  /* ------------------------- 02 · Reproducibility ---------------------- */
  {
    id: "version-everything",
    type: "grid",
    section: 2,
    eyebrow: { en: "02 · Reproducibility", es: "02 · Reproducibilidad" },
    title: { en: "Version Everything", es: "Versiona Todo" },
    lede: {
      en: "If you can't reconstruct exactly what produced a model, you can't debug it, audit it, or trust it. Four things need a version history.",
      es: "Si no puedes reconstruir exactamente qué produjo un modelo, no puedes depurarlo, auditarlo ni confiar en él. Cuatro cosas necesitan un historial de versiones.",
    },
    cols: 4,
    panels: [
      {
        title: { en: "Code", es: "Código" },
        body: {
          en: "Git, as usual — training scripts, pipeline definitions, serving code.",
          es: "Git, como siempre: scripts de entrenamiento, definiciones de pipelines, código de servicio.",
        },
      },
      {
        title: { en: "Data", es: "Datos" },
        body: {
          en: '"Which data trained this?" needs an exact answer — snapshots or content-addressed references.',
          es: "«¿Qué datos entrenaron esto?» necesita una respuesta exacta: instantáneas o referencias direccionadas por contenido.",
        },
      },
      {
        title: { en: "Models", es: "Modelos" },
        body: {
          en: "Every trained artifact, tied to the code + data + params that produced it.",
          es: "Cada artefacto entrenado, vinculado al código + datos + parámetros que lo produjeron.",
        },
      },
      {
        title: { en: "Config", es: "Configuración" },
        body: {
          en: "Hyperparameters, environment, and infra defined as code, not tribal knowledge.",
          es: "Hiperparámetros, entorno e infraestructura definidos como código, no como conocimiento tribal.",
        },
      },
    ],
  },
  {
    id: "data-lineage",
    type: "grid",
    section: 2,
    eyebrow: { en: "02 · Reproducibility", es: "02 · Reproducibilidad" },
    title: {
      en: "Data Versioning & Lineage",
      es: "Versionado de Datos y Linaje",
    },
    lede: {
      en: 'Code review answers "what changed and why." Data needs the same answer — which snapshot, transformed how, by which job.',
      es: "La revisión de código responde «qué cambió y por qué». Los datos necesitan la misma respuesta: qué instantánea, transformada cómo, por qué proceso.",
    },
    cols: 2,
    panels: [
      {
        title: { en: "Version like code", es: "Versiona como el código" },
        body: {
          en: "Tools such as DVC, LakeFS, or Delta Lake let you tag, diff, and roll back datasets the way Git handles source files.",
          es: "Herramientas como DVC, LakeFS o Delta Lake permiten etiquetar, comparar y revertir conjuntos de datos igual que Git maneja los archivos fuente.",
        },
      },
      {
        title: { en: "Track lineage", es: "Rastrea el linaje" },
        body: {
          en: "Record which raw sources, transformations, and jobs produced each downstream table or feature.",
          es: "Registra qué fuentes crudas, transformaciones y procesos produjeron cada tabla o variable derivada.",
        },
      },
      {
        title: { en: "Debug backwards", es: "Depura hacia atrás" },
        body: {
          en: "When a model misbehaves, lineage lets you walk back to the exact upstream change that caused it.",
          es: "Cuando un modelo se comporta mal, el linaje permite rastrear hacia atrás hasta el cambio exacto que lo causó.",
        },
      },
      {
        title: { en: "Enable audits", es: "Habilita auditorías" },
        body: {
          en: "Regulated industries need to prove exactly what data trained a production model, months later.",
          es: "Las industrias reguladas necesitan probar exactamente qué datos entrenaron un modelo en producción, meses después.",
        },
      },
    ],
  },
  {
    id: "dvc-in-practice",
    type: "twocode",
    section: 2,
    eyebrow: { en: "02 · Reproducibility", es: "02 · Reproducibilidad" },
    title: { en: "DVC in Practice", es: "DVC en la Práctica" },
    lede: {
      en: "Version datasets and pipelines alongside Git — reproducible by construction.",
      es: "Versiona conjuntos de datos y pipelines junto con Git: reproducibles por diseño.",
    },
    blocks: [
      {
        label: { en: "Terminal", es: "Terminal" },
        code: {
          en: `# version a dataset
dvc add data/train.csv
git add data/train.csv.dvc
git commit -m "Add training data v1"

# run the full pipeline
dvc repro`,
          es: `# versiona un conjunto de datos
dvc add data/train.csv
git add data/train.csv.dvc
git commit -m "Add training data v1"

# ejecuta el pipeline completo
dvc repro`,
        },
      },
      {
        label: {
          en: "dvc.yaml — pipeline definition",
          es: "dvc.yaml — definición del pipeline",
        },
        code: `stages:
  preprocess:
    cmd: python src/data/preprocessing.py
    deps:
      - src/data/preprocessing.py
      - data/raw/transactions.csv
    outs:
      - data/processed/clean.csv
  train:
    cmd: python src/models/train.py
    deps:
      - src/models/train.py
      - data/processed/clean.csv
    metrics:
      - metrics.json`,
      },
    ],
    note: {
      en: "Every dataset version is tied to a Git commit — checkout any commit and dvc checkout restores the exact data that produced it.",
      es: "Cada versión del conjunto de datos está ligada a un commit de Git: al hacer checkout de cualquier commit, dvc checkout restaura exactamente los datos que lo produjeron.",
    },
  },

  /* ------------------------ 03 · Experimentation ----------------------- */
  {
    id: "experiment-tracking",
    type: "grid",
    section: 3,
    eyebrow: { en: "03 · Experimentation", es: "03 · Experimentación" },
    title: { en: "Track Every Experiment", es: "Registra Cada Experimento" },
    lede: {
      en: "If a result isn't logged, it didn't happen. Experiment tracking turns ad-hoc notebook runs into a searchable, comparable history.",
      es: "Si un resultado no se registra, no existió. El seguimiento de experimentos convierte ejecuciones improvisadas de notebooks en un historial buscable y comparable.",
    },
    cols: 3,
    panels: [
      {
        title: { en: "Parameters", es: "Parámetros" },
        body: {
          en: "Hyperparameters, feature sets, random seeds — the recipe for each run.",
          es: "Hiperparámetros, conjuntos de variables, semillas aleatorias: la receta de cada ejecución.",
        },
      },
      {
        title: { en: "Metrics", es: "Métricas" },
        body: {
          en: "Loss curves, accuracy, business metrics — logged per step, not just the final number.",
          es: "Curvas de pérdida, precisión, métricas de negocio: registradas paso a paso, no solo el número final.",
        },
      },
      {
        title: { en: "Artifacts", es: "Artefactos" },
        body: {
          en: "Model weights, plots, and evaluation reports attached to the run that produced them.",
          es: "Pesos del modelo, gráficos e informes de evaluación adjuntos a la ejecución que los produjo.",
        },
      },
    ],
    note: {
      en: 'Tools in this space (e.g. MLflow, Weights & Biases) exist mainly to make "which run was that?" a solved problem.',
      es: "Herramientas como MLflow o Weights & Biases existen principalmente para resolver la pregunta «¿cuál fue esa ejecución?».",
    },
  },
  {
    id: "mlflow-in-action",
    type: "code",
    section: 3,
    eyebrow: { en: "03 · Experimentation", es: "03 · Experimentación" },
    title: {
      en: "MLflow in Action: Track Everything",
      es: "MLflow en Acción: Registra Todo",
    },
    lede: {
      en: "A config-driven training function logs params, metrics, and the model itself on every run.",
      es: "Una función de entrenamiento basada en configuración registra parámetros, métricas y el propio modelo en cada ejecución.",
    },
    code: `def train_model(config_path):
    config = yaml.safe_load(open(config_path))
    mlflow.set_experiment(config['experiment_name'])

    with mlflow.start_run(run_name=config['run_name']):
        mlflow.log_params(config['model_params'])

        X_train, y_train = load_data(config['data_path'])
        model = RandomForestClassifier(**config['model_params'])
        model.fit(X_train, y_train)

        mlflow.log_metric("accuracy",
            accuracy_score(y_val, model.predict(X_val)))
        mlflow.sklearn.log_model(model, "model")`,
    sidePanels: [
      {
        en: "Compare experiments visually in the MLflow UI",
        es: "Compara experimentos visualmente en la interfaz de MLflow",
      },
      {
        en: "Reproduce any run from its logged params + code version",
        es: "Reproduce cualquier ejecución a partir de sus parámetros registrados y la versión del código",
      },
      {
        en: "Deploy models directly from the registry",
        es: "Despliega modelos directamente desde el registro",
      },
    ],
  },
  {
    id: "reproducible-envs",
    type: "grid",
    section: 3,
    eyebrow: { en: "03 · Experimentation", es: "03 · Experimentación" },
    title: { en: "Reproducible Environments", es: "Entornos Reproducibles" },
    lede: {
      en: '"Works on my machine" is not acceptable for a training job that needs to run identically today, next month, and on a teammate\'s laptop.',
      es: "«Funciona en mi máquina» no es aceptable para un trabajo de entrenamiento que debe ejecutarse de forma idéntica hoy, el próximo mes y en la laptop de un compañero.",
    },
    cols: 3,
    panels: [
      {
        title: { en: "Containers", es: "Contenedores" },
        body: {
          en: "Docker images pin the OS, drivers, and system libraries around the training/serving code.",
          es: "Las imágenes de Docker fijan el sistema operativo, los drivers y las librerías del sistema alrededor del código de entrenamiento/servicio.",
        },
      },
      {
        title: { en: "Locked dependencies", es: "Dependencias fijadas" },
        body: {
          en: "Exact, hashed package versions — not loose ranges — so a rebuild resolves identically.",
          es: "Versiones exactas y con hash de cada paquete, no rangos abiertos, para que una reconstrucción resuelva siempre igual.",
        },
      },
      {
        title: { en: "Infra as code", es: "Infraestructura como código" },
        body: {
          en: "Clusters, GPUs, and networking defined in version-controlled templates, not clicked together by hand.",
          es: "Clústeres, GPUs y redes definidos en plantillas versionadas, no configurados a mano con clics.",
        },
      },
    ],
  },
  {
    id: "project-structure",
    type: "filetree",
    section: 3,
    eyebrow: { en: "03 · Experimentation", es: "03 · Experimentación" },
    title: {
      en: "How to format your Ready-Production Project",
      es: "Cómo formatear su proyecto listo para Producción",
    },
    lede: {
      en: " Stop using flat notebooks, A production-ready project separates concerns — data, source code, configs, and tests each get their own home.",
      es: "Deja de usar notebooks planos, Un proyecto listo para producción separa responsabilidades: datos, código fuente, configuración y pruebas, cada uno con su propio lugar.",
    },
    panels: [
      {
        title: { en: "data/", es: "data/" },
        body: {
          en: "raw, processed, and feature-engineered datasets",
          es: "conjuntos de datos crudos, procesados y con variables ya construidas",
        },
      },
      {
        title: { en: "src/", es: "src/" },
        body: {
          en: "data, features, models, evaluation code",
          es: "código de datos, variables, modelos y evaluación",
        },
      },
      {
        title: { en: "configs/", es: "configs/" },
        body: {
          en: "hyperparameters & pipeline settings as code",
          es: "hiperparámetros y configuración del pipeline como código",
        },
      },
      {
        title: { en: "tests/", es: "tests/" },
        body: {
          en: "automated validation for code and data",
          es: "validación automatizada de código y datos",
        },
      },
      {
        title: { en: "notebooks/", es: "notebooks/" },
        body: {
          en: "exploration only — never production logic",
          es: "solo para exploración, nunca lógica de producción",
        },
      },
      {
        title: { en: "dvc.yaml", es: "dvc.yaml" },
        body: {
          en: "reproducible pipeline definition",
          es: "definición reproducible del pipeline",
        },
      },
    ],
    tree: `ml-project/
├── data/
│   ├── raw/
│   ├── processed/
│   └── features/
├── notebooks/
├── src/
│   ├── data/
│   ├── features/
│   ├── models/
│   └── evaluation/
├── configs/
├── tests/
├── mlruns/
├── dvc.yaml
└── requirements.txt`,
  },

  /* ------------------------------ 04 · Quality -------------------------- */
  {
    id: "testing-ml",
    type: "grid",
    section: 4,
    eyebrow: { en: "04 · Quality", es: "04 · Calidad" },
    title: { en: "Testing an ML System", es: "Probar un Sistema de ML" },
    lede: {
      en: "Unit tests alone don't catch a model that's statistically wrong. ML systems need their own test pyramid.",
      es: "Las pruebas unitarias solas no detectan un modelo que está estadísticamente equivocado. Los sistemas de ML necesitan su propia pirámide de pruebas.",
    },
    cols: 2,
    panels: [
      {
        title: { en: "Data tests", es: "Pruebas de datos" },
        body: {
          en: "Schema, ranges, nulls, and distribution checks on every incoming batch.",
          es: "Verificación de esquema, rangos, nulos y distribución en cada lote entrante.",
        },
      },
      {
        title: { en: "Unit tests", es: "Pruebas unitarias" },
        body: {
          en: "Feature transforms and pipeline code, tested like any other software.",
          es: "Transformaciones de variables y código del pipeline, probados como cualquier otro software.",
        },
      },
      {
        title: { en: "Behavioral tests", es: "Pruebas de comportamiento" },
        body: {
          en: "Invariance and directional-expectation checks — e.g. changing an unrelated field shouldn't flip the prediction.",
          es: "Verificaciones de invariancia y expectativas direccionales: p. ej., cambiar un campo no relacionado no debería alterar la predicción.",
        },
      },
      {
        title: { en: "Integration tests", es: "Pruebas de integración" },
        body: {
          en: "The full pipeline end-to-end, including serving latency and contract checks.",
          es: "El pipeline completo de extremo a extremo, incluyendo latencia de servicio y verificación de contratos.",
        },
      },
    ],
  },
  {
    id: "best-practices",
    type: "levels",
    section: 4,
    eyebrow: { en: "04 · Quality", es: "04 · Calidad" },
    title: { en: "Best Practices", es: "Buenas Prácticas" },
    lede: {
      en: "Five habits that separate teams that ship ML reliably from teams that don't.",
      es: "Cinco hábitos que distinguen a los equipos que llevan ML a producción de forma confiable.",
    },
    levels: [
      {
        tag: { en: "1", es: "1" },
        name: {
          en: "Treat Config as Code",
          es: "Trata la Configuración como Código",
        },
        desc: {
          en: "Never hardcode hyperparameters — use versioned YAML config files.",
          es: "Nunca fijes los hiperparámetros en el código; usa archivos de configuración YAML versionados.",
        },
      },
      {
        tag: { en: "2", es: "2" },
        name: {
          en: "Automate Data Quality Checks",
          es: "Automatiza los Controles de Calidad de Datos",
        },
        desc: {
          en: "Validate every batch with tools like Great Expectations before training.",
          es: "Valida cada lote con herramientas como Great Expectations antes de entrenar.",
        },
      },
      {
        tag: { en: "3", es: "3" },
        name: {
          en: "Implement Model Monitoring",
          es: "Implementa Monitoreo de Modelos",
        },
        desc: {
          en: "Detect data drift automatically and trigger retraining (e.g. Evidently).",
          es: "Detecta el drift de datos automáticamente y dispara el reentrenamiento (p. ej. con Evidently).",
        },
      },
      {
        tag: { en: "4", es: "4" },
        name: { en: "Version Everything", es: "Versiona Todo" },
        desc: {
          en: "Code in Git, data in DVC, models in MLflow Registry, infra in Terraform.",
          es: "Código en Git, datos en DVC, modelos en el Registry de MLflow, infraestructura en Terraform.",
        },
      },
      {
        tag: { en: "5", es: "5" },
        name: {
          en: "Shadow Mode Deployments",
          es: "Despliegues en Modo Sombra",
        },
        desc: {
          en: "Run candidate models alongside production, compare before promoting.",
          es: "Ejecuta los modelos candidatos junto a producción y compáralos antes de promoverlos.",
        },
      },
    ],
  },

  /* ----------------------------- 05 · Pitfalls -------------------------- */
  {
    id: "common-pitfalls",
    type: "pitfalls",
    section: 5,
    eyebrow: { en: "05 · Pitfalls", es: "05 · Errores Comunes" },
    title: {
      en: "Common Pitfalls & How to Avoid Them",
      es: "Errores Comunes y Cómo Evitarlos",
    },
    lede: {
      en: "Four mistakes that quietly sink ML projects — and the fix for each.",
      es: "Cuatro errores que hunden en silencio los proyectos de ML, y cómo corregir cada uno.",
    },
    cols: 2,
    panels: [
      {
        title: { en: "Training/Serving Skew", es: "Training/Serving Skew" },
        problem: {
          en: "Features computed differently in training vs. production.",
          es: "Las variables se calculan de forma distinta en entrenamiento y en producción.",
        },
        solution: {
          en: "Use a feature store or shared feature-engineering code for both.",
          es: "Usa un feature store o código de ingeniería de variables compartido para ambos.",
        },
      },
      {
        title: {
          en: "Data Leakage in CV",
          es: "Fuga de Datos en la Validación Cruzada",
        },
        problem: {
          en: "Shuffling before split lets future data leak into training.",
          es: "Mezclar los datos antes de dividirlos deja que información futura se filtre al entrenamiento.",
        },
        solution: {
          en: "Use time-based splits for temporal data.",
          es: "Usa divisiones basadas en el tiempo para datos temporales.",
        },
      },
      {
        title: {
          en: "Ignoring Model Decay",
          es: "Ignorar la Degradación del Modelo",
        },
        problem: {
          en: "Accuracy quietly degrades as the world changes.",
          es: "La precisión se degrada silenciosamente a medida que el mundo cambia.",
        },
        solution: {
          en: "Schedule regular retraining and monitor performance continuously.",
          es: "Programa reentrenamientos regulares y monitorea el desempeño de forma continua.",
        },
      },
      {
        title: {
          en: "Over-Engineering Too Early",
          es: "Sobre-ingeniería Prematura",
        },
        problem: {
          en: "Building Kubernetes clusters before validating model value.",
          es: "Construir clústeres de Kubernetes antes de validar el valor del modelo.",
        },
        solution: {
          en: "Follow crawl → walk → run: start simple, add complexity as value is proven.",
          es: "Sigue el principio gatear → caminar → correr: empieza simple y añade complejidad cuando el valor esté probado.",
        },
      },
    ],
  },
  {
    id: "pitfall-fix-time-split",
    type: "twocode",
    section: 5,
    eyebrow: { en: "05 · Pitfalls", es: "05 · Errores Comunes" },
    title: {
      en: "Fixing a Common Pitfall: Time-Based Splits",
      es: "Cómo Corregir un Error Común: Divisiones Basadas en el Tiempo",
    },
    lede: {
      en: "Random shuffling is the single most common source of data leakage in time-series problems.",
      es: "Mezclar aleatoriamente es la causa más común de fuga de datos en problemas de series temporales.",
    },
    blocks: [
      {
        label: { en: "Wrong", es: "Incorrecto" },
        tone: "bad",
        code: {
          en: `# Wrong — future data leaks into training
X_train, X_test = train_test_split(
    X, test_size=0.2, shuffle=True)`,
          es: `# Incorrecto: los datos futuros se filtran al entrenamiento
X_train, X_test = train_test_split(
    X, test_size=0.2, shuffle=True)`,
        },
      },
      {
        label: { en: "Right", es: "Correcto" },
        tone: "good",
        code: {
          en: `# Right — split strictly by time
split_date = df['date'].quantile(0.8)
train = df[df['date'] < split_date]
test = df[df['date'] >= split_date]`,
          es: `# Correcto: dividir estrictamente por tiempo
split_date = df['date'].quantile(0.8)
train = df[df['date'] < split_date]
test = df[df['date'] >= split_date]`,
        },
      },
    ],
  },

  /* ------------------------------- 06 · Roadmap ---------------------------- */
  {
    id: "maturity-model",
    type: "levels",
    section: 6,
    eyebrow: { en: "06 · Roadmap", es: "06 · Hoja de ruta" },
    title: {
      en: "An MLOps Maturity Model",
      es: "Un Modelo de Madurez de MLOps",
    },
    lede: {
      en: "Maturity is a gradient, not a switch. Most organizations move through these stages one capability at a time.",
      es: "La madurez es un gradiente, no un interruptor. La mayoría de las organizaciones avanza por estas etapas una capacidad a la vez.",
    },
    levels: [
      {
        tag: { en: "Level 0", es: "Nivel 0" },
        name: { en: "Manual", es: "Manual" },
        desc: {
          en: "Notebook-driven, manual training and deployment",
          es: "Impulsado por notebooks, entrenamiento y despliegue manuales",
        },
      },
      {
        tag: { en: "Level 1", es: "Nivel 1" },
        name: { en: "Pipeline automation", es: "Automatización de pipelines" },
        desc: {
          en: "Repeatable training pipelines, manual deployment",
          es: "Pipelines de entrenamiento repetibles, despliegue manual",
        },
      },
      {
        tag: { en: "Level 2", es: "Nivel 2" },
        name: { en: "CI/CD automation", es: "Automatización CI/CD" },
        desc: {
          en: "Automated build, test, and deployment of pipelines",
          es: "Compilación, prueba y despliegue automatizados de los pipelines",
        },
      },
      {
        tag: { en: "Level 3", es: "Nivel 3" },
        name: { en: "Full MLOps", es: "MLOps completo" },
        desc: {
          en: "Continuous training, monitoring, and automated retraining",
          es: "Entrenamiento continuo, monitoreo y reentrenamiento automatizado",
        },
      },
    ],
  },
  {
    id: "adoption-roadmap",
    type: "levels",
    section: 6,
    eyebrow: { en: "06 · Roadmap", es: "06 · Hoja de ruta" },
    title: {
      en: "Implementing MLOps: A Roadmap",
      es: "Implementar MLOps: Una Hoja de Ruta",
    },
    lede: {
      en: "A high-level path organizations follow to stand up an MLOps practice.",
      es: "Un camino general que siguen las organizaciones para establecer una práctica de MLOps.",
    },
    levels: [
      {
        tag: { en: "1", es: "1" },
        name: {
          en: "Establish current state & objectives",
          es: "Establece tu punto de partida y tus objetivos",
        },
        desc: {
          en: "Baseline today's deployment time and model accuracy; set concrete improvement goals.",
          es: "Mide tu tiempo de despliegue y precisión actuales; define metas de mejora concretas.",
        },
      },
      {
        tag: { en: "2", es: "2" },
        name: { en: "Build the MLOps team", es: "Forma el equipo de MLOps" },
        desc: {
          en: "Blend data science, engineering, ops, and domain expertise.",
          es: "Combina ciencia de datos, ingeniería, operaciones y conocimiento del negocio.",
        },
      },
      {
        tag: { en: "3", es: "3" },
        name: {
          en: "Define data governance",
          es: "Define la gobernanza de datos",
        },
        desc: {
          en: "Set standards for collection, storage, versioning, quality, and compliance.",
          es: "Establece estándares de recolección, almacenamiento, versionado, calidad y cumplimiento.",
        },
      },
      {
        tag: { en: "4", es: "4" },
        name: {
          en: "Select tools & platforms",
          es: "Elige herramientas y plataformas",
        },
        desc: {
          en: "Weigh build vs. buy, team experience, and community support.",
          es: "Evalúa construir vs. comprar, la experiencia del equipo y el soporte de la comunidad.",
        },
      },
      {
        tag: { en: "5", es: "5" },
        name: {
          en: "Automate the deployment pipeline",
          es: "Automatiza el pipeline de despliegue",
        },
        desc: {
          en: "Start with CI/CD for testing, tracking, and promoting models.",
          es: "Empieza con CI/CD para probar, rastrear y promover modelos.",
        },
      },
      {
        tag: { en: "6", es: "6" },
        name: { en: "Iterate and improve", es: "Itera y mejora" },
        desc: {
          en: "MLOps is ongoing — revisit objectives and raise the bar over time.",
          es: "MLOps es continuo: revisa los objetivos y sube el estándar con el tiempo.",
        },
      },
    ],
  },

  /* -------------------------------- Closing --------------------------------- */
  {
    id: "takeaways",
    type: "closing",
    section: 7,
    eyebrow: { en: "Closing", es: "Cierre" },
    title: { en: "Key Takeaways", es: "Conclusiones Clave" },
    cols: 2,
    panels: [
      {
        title: { en: "Version everything", es: "Versiona todo" },
        body: {
          en: "Code, data, models, and config — all reconstructible.",
          es: "Código, datos, modelos y configuración, todo reconstruible.",
        },
      },
      {
        title: { en: "Automate the pipeline", es: "Automatiza el pipeline" },
        body: {
          en: "From data validation through deployment, not just training.",
          es: "Desde la validación de datos hasta el despliegue, no solo el entrenamiento.",
        },
      },
      {
        title: { en: "Monitor in production", es: "Monitorea en producción" },
        body: {
          en: "Drift and decay are the default; watch for them continuously.",
          es: "El drift y la degradación son la norma; vigílalos de forma continua.",
        },
      },
      {
        title: { en: "Share ownership", es: "Comparte la responsabilidad" },
        body: {
          en: "MLOps succeeds as a team practice, not a handoff.",
          es: "MLOps funciona como una práctica de equipo, no como una entrega.",
        },
      },
    ],
    thankYou: { en: "Thank you.", es: "Gracias." },
  },
  {
    id: "challenge-kickoff",
    type: "image",
    section: 7,
    title: { en: "Challenge Kickoff", es: "Inicio del Reto" },
    src: "mlops-world-cup.jpg",
    alt: {
      en: "MLOps World Cup",
      es: "Copa Mundial de MLOps",
    },
    caption: {
      en: "Let's move on to today's challenge.",
      es: "Pasemos al reto de hoy.",
    },
  },
];

/* ---------------------------------------------------------------------- */
/*  Quiz (10 questions)                                                    */
/* ---------------------------------------------------------------------- */

export const QUIZ = [
  {
    topic: { en: "MLflow", es: "MLflow" },
    question: {
      en: "What's the main difference between what Scikit-learn does and what an experiment-tracking tool like MLflow does?",
      es: "¿Cuál es la diferencia principal entre lo que hace Scikit-learn y lo que hace una herramienta de seguimiento de experimentos como MLflow?",
    },
    options: [
      {
        en: "Scikit-learn performs the actual training/prediction; MLflow records what happened during that process",
        es: "Scikit-learn realiza el entrenamiento/predicción real; MLflow registra lo que ocurrió durante ese proceso",
      },
      {
        en: "Scikit-learn logs metadata; MLflow trains the model",
        es: "Scikit-learn registra metadatos; MLflow entrena el modelo",
      },
      {
        en: "They do the same job, just with different syntax",
        es: "Hacen lo mismo, solo con sintaxis diferente",
      },
      {
        en: "MLflow replaces the need for a machine learning library entirely",
        es: "MLflow elimina por completo la necesidad de una librería de machine learning",
      },
    ],
    correct: 0,
    correctReason: {
      en: "Scikit-learn does the actual modeling work; MLflow just records what happened so you can find it again later.",
      es: "Scikit-learn hace el trabajo real de modelado; MLflow solo registra lo que ocurrió para que puedas encontrarlo después.",
    },
    wrongReasons: [
      null,
      {
        en: "That's backwards — scikit-learn does the training, MLflow does the logging.",
        es: "Está al revés: scikit-learn hace el entrenamiento, MLflow hace el registro.",
      },
      {
        en: "They solve different problems: one builds models, the other tracks and organizes the results of doing so.",
        es: "Resuelven problemas distintos: uno construye modelos, el otro rastrea y organiza los resultados de hacerlo.",
      },
      {
        en: "MLflow complements a library like scikit-learn — you still need it to actually build and fit models.",
        es: "MLflow complementa a una librería como scikit-learn; de todas formas la necesitas para construir y ajustar modelos.",
      },
    ],
  },
  {
    topic: { en: "MLflow", es: "MLflow" },
    question: {
      en: "In MLflow, which of these would you log as a Parameter rather than a Metric?",
      es: "En MLflow, ¿cuál de estos registrarías como un Parámetro en lugar de una Métrica?",
    },
    options: [
      {
        en: "The learning rate used for training",
        es: "La tasa de aprendizaje usada para el entrenamiento",
      },
      {
        en: "The model's test accuracy",
        es: "La precisión del modelo en el conjunto de prueba",
      },
      {
        en: "A confusion matrix image",
        es: "Una imagen de la matriz de confusión",
      },
      { en: "The trained model file", es: "El archivo del modelo entrenado" },
    ],
    correct: 0,
    correctReason: {
      en: "Parameters are inputs you fix before training starts — a learning rate is exactly that.",
      es: "Los parámetros son entradas que fijas antes de empezar el entrenamiento; la tasa de aprendizaje es exactamente eso.",
    },
    wrongReasons: [
      null,
      {
        en: "Test accuracy is measured after training finishes — that makes it a metric, not a parameter.",
        es: "La precisión se mide después de que termina el entrenamiento, eso la convierte en una métrica, no en un parámetro.",
      },
      {
        en: "A confusion matrix image is a file attached to the run — that's an artifact, not a parameter.",
        es: "Una imagen de matriz de confusión es un archivo adjunto a la ejecución: eso es un artefacto, no un parámetro.",
      },
      {
        en: "The trained model file is logged as a model artifact via mlflow.log_model(), not a parameter.",
        es: "El archivo del modelo entrenado se registra como un artefacto de modelo mediante mlflow.log_model(), no como un parámetro.",
      },
    ],
  },
  {
    topic: {
      en: "Preprocessing & Ensemble Methods",
      es: "Preprocesamiento y Métodos de Ensamble",
    },
    question: {
      en: 'When treating outliers with the IQR (interquartile range) method, "capping" (winsorizing) a value means:',
      es: "Al tratar valores atípicos con el método del RIC (rango intercuartílico), «acotar» (winsorizar) un valor significa:",
    },
    options: [
      {
        en: "Deleting the row that contains it",
        es: "Eliminar la fila que lo contiene",
      },
      {
        en: "Replacing it with the nearest boundary of the acceptable range instead of removing the row",
        es: "Reemplazarlo por el límite más cercano del rango aceptable, en lugar de eliminar la fila",
      },
      {
        en: "Replacing it with the column mean",
        es: "Reemplazarlo por la media de la columna",
      },
      {
        en: "Ignoring it during training but keeping it for evaluation",
        es: "Ignorarlo durante el entrenamiento pero conservarlo para la evaluación",
      },
    ],
    correct: 1,
    correctReason: {
      en: "Capping clips the value to the nearest acceptable boundary instead of throwing the row away.",
      es: "Acotar recorta el valor hasta el límite aceptable más cercano en lugar de descartar la fila.",
    },
    wrongReasons: [
      {
        en: "Deleting the row is a different, more destructive technique (trimming) — capping keeps the row.",
        es: "Eliminar la fila es una técnica distinta y más destructiva (recorte/trimming); acotar conserva la fila.",
      },
      null,
      {
        en: "Replacing with the mean is a separate imputation-style choice, not what IQR capping does.",
        es: "Reemplazar por la media es una decisión distinta, de tipo imputación; no es lo que hace el acotado por RIC.",
      },
      {
        en: "Capping changes the stored value itself — it doesn't selectively hide it from just one phase.",
        es: "Acotar cambia el propio valor almacenado; no se trata de ocultarlo selectivamente en una sola fase.",
      },
    ],
  },
  {
    topic: {
      en: "Preprocessing & Ensemble Methods",
      es: "Preprocesamiento y Métodos de Ensamble",
    },
    question: {
      en: "Conceptually, how does Boosting (e.g. XGBoost) differ from Bagging (e.g. Random Forest)?",
      es: "Conceptualmente, ¿en qué se diferencia el Boosting (p. ej. XGBoost) del Bagging (p. ej. Random Forest)?",
    },
    options: [
      {
        en: "Boosting trains trees independently in parallel; Bagging trains them sequentially",
        es: "El Boosting entrena árboles de forma independiente y en paralelo; el Bagging los entrena secuencialmente",
      },
      {
        en: "Boosting trains trees sequentially, each one correcting the errors of the previous ones; Bagging trains trees independently on bootstrap samples",
        es: "El Boosting entrena árboles secuencialmente, cada uno corrigiendo los errores de los anteriores; el Bagging entrena árboles de forma independiente sobre muestras bootstrap",
      },
      {
        en: "Boosting only supports regression tasks",
        es: "El Boosting solo admite tareas de regresión",
      },
      {
        en: "There's no real difference between the two approaches",
        es: "No hay una diferencia real entre los dos enfoques",
      },
    ],
    correct: 1,
    correctReason: {
      en: "Boosting corrects errors sequentially, tree after tree; Bagging averages independent trees trained in parallel.",
      es: "El Boosting corrige errores secuencialmente, árbol tras árbol; el Bagging promedia árboles independientes entrenados en paralelo.",
    },
    wrongReasons: [
      {
        en: "That's the two swapped — it's Bagging that trains independently in parallel; Boosting is the sequential one.",
        es: "Están invertidos: es el Bagging el que entrena de forma independiente y en paralelo; el Boosting es el secuencial.",
      },
      null,
      {
        en: "Boosting implementations like XGBoost handle both classification and regression.",
        es: "Implementaciones de Boosting como XGBoost manejan tanto clasificación como regresión.",
      },
      {
        en: "The two are fundamentally different in how they combine trees — sequential correction versus independent averaging.",
        es: "Ambos son fundamentalmente distintos en cómo combinan los árboles: corrección secuencial frente a promediado independiente.",
      },
    ],
  },
];
